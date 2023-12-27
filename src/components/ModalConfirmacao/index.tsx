import './style.css'

interface IModalConfirmacaoProps {
    descricao: string
    ativado: boolean
    setAtivado: any
    acao: any
}

function ModalConfirmacao({descricao, ativado, setAtivado, acao}: IModalConfirmacaoProps) {
    return (
        ativado ? <div className='modal-confirmacao'>
        <div>
            <p>Tem certeza que deseja {descricao}? </p>
            <button onClick={() => setAtivado(false)}>Não</button>
            <button onClick={acao}>Sim</button>
        </div>
    </div> : <></>
    )
}

export default ModalConfirmacao