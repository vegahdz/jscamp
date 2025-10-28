const container = document.querySelector('.jobs-listings');
const filtersContainer = document.querySelector('#jobs-search-form');
const paginationContainer = document.querySelector('.pagination');

const RESULTS_PER_PAGE = 5;
let allJobs = [];
let filteredJobs = [];
let currentPage = 1;

// 1️⃣ Cargar y pintar empleos
fetch("./data.json")
  .then(res => res.json())
  .then(jobs => {
    allJobs = jobs;
    filteredJobs = jobs;
    renderJobs();
    createFilters(allJobs);
    renderPagination();
  });

function renderJobs() {
  container.innerHTML = '';

  // calcular los índices
  const start = (currentPage - 1) * RESULTS_PER_PAGE;
  const end = start + RESULTS_PER_PAGE;
  const jobsToShow = filteredJobs.slice(start, end);

  jobsToShow.forEach(job => {
    const article = document.createElement('article');
    article.className = 'job-listing-card';

    article.dataset.modalidad = job.data.modalidad;
    article.dataset.nivel = job.data.nivel;
    article.dataset.technology = Array.isArray(job.data.technology)
      ? job.data.technology.join(',')
      : job.data.technology;

    article.innerHTML = `
      <div>
        <h3>${job.titulo}</h3>
        <small>${job.empresa} | ${job.ubicacion}</small>
        <p>${job.descripcion}</p>
      </div>
      <button class="button-apply-job">Aplicar</button>
    `;
    container.appendChild(article);
  });
}

// 2️⃣ Crear filtros dinámicamente
function createFilters(jobs) {
  const modalidades = [...new Set(jobs.map(j => j.data.modalidad))].sort();
  const niveles = [...new Set(jobs.map(j => j.data.nivel))].sort();
  const tecnologias = [
    ...new Set(
      jobs.flatMap(j =>
        Array.isArray(j.data.technology) ? j.data.technology : [j.data.technology]
      )
    ),
  ].sort();

  filtersContainer.innerHTML = `
    <div class="search-bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>

      <input type="text" id="search" placeholder="Buscar por título...">

    </div>

    <select id="modalidad">
      <option value="">Todas las modalidades</option>
      ${modalidades.map(m => `<option value="${m}">${m}</option>`).join('')}
    </select>

    <select id="nivel">
      <option value="">Todos los niveles</option>
      ${niveles.map(n => `<option value="${n}">${n}</option>`).join('')}
    </select>

    <select id="technology">
      <option value="">Todas las tecnologías</option>
      ${tecnologias.map(t => `<option value="${t}">${t}</option>`).join('')}
    </select>
  `;

  filtersContainer.addEventListener('input', applyFilters);
  filtersContainer.addEventListener('change', applyFilters);
}

// 3️⃣ Filtrar según los selects y el input
function applyFilters() {
  const search = document.querySelector('#search').value.toLowerCase();
  const modalidad = document.querySelector('#modalidad').value;
  const nivel = document.querySelector('#nivel').value;
  const technology = document.querySelector('#technology').value;

  filteredJobs = allJobs.filter(job => {
    const titleMatch = job.titulo.toLowerCase().includes(search);
    const modalidadMatch = !modalidad || job.data.modalidad === modalidad;
    const nivelMatch = !nivel || job.data.nivel === nivel;

    const techs = Array.isArray(job.data.technology)
      ? job.data.technology
      : [job.data.technology];
    const technologyMatch = !technology || techs.includes(technology);

    return titleMatch && modalidadMatch && nivelMatch && technologyMatch;
  });

  currentPage = 1; // reinicia a la primera página al filtrar
  renderJobs();
  renderPagination();
}

// 4️⃣ Paginador dinámico
function renderPagination() {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(filteredJobs.length / RESULTS_PER_PAGE);
  const previousBtn = document.createElement('button');
  previousBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
  `;
  previousBtn.disabled = currentPage === 1;

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>  `;
  nextBtn.disabled = currentPage === totalPages;

  if (totalPages <= 1) return; // no mostrar si no hace falta

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = i === currentPage ? 'is-active' : '';
    btn.addEventListener('click', () => {
      currentPage = i;
      renderJobs();
      renderPagination();
    });
    paginationContainer.appendChild(btn);
  }

  paginationContainer.prepend(previousBtn);
  previousBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderJobs();
      renderPagination();
    }
  });

  paginationContainer.appendChild(nextBtn);
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderJobs();
      renderPagination();
    }
  });
}
