import { JobCard } from '@/components/JobCard.jsx'

export function JobsListing({ jobs }) {

    return (
        <main>
            <section className="jobs-search">
                <h1>Encuentra tu próximo trabajo</h1>
                <p>Explora miles de oportunidades en el sector tecnológico.</p>

                <form id="jobs-search-form" role="search">


                </form>

                <span id="filter-selected-value"></span>
            </section>

            <section>
                <h2>Resultados de búsqueda</h2>

                <div className="jobs-listings">
                    {jobs.map(job => (
                        <JobCard
                            key={job.id}
                            job={job}
                        />
                    ))}
                </div>

            </section>
        </main>
    )
}