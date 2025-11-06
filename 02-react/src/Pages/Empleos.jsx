import { useState } from 'react'
import { Header } from '@/components/Header.jsx'
import { JobsListing } from '@/components/JobsListing.jsx'
import { Footer } from '@/components/Footer.jsx'
import { Pagination } from '@/components/Pagination.jsx'
import jobsData from '@/data/jobs.json'

export function Empleos() {

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <>
            <Header />
            <JobsListing jobs={jobsData} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <Footer />
        </>
    )
}