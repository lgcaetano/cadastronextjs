import Cliente from '../core/Cliente'
import { IconeEdicao } from './Icons'
import { IconeLixo } from './Icons'

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void 
    clienteExcluido?: (cliente: Cliente) => void 
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className=' px-4 py-3'>Código</th>
                <th className=' px-4 py-3'>Nome</th>
                <th className=' px-4 py-3'>Idade</th>
                {exibirAcoes ? <th className=' px-4 py-3 text-center'>Ações</th> : false}
            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className=' px-4 py-2 text-center'>
                {props.clienteSelecionado ? (
                <button className=' mr-4 text-green-600 rounded-full p-2 hover:bg-purple-50'
                onClick={() => props.clienteSelecionado?.(cliente)}>
                    {IconeEdicao}
                </button>
                ) : false}

                {props.clienteExcluido ? (
                <button className='ml-4 text-red-600 rounded-full p-2 hover:bg-purple-50'
                onClick={() => props.clienteExcluido?.(cliente)}>
                    {IconeLixo}
                </button>
                ) : false}
            </td>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, index) => {
            return (
                <tr key={cliente.id} className={`${index % 2 ? 'bg-purple-100' : 'bg-purple-200'}`}>
                    <td className=' px-4 py-3'>{cliente.id}</td>
                    <td className=' px-4 py-3'>{cliente.nome}</td>
                    <td className=' px-4 py-3'>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }


    return (
        <table className={`rounded-xl bg-gradient-to-r from-purple-500 
            to-purple-800 overflow-hidden w-full`}>

            <thead className='bg-purple-500 text-gray-100 text-left'>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}