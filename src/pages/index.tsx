import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Button from "../components/Button"
import Form from '../components/Form';
import ClienteRepositiorio from '../core/ClienteRepositorio';
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useClientes from '../hooks/useClientes';

export default function Home() {


  const {
    formMode,
    cadastroComponent,
    formComponent
  } = useClientes()

  // const repo: ClienteRepositiorio = new ColecaoCliente()

  // const [formMode, setFormMode] = useState(false)
  // const [editMode, setEditMode] = useState(false)
  // const [clientes, setClientes] = useState([])
  // const [currentClient, setCurrentClient] = useState(Cliente.vazio())

  // function obterClientes(){
  //   return repo.obterTodos().then(setClientes)
  // }

  // useEffect(() => {obterClientes()}, [])

  // function selecionarCliente(cliente: Cliente) {
  //   setEditMode(true)
  //   setFormMode(true)
  //   setCurrentClient(cliente)
  // }

  // function excluirCliente(cliente: Cliente) {
  //   const clientesNovo = [...clientes].filter(clienteArray => {
  //     return clienteArray.id !== cliente.id
  //   })
  //   repo.excluir(cliente)
  //   setClientes(clientesNovo)
  // }

  // function editClient(cliente: Cliente){
  //   const clientesNovo = [...clientes]
  //   clientesNovo.forEach((cliente, index) => {
  //     if(cliente.id == currentClient.id){
  //       clientesNovo[index].nome = cliente.nome
  //       clientesNovo[index].idade = cliente.idade
  //     }
  //   })
  //   repo.salvar(cliente)

  //   setEditMode(false)
  //   setCurrentClient(Cliente.vazio())
  // }


  // function createClient(cliente: Cliente){
  //   const clientesNovo = [...clientes]
  //   // const ultimoId = clientes[clientes.length - 1].id
  //   obterClientes()
  //     .then(() => repo.salvar(cliente))
  //     .then(newClient => clientesNovo.push(newClient))
  //     .then(() => setClientes(clientesNovo))

  // }

  // function saveClient(cliente: Cliente){
  //   console.log(cliente)
  //   editMode ? editClient(cliente) : createClient(cliente)
  //   setFormMode(false)
  // }

  // const cadastroComponent = (
  //   <>
  //     <Button cor="green" onClickFunction={() => {setFormMode(true), setCurrentClient(Cliente.vazio())}}>Novo Cliente</Button>
  //     <Tabela clientes={clientes} clienteSelecionado={selecionarCliente}
  //       clienteExcluido={excluirCliente}></Tabela>
  //   </>
  // )

  // const formComponent = (
  //   <Form editMode={editMode} saveFunction={saveClient}
  //     cancelFunction={() => { setFormMode(false), setEditMode(false) }}
  //     client={currentClient}></Form>
  //   )

  return (
    <div className={`
    flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500
     text-white
    `}>
      <Layout title="Cadastro Simples">
        {formMode ? formComponent : cadastroComponent}
      </Layout>
    </div>
  )
}
