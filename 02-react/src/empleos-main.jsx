import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Empleos } from './components/Empleos.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Empleos />
    </StrictMode>,
)
