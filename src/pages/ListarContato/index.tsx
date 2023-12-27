import { useRecoilState } from 'recoil'
import './style.css'
import { listaContatoState } from '../../states/atom'
import CartaoContato from '../../components/CartaoContato'

function ListarContato() {

    const [contatos] = useRecoilState(listaContatoState)

    return (
        <div id="listar-contato">
            <h1>Olá, Fulano! 👋</h1>
            <p>Aqui está a lista de seus contatos...</p>
            {contatos.map(contato => <CartaoContato contato={contato} />)}
        </div>
    )
}

export default ListarContato