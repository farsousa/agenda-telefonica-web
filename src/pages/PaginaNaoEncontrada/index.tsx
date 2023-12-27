import { useNavigate } from 'react-router-dom'
import './style.css'

function PaginaNaoEncontrada() {
    const navegate = useNavigate()

    return (
        <div id="pagina-nao-encontrada">
            <h1>404</h1>
            <p>Página não encontrada</p>
            <span onClick={() => navegate(-1)}>{'< Voltar'}</span>
        </div>
    )
}

export default PaginaNaoEncontrada