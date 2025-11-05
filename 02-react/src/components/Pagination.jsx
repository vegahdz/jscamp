

export function Pagination(props) {

    const {
        currentPage,
        totalPages
    } = props;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <>
            <nav className="pagination">
                <button>-</button>
                {pages.map(page => (
                    <button
                        key={page}
                        className={currentPage === page ? 'is-active': ''}
                    >
                        {page}
                    </button>
                ))}
                <button>+</button>
            </nav>
        </>
    )
}