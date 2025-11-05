import { Header } from '@/components/Header.jsx'
import { JobsListing } from '@/components/JobsListing.jsx'
import { Footer } from '@/components/Footer.jsx'
import { Pagination } from '@/components/Pagination.jsx'

export function Empleos() {
    return (
        <>
            <Header />
            <JobsListing />
            <Pagination currentPage={1} totalPages={10} />
            <Footer />
        </>
    )
}