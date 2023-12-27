import { atom } from "recoil"
import IContato from "../interfaces/IContato"

export const listaContatoState = atom<IContato[]>({
    key: 'listaContatoState',
    default: [{
        id: '1',
        nome: 'Garibaldo',
        telefone: '(99) 9 9999-9999',
        endereco: {
            logradouro: 'Rua João Pedro II',
            numero: 'Q.10-C.4',
            bairro: 'Nossa Senhora de Fátima',
            cidade: 'Teresina',
            uf: 'PI',
            complemento: ''
        }
    }]
})

export const listaUfBrasilState = atom<String[]>({
    key: 'listaUfBrasilState',
    default: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
      ]
})