export function applyFilters(jobs, filtersValues) {
  const { search, modalidad, nivel, technology, ubicacion } = filtersValues;

  return jobs.filter(job => {
    const titleMatch = job.titulo.toLowerCase().includes(search.toLowerCase());
    const modalidadMatch = !modalidad || job.data.modalidad === modalidad;
    const nivelMatch = !nivel || job.data.nivel === nivel;
    const techs = Array.isArray(job.data.technology)
      ? job.data.technology.map(t => t.toLowerCase().trim())
      : [job.data.technology.toLowerCase().trim()];

    const technologyMatch = !technology || techs.includes(technology.toLowerCase().trim());
    const ubicacionMatch = !ubicacion || job.ubicacion === ubicacion;

    return titleMatch && modalidadMatch && nivelMatch && technologyMatch && ubicacionMatch;
  });
}
