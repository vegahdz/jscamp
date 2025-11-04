import { createFilters } from './filters.js';
import { applyFilters } from './applyFilters.js';
import { renderPagination, renderJobs } from './pagination.js'


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
    renderJobs(filteredJobs, RESULTS_PER_PAGE, currentPage, allJobs, onPageChange);
    renderPagination(filteredJobs, RESULTS_PER_PAGE, currentPage, onPageChange);
    createFilters(allJobs, onFilterChange);
  });

// Función que se llama al cambiar filtros
function onFilterChange(filtersValues) {
  filteredJobs = applyFilters(allJobs, filtersValues);
  currentPage = 1;
  renderJobs(filteredJobs, RESULTS_PER_PAGE, currentPage, allJobs, onPageChange);
  renderPagination(filteredJobs, RESULTS_PER_PAGE, currentPage, onPageChange);
}

function onPageChange(newPage, filteredJobs) {
  currentPage = newPage;
  renderJobs(filteredJobs, RESULTS_PER_PAGE, currentPage, allJobs, onPageChange);
  renderPagination(filteredJobs, RESULTS_PER_PAGE, currentPage, onPageChange);
}