import { atom } from "recoil"
import IContato from "../interfaces/IContato"

export const contatoState = atom<IContato>({
    key: 'contatoState',
    default: {
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
})

export const listaContatoState = atom<IContato[]>({
    key: 'listaContatoState',
    default: [{
        id: '1',
        nome: 'João',
        telefone: '11111',
        endereco: {
            logradouro: 'Rua 1',
            numero: 'Numero 1',
            bairro: 'Bairro 1',
            cidade: 'Cidade 1',
            uf: 'PI',
            complemento: 'Perto da loja 1'
        }
    },{
        id: '2',
        nome: 'Maria',
        telefone: '22222',
        endereco: {
            logradouro: 'Rua 2',
            numero: 'Numero 2',
            bairro: 'Bairro 2',
            cidade: 'Cidade 2',
            uf: 'CE',
            complemento: 'Perto da loja 2'
        }
    },{
        id: '3',
        nome: 'Patricia',
        telefone: '33333',
        endereco: {
            logradouro: 'Rua 3',
            numero: 'Numero 3',
            bairro: 'Bairro 3',
            cidade: 'Cidade 3',
            uf: 'MA',
            complemento: 'Perto da loja 3'
        }
    }]
})