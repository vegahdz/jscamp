
// Función para pintar la paginación
import ChevronLeft from '@/img/chevron-left.svg?raw'
import ChevronRight from '@/img/chevron-right.svg?raw'


export function renderPagination(filteredJobs, RESULTS_PER_PAGE, currentPage, onPageChange) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(filteredJobs.length / RESULTS_PER_PAGE);
    if (totalPages <= 1) return;

    const previousBtn = document.createElement('button');
    previousBtn.innerHTML = `
        ${ChevronLeft}
    `;
    previousBtn.disabled = currentPage === 1;

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = `
        ${ChevronRight}
    `;
    nextBtn.disabled = currentPage === totalPages;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = i === currentPage ? 'is-active' : '';
        btn.addEventListener('click', () => onPageChange(i, filteredJobs));
        paginationContainer.appendChild(btn);
    }

    paginationContainer.prepend(previousBtn);
    paginationContainer.appendChild(nextBtn);

    previousBtn.addEventListener('click', () => onPageChange(currentPage - 1, filteredJobs));
    nextBtn.addEventListener('click', () => onPageChange(currentPage + 1, filteredJobs));
}
