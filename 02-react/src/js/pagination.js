
// Función para pintar la paginación
export function renderPagination(filteredJobs, RESULTS_PER_PAGE, currentPage, onPageChange) {
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
        btn.addEventListener('click', () => onPageChange(i, filteredJobs));
        paginationContainer.appendChild(btn);
    }

    paginationContainer.prepend(previousBtn);
    paginationContainer.appendChild(nextBtn);

    previousBtn.addEventListener('click', () => onPageChange(currentPage - 1, filteredJobs));
    nextBtn.addEventListener('click', () => onPageChange(currentPage + 1, filteredJobs));
}
