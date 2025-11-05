import { IconCode } from '@tabler/icons-react';

export function Header() {
    return (
        <>
            <header>
                <h1>
                    <IconCode />
                    DevJobs
                </h1>

                <nav>
                    <a href="../index.html">Inicio</a>
                    <a href="./empleos.html">Empleos</a>
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