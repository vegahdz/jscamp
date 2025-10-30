export function applyFilters(jobs, filtersValues) {
  const { search, modalidad, nivel, technology, ubicaciones } = filtersValues;

  return jobs.filter(job => {
    const titleMatch = job.titulo.toLowerCase().includes(search.toLowerCase());
    const modalidadMatch = !modalidad || job.data.modalidad === modalidad;
    const nivelMatch = !nivel || job.data.nivel === nivel;
    const techs = Array.isArray(job.data.technology) ? job.data.technology : [job.data.technology];
    const technologyMatch = !technology || techs.includes(technology);
    const ubicacionMatch = !ubicaciones || job.ubicacion === ubicaciones;

    return titleMatch && modalidadMatch && nivelMatch && technologyMatch && ubicacionMatch;
  });
}
