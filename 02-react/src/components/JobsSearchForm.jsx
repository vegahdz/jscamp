import { IconSearch } from '@tabler/icons-react';
import { useId } from 'react';


export function JobsSearchForm() {

    const idJobsSearchForm = useId();
    const idSearch = useId();
    const idModalidad = useId();
    const idNivel = useId();
    const idTechnology = useId();
    const idUbicacion = useId();


    return (
        <form name={idJobsSearchForm} id="jobs-search-form" role="search">
            <div className="search-bar">
                <IconSearch />
                <input type="text" name={idSearch} id="search" placeholder="Buscar por título..." />
            </div>

            <select name={idModalidad} id="modalidad">
                <option value="">Todas las modalidades</option>
                <option value="barcelona">barcelona</option><option value="bogota">bogota</option><option value="bsas">bsas</option><option value="cdmx">cdmx</option><option value="guadalajara">guadalajara</option><option value="lima">lima</option><option value="madrid">madrid</option><option value="monterrey">monterrey</option><option value="remoto">remoto</option><option value="santiago">santiago</option><option value="valencia">valencia</option>
            </select>

            <select name={idNivel} id="nivel">
                <option value="">Todos los niveles</option>
                <option value="junior">junior</option><option value="mid">mid</option><option value="mid-level">mid-level</option><option value="senior">senior</option>
            </select>

            <select name={idTechnology} id="technology">
                <option value="">Todas las tecnologías</option>
                <option value="angular">angular</option><option value="angular js">angular js</option><option value="javascript">javascript</option><option value="mobile">mobile</option><option value="node">node</option><option value="python">python</option><option value="react">react</option>
            </select>

            <select name={idUbicacion} id="ubicacion">
                <option value="">Todas las ubicaciones</option>
                <option value="Barcelona">Barcelona</option><option value="Bogotá">Bogotá</option><option value="Buenos Aires">Buenos Aires</option><option value="Ciudad de México">Ciudad de México</option><option value="Guadalajara">Guadalajara</option><option value="Lima">Lima</option><option value="Madrid">Madrid</option><option value="Monterrey">Monterrey</option><option value="Remoto">Remoto</option><option value="Santiago de Chile">Santiago de Chile</option><option value="Valencia">Valencia</option>
            </select>
        </form>
    )
}