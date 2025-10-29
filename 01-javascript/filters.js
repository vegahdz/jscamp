export function createFilters(jobs, onFilterChange) {
    const filtersContainer = document.querySelector('#jobs-search-form');

    const modalidades = [...new Set(jobs.map(j => j.data.modalidad))].sort();
    const niveles = [...new Set(jobs.map(j => j.data.nivel))].sort();
    const tecnologias = [
      ...new Set(
        jobs.flatMap(j => {
          const techs = Array.isArray(j.data.technology)
            ? j.data.technology
            : [j.data.technology];
          return techs.map(t => t.toLowerCase().trim());
        })
      ),
    ].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

    const ubicaciones = [...new Set(jobs.map(j => j.ubicacion))].sort();

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

    <select id="ubicaciones">
      <option value="">Todas las ubicaciones</option>
      ${ubicaciones.map(t => `<option value="${t}">${t}</option>`).join('')}
    </select>

  `;

    filtersContainer.addEventListener('input', onFilterChange);
    // filtersContainer.addEventListener('change', onFilterChange);
}
