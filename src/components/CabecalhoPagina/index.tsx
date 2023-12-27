import { Link } from 'react-router-dom'
import './style.css'

function CabecalhoPagina() {
    const menus = [
        {
            para: '/',
            descricao: 'Início'
        },
        {
            para: '/cadastrar',
            descricao: 'Cadastrar'
        }
    ]

    return (
        <div className='cabecalho-pagina'>
            <div className='logo'>
                <h2>Agendex</h2>
            </div>
            <div className='menus'>
                {menus.map((menu, index) => <Link className='menu' key={index} to={menu.para}>{menu.descricao} </Link>)}
            </div>
        </div>
    )
}

export default CabecalhoPagina