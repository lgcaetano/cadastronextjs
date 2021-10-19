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
    excluirCliente,
    selecionarCliente,
    createClient,
    editClient,
    obterClientes,
    saveClient,
    setFormMode,
    setCurrentClient,
    clientes,
    formMode,
    currentClient,
  } = useClientes()

  
  const cadastroComponent = (
    <>
      <Button cor="green" onClickFunction={() => {setFormMode(true), setCurrentClient(Cliente.vazio())}}>Novo Cliente</Button>
      <Tabela clientes={clientes} clienteSelecionado={selecionarCliente}
        clienteExcluido={excluirCliente}></Tabela>
    </>
  )
  
  const formComponent = (
    <Form saveFunction={saveClient}
      cancelFunction={() => setFormMode(false)}
      client={currentClient}></Form>
    )

  return (
    <div className={`
    flex justify-center items-center min-h-screen
     bg-gradient-to-r from-blue-400 to-purple-600
     text-white
    `}>
      <Layout title="Cadastro Simples">
        {formMode ? formComponent : cadastroComponent}
      </Layout>
    </div>
  )
}
