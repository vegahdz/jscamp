import { createFilters } from './filters.js';
import { applyFilters } from './applyFilters.js';


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
    renderPagination();
    createFilters(allJobs, onFilterChange);
  });

// Función que se llama al cambiar filtros
function onFilterChange(filtersValues) {
  filteredJobs = applyFilters(allJobs, filtersValues);
  currentPage = 1;
  renderJobs();
  renderPagination();
}

// Función para pintar trabajos
function renderJobs() {
  const container = document.querySelector('.jobs-listings');
  container.innerHTML = '';


  if (filteredJobs.length === 0) {
    container.innerHTML = `
    <section class="no-results">
      <p>No se encontraron empleos que coincidan con los filtros aplicados.</p>
      <button class="button-clear-filters">Limpiar filtros</button>
    </section
    `;
    const clearBtn = document.querySelector('.button-clear-filters');
    clearBtn.addEventListener('click', () => {
      filteredJobs = allJobs;
      currentPage = 1;
      renderJobs();
      renderPagination();
      // Resetear los filtros en el formulario
      const formFilters = document.querySelector('#jobs-search-form');
      formFilters.reset();
    });
    return;
  }

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
        <p>${Array.isArray(job.data.technology) ? job.data.technology.join(', ') : job.data.technology}</p>
        <small>${job.empresa} | ${job.ubicacion}</small>
        <p>${job.descripcion}</p>
      </div>
      <button class="button-apply-job">Aplicar</button>
    `;
    container.appendChild(article);
  });
}

// Función para pintar la paginación
function renderPagination() {
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(filteredJobs.length / RESULTS_PER_PAGE);
  if (totalPages <= 1) return;

  const previousBtn = document.createElement('button');
  previousBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
  `;
  previousBtn.disabled = currentPage === 1;

  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
  `;
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
