import { useNavigate } from 'react-router-dom';
import IContato from '../../interfaces/IContato'
import './style.css'
import { BsArrowUpRightSquareFill, BsFillTrash3Fill } from "react-icons/bs";
import { useSetRecoilState } from 'recoil';
import { listaContatoState } from '../../states/atom';
import ModalConfirmacao from '../ModalConfirmacao';
import { useState } from 'react';


interface CartaoContatoProps {
    contato: IContato
}

function CartaoContato({ contato } : CartaoContatoProps) {
    const navegate = useNavigate()
    const setListaContato = useSetRecoilState(listaContatoState)
    const [ativarModal, setAtivarModal] = useState(false)

    const excluirContato = (id: string) => {
        setListaContato(listaContatoAntiga => listaContatoAntiga.filter(contato => contato.id !== id))
    }
    
    return (
        <div className='cartao-contato'>
            <div className='dados'>
                <p><b>Nome:</b> {contato.nome}</p>
                <p><b>Telefone:</b> {contato.telefone}</p>
            </div>
            <div className='acoes'>
                <BsArrowUpRightSquareFill title='Detalhar' className='acao' onClick={() => navegate(`/detalhar/${contato.id}`)} />
                <BsFillTrash3Fill title='Excluir' className='acao' onClick={() => setAtivarModal(true)} />
            </div> 
            <ModalConfirmacao descricao='excluir' ativado={ativarModal} setAtivado={setAtivarModal} acao={() => excluirContato(contato.id)}/>           
        </div>
    )
}

export default CartaoContato