import { useState } from "react"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/cliente"
import Button from "../components/Button"
import Form from '../components/Form';

export default function Home() {

  const [clientes, setClientes] = useState([
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 44, '2'),
    new Cliente('Carlos', 49, '3'),
    new Cliente('Marcos', 56, '4'),
  ])

  const [formMode, setFormMode] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentClient, setCurrentClient] = useState(Cliente.vazio())


  function clienteSelecionado(cliente: Cliente) {
    setEditMode(true)
    setFormMode(true)
    setCurrentClient(cliente)
  }
  
  function clienteExcluido(cliente: Cliente) {
    const clientesNovo = [...clientes].filter(clienteArray => {
      return clienteArray.id !== cliente.id
    })
    setClientes(clientesNovo)
  }

  function editClient(nome: string, idade: number){
    const clientesNovo = [...clientes]
    clientesNovo.forEach((cliente, index) => {
      if(cliente.id == currentClient.id){
        clientesNovo[index].nome = nome
        clientesNovo[index].idade = idade
      }
    })
    setEditMode(false)
    setCurrentClient(Cliente.vazio())
  }


  function createClient(nome: string, idade: number){
    const clientesNovo = [...clientes]
    const ultimoId = clientes[clientes.length - 1].id
    clientesNovo.push(new Cliente(nome, idade, `${parseInt(ultimoId) + 1}`))
    setClientes(clientesNovo)
    
  }

  function saveClient(nome: string, idade: number){
    editMode ? editClient(nome, idade) : createClient(nome, idade)
    setFormMode(false)
  }

  const cadastroComponent = (
    <>
      <Button cor="green" onClickFunction={() => {setFormMode(true), setCurrentClient(Cliente.vazio())}}>Novo Cliente</Button>
      <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}></Tabela>
    </>
  )
  
  const formComponent = (
    <Form editMode={editMode} saveFunction={saveClient}
      cancelFunction={() => { setFormMode(false), setEditMode(false) }}
      client={currentClient}></Form>
    )

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
