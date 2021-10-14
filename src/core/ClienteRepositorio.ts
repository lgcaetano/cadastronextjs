import Cliente from './Cliente';

export default interface ClienteRepositiorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
    
}