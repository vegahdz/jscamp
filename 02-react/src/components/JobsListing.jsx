export function JobsListing() {

    return (
        <>
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
                    </div>

                    <nav className="pagination" style={{ display: 'none' }}>

                    </nav>
                </section>
            </main>
        </>
    )
}