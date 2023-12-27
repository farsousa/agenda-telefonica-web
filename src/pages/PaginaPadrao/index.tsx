import './style.css'
import CabecalhoPagina from '../../components/CabecalhoPagina'
import { Outlet } from 'react-router-dom'
import RodapePagina from '../../components/RodapePagina'

function PaginaPadrao() {
    return (
        <div id="pagina-padrao">
            <header>
                <CabecalhoPagina />
            </header>
            <main>                
                <Outlet />
            </main>
            <footer>                
                <RodapePagina />
            </footer>
        </div>
    )
}

export default PaginaPadrao