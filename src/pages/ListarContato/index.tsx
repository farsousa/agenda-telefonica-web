import { useRecoilState } from 'recoil'
import './style.css'
import { listaContatoState } from '../../states/atom'
import CartaoContato from '../../components/CartaoContato'

function ListarContato() {

    const [contatos] = useRecoilState(listaContatoState)

    return (
        <div id="listar-contato">
            <h1>Listar contatos</h1>
            {contatos.map(contato => <CartaoContato contato={contato} />)}
        </div>
    )
}

export default ListarContato