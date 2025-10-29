import { createFilters } from './filters.js';

const container = document.querySelector('.jobs-listings');
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
    createFilters(allJobs, applyFilters); // ✅ pasa la función
    renderPagination();
  });

function renderJobs() {
  container.innerHTML = '';

  const start = (currentPage - 1) * RESULTS_PER_PAGE;
  const end = start + RESULTS_PER_PAGE;
  const jobsToShow = filteredJobs.slice(start, end);

  jobsToShow.forEach(job => {
    const article = document.createElement('article');
    article.className = 'job-listing-card';
    article.innerHTML = `
      <div>
        <h3>${job.titulo}</h3>
        <h4>${job.data.modalidad} | ${job.data.nivel}</h4>
        <p>${job.data.technology}</p>
        <small>${job.empresa} | ${job.ubicacion}</small>
        <p>${job.descripcion}</p>
      </div>
      <button class="button-apply-job">Aplicar</button>
    `;
    container.appendChild(article);
  });
}

function renderPagination() {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(filteredJobs.length / RESULTS_PER_PAGE);
  if (totalPages <= 1) return;

  const previousBtn = document.createElement('button');
  previousBtn.textContent = '<';
  previousBtn.disabled = currentPage === 1;

  const nextBtn = document.createElement('button');
  nextBtn.textContent = '>';
  nextBtn.disabled = currentPage === totalPages;

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
  paginationContainer.appendChild(nextBtn);

  previousBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderJobs();
      renderPagination();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderJobs();
      renderPagination();
    }
  });
}

// ✅ mover applyFilters aquí
function applyFilters() {
  const search = document.querySelector('#search').value.toLowerCase();
  const modalidad = document.querySelector('#modalidad').value;
  const nivel = document.querySelector('#nivel').value;
  const technology = document.querySelector('#technology').value;
  const ubicaciones = document.querySelector('#ubicaciones').value;


  filteredJobs = allJobs.filter(job => {
    const titleMatch = job.titulo.toLowerCase().includes(search);
    const modalidadMatch = !modalidad || job.data.modalidad === modalidad;
    const nivelMatch = !nivel || job.data.nivel === nivel;
    const techs = Array.isArray(job.data.technology)
      ? job.data.technology
      : [job.data.technology];
    const technologyMatch = !technology || techs.includes(technology);
    const ubicacionMatch = !ubicaciones || job.ubicacion === ubicaciones;


    return titleMatch && modalidadMatch && nivelMatch && technologyMatch && ubicacionMatch
  });

  currentPage = 1;
  renderJobs();
  renderPagination();

  console.log(filteredJobs);
}
