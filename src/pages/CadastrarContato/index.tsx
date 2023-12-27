import { useState } from 'react'
import './style.css'
import IContato from '../../interfaces/IContato'
import { useSetRecoilState } from 'recoil'
import { listaContatoState } from '../../states/atom'

function CadastrarContato() {
    const estadoInicialContato = {
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
    const [contato, setContato] = useState<IContato>(estadoInicialContato)
    const setListaContato = useSetRecoilState(listaContatoState)

    const salvarContato = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        setListaContato(listaContatoAntiga => [...listaContatoAntiga, contato])
        limparFormulario()
    }

    const limparFormulario = () => {
        setContato(estadoInicialContato)
    } 

    return (
        <div id="cadastrar-contato">
            <h1>Cadastrar contato</h1>
            <form onSubmit={evento => salvarContato(evento)}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome"
                        onChange={evento => setContato({...contato, nome: evento.target.value})}
                        value={contato.nome}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telefone">Telefone</label>
                    <input 
                        type="text" 
                        name="telefone"
                        onChange={evento => setContato({...contato, telefone: evento.target.value})}
                        value={contato.telefone}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="logradouro">logradouro</label>
                    <input 
                        type="text" 
                        name="logradouro"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, logradouro: evento.target.value}})}
                        value={contato.endereco.logradouro}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="numero">Numero</label>
                    <input 
                        type="text" 
                        name="numero"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, numero: evento.target.value}})}
                        value={contato.endereco.numero}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bairro">Bairro</label>
                    <input 
                        type="text" 
                        name="bairro"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, bairro: evento.target.value}})}
                        value={contato.endereco.bairro}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cidade">Cidade</label>
                    <input 
                        type="text" 
                        name="cidade"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, cidade: evento.target.value}})}
                        value={contato.endereco.cidade}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="uf">UF</label>
                    <input 
                        type="text" 
                        name="uf"
                        onChange={evento => setContato({...contato, endereco: {...contato.endereco, uf: evento.target.value}})}
                        value={contato.endereco.uf}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="complemento">Complemento</label>
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