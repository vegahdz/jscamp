import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/Header.jsx'
import { Footer } from '@/components/Footer.jsx'

export default function NotFound() {
    const navigate = useNavigate()

    const goBack = () => {
        // Si hay historial previo, retrocede; si no, manda al home
        if (window.history.state && window.history.length > 2) {
            navigate(-1)
        } else {
            navigate('/')
        }
    }

    return (
        <>
            <Header />

            <div style={{ textAlign: 'center', padding: '3rem' }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <h1>404 - Página no encontrada 😢</h1>
                    <p>La página que buscas no existe o fue movida.</p>
                    <button
                        onClick={goBack}
                        style={{
                            marginTop: '1.5rem',
                            padding: '0.5rem 1rem',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            border: '1px solid #333',
                            backgroundColor: '#222',
                            color: 'white'
                        }}
                    >
                        Volver atrás
                    </button>
                </div>
            </div>

            <Footer />
        </>
    )
}
