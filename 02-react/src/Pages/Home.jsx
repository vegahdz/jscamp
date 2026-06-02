import { Header } from '@/components/Header.jsx'
import { Footer } from '@/components/Footer.jsx'

export default function Home() {
    return (
        <>
            <Header />
            <div style={{ textAlign: 'center', padding: '3rem' }}>
                <h1>Página de inicio</h1>
            </div>
            <Footer />
        </>
    )
}
