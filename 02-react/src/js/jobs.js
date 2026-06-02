

// Función para pintar trabajos
export function renderJobs(filteredJobs, RESULTS_PER_PAGE, currentPage, allJobs, onPageChange) {
    const container = document.querySelector('.jobs-listings');
    container.innerHTML = '';

    if (filteredJobs.length === 0) {
        container.innerHTML = `
    <section class="no-results">
        <p>No se encontraron empleos que coincidan con los filtros aplicados.</p>
        <button class="button-clear-filters">Limpiar filtros</button>
    </section>
    `;

        const clearBtn = document.querySelector('.button-clear-filters');
        clearBtn.addEventListener('click', () => {
            const formFilters = document.querySelector('#jobs-search-form');
            formFilters.reset();

            // Fuerza que se apliquen los filtros “vacíos”
            const event = new Event('input', { bubbles: true });
            formFilters.dispatchEvent(event);

            // Opcional: volver a la primera página
            filteredJobs = allJobs;
            const currentPage = 1;

            onPageChange(currentPage, filteredJobs);
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
