import { useRecoilState } from 'recoil'
import './style.css'
import { listaContatoState } from '../../states/atom'
import CartaoContato from '../../components/CartaoContato'

function ListarContato() {

    const [contatos] = useRecoilState(listaContatoState)

    return (
        <div id="listar-contato">
            <h1>Olá, Anderson! 👋</h1>
            <p>Aqui está a lista de seus contatos...</p>
            {contatos.map(contato => <CartaoContato key={contato.id} contato={contato} />)}            
        </div>
    )
}

export default ListarContato