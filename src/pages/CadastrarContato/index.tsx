import { useState } from 'react'
import './style.css'
import IContato from '../../interfaces/IContato'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { listaContatoState, listaUfBrasilState } from '../../states/atom'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
import { v4 as uuidv4 } from 'uuid';

function CadastrarContato() {
    const estadoInicialContato = {
        id: uuidv4(),
        nome: '',
        telefone: '',
        endereco: {
            logradouro: '',
            numero: '',
            bairro: '',
            cidade: '',
            uf: 'AL',
            complemento: ''
        }
    }
    const [listaUfBrasil] = useRecoilState(listaUfBrasilState)
    const navegate = useNavigate()
    const [contato, setContato] = useState<IContato>(estadoInicialContato)
    const setListaContato = useSetRecoilState(listaContatoState)

    const salvarContato = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        setListaContato(listaContatoAntiga => [...listaContatoAntiga, contato])
        limparFormulario()
        navegate('/')
    }

    const limparFormulario = () => {
        setContato(estadoInicialContato)
    } 

    return (
        <div id="cadastrar-contato">
            <h1>Cadastrar contato</h1>
            <form onSubmit={evento => salvarContato(evento)}>
                <div id='input-nome'>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        name="nome"
                        onChange={evento => setContato({...contato, nome: evento.target.value})}
                        value={contato.nome}
                        required
                    />
                </div>
                <div id='input-telefone'>
                    <label htmlFor="telefone">Telefone:</label>
                    <InputMask
                        id="telefone"
                        name='telefone'
                        mask="(99) 9 9999-9999"
                        maskChar="_"
                        placeholder="(##) # ####-####"
                        min={16}
                        value={contato.telefone}
                        onChange={evento => setContato({...contato, telefone: evento.target.value})}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input 
                        type="text" 
                        name="logradouro"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, logradouro: evento.target.value}})}
                        value={contato.endereco.logradouro}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="numero">Numero:</label>
                    <input 
                        type="text" 
                        name="numero"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, numero: evento.target.value}})}
                        value={contato.endereco.numero}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bairro">Bairro:</label>
                    <input 
                        type="text" 
                        name="bairro"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, bairro: evento.target.value}})}
                        value={contato.endereco.bairro}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cidade">Cidade:</label>
                    <input 
                        type="text" 
                        name="cidade"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, cidade: evento.target.value}})}
                        value={contato.endereco.cidade}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="uf">UF:</label>
                    <select 
                        name="uf" 
                        id="uf" 
                        value={contato.endereco.uf} 
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, uf: evento.target.value}})}
                        required
                    >
                        {listaUfBrasil.map((uf, index) => <option key={index} value={uf as string}>{uf}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="complemento">Complemento:</label>
                    <input 
                        type="text" 
                        name="complemento"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, complemento: evento.target.value}})}
                        value={contato.endereco.complemento}
                    />
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Salvar"
                    />
                </div>
            </form>

        </div>
    )
}

export default CadastrarContato