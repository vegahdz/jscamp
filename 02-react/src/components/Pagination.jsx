import { IconChevronLeft } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';

export function Pagination(props) {

    const {
        currentPage = 1,
        onPageChange,
        totalPages = 1,
    } = props;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePrevClick = (event) => {
        event.preventDefault();
        if(!isFirstPage) {
            onPageChange(currentPage - 1);
        }
    }

    const handleNextClick = (event) => {
        event.preventDefault();
        if (!isLastPage) {
            onPageChange(currentPage + 1);
        }
    }

    const handleChangePage = (event, page) => {
        event.preventDefault();
        if (page !== currentPage) {
            onPageChange(page);
        }
    }

    return (
        <nav className="pagination">

            <button
                disabled={currentPage === 1}
                onClick={handlePrevClick}
            >
                <IconChevronLeft />
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    className={currentPage === page ? 'is-active': ''}
                    onClick={(event) => handleChangePage(event, page)}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={handleNextClick}
            >
                <IconChevronRight />
            </button>

        </nav>
    )
}