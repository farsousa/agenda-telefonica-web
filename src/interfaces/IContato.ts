import IEndereco from "./IEndereco"

export default interface IContato {
    id: string
    nome: string
    telefone: string
    endereco: IEndereco
}