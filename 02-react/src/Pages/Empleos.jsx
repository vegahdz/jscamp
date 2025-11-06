import { useState } from 'react'
import { Header } from '@/components/Header.jsx'
import { JobsListing } from '@/components/JobsListing.jsx'
import { Footer } from '@/components/Footer.jsx'
import { Pagination } from '@/components/Pagination.jsx'
import jobsData from '@/data/jobs.json'

const RESULTS_PER_PAGE = 7;


export function Empleos() {

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

    const PagedResults =  jobsData.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )


    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <>
            <Header />
            <JobsListing jobs={PagedResults} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <Footer />
        </>
    )
}