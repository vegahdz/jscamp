import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import Empleos from '@/pages/Empleos.jsx'
import NotFound from '@/pages/NotFound.jsx'
import Contacto from '@/pages/Contacto.jsx'

import '@/css/styles.css'


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleos/" element={<Empleos />} />
        <Route path="/contacto/" element={<Contacto />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
