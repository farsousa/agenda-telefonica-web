import { useNavigate, useParams } from 'react-router-dom'
import './style.css'
import { useRecoilState } from 'recoil'
import { listaContatoState } from '../../states/atom'

function DetalharContato() {
    const navegate = useNavigate()
    const { id } = useParams()
    const [listaContato] = useRecoilState(listaContatoState)
    let contatoASerExibido = {
        id: '',
        nome: '',
        telefone: '',
        endereco: {
            logradouro: '',
            numero: '',
            bairro: '',
            cidade: '',
            uf: '',
            complemento: ''
        }
    }

    listaContato.forEach(contato => {
        if(contato.id === id) {
            contatoASerExibido = contato
            return
        }
    })

    return (
        <div id="detalhar-contato">
            <h1>Detalhar Contato</h1>
            <p><b>Nome:</b> {contatoASerExibido.nome}</p>
            <p><b>Telefone:</b> {contatoASerExibido.telefone}</p>
            <p><b>Logradouro:</b> {contatoASerExibido.endereco.logradouro}</p>
            <p><b>Numero:</b> {contatoASerExibido.endereco.numero}</p>
            <p><b>Bairro:</b> {contatoASerExibido.endereco.bairro}</p>
            <p><b>Cidade:</b> {contatoASerExibido.endereco.cidade}</p>
            <p><b>UF:</b> {contatoASerExibido.endereco.uf}</p>
            <p><b>Complemento:</b> {contatoASerExibido.endereco.complemento}</p>
            <span onClick={() => navegate(-1)}>{'< Voltar'}</span>
        </div>
    )
}

export default DetalharContato