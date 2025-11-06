
import { useState } from "react"

export function JobCard(props) {

    const { job } = props

    const { titulo, descripcion, empresa, ubicacion, data } = job;
    const { modalidad, nivel, technology } = data;

    const [isApplied, setIsApplied] = useState(false);

    const handleClick = () => {
        setIsApplied(!isApplied);
    }

    return(
        <article className="job-listing-card">
            <div>
                <h3>{titulo}</h3>
                <h4>{modalidad} | {nivel}</h4>
                <p>{Array.isArray(technology) ? technology.join(', ') : technology}</p>
                <small>{empresa} | {ubicacion}</small>
                <p>{descripcion}</p>
            </div>
            <button
                className={`button-apply-job ${isApplied ? 'is-applied' : ''}`}
                onClick={handleClick}
                type="button"
            >
                {isApplied ? 'Aplicado' : 'Aplicar'}
            </button>
        </article>
    )
}