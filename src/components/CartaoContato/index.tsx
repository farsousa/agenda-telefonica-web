import IContato from '../../interfaces/IContato'
import './style.css'

interface CartaoContatoProps {
    contato: IContato
}

function CartaoContato({ contato } : CartaoContatoProps) {
    return (
        <div className='cartao-contato'>
            <p><b>Nome:</b> {contato.nome}</p>
            <p><b>Telefone:</b> {contato.telefone}</p>
        </div>
    )
}

export default CartaoContato