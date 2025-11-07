import { Link } from 'react-router-dom'
import { IconCode } from '@tabler/icons-react';

export function Header() {
    return (
        <>
            <header>
                <Link to="/" style={{ color: 'white', textDecoration: 'none'}}>
                    <h1>
                        <IconCode />
                        DevJobs
                    </h1>
                </Link>
                <nav>
                    <Link to="/">Inicio</Link> |{" "}
                    <Link to="/empleos/">Empleos</Link> |{" "}
                    <Link to="/contacto/">Contacto</Link>
                </nav>

                <div>
                    <devjobs-avatar service="google" username="google.com" size="32">
                    </devjobs-avatar>

                    <devjobs-avatar service="google" username="netflix.com" size="32">
                    </devjobs-avatar>

                    <devjobs-avatar service="google" username="vercel.com" size="32">
                    </devjobs-avatar>
                </div>
            </header>
        </>
    )
}