import React, { useState, useEffect } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Button from "../components/Button"
import Form from "../components/Form"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import ClienteRepositiorio from "../core/ClienteRepositorio"

export default function useClientes(){

    const repo: ClienteRepositiorio = new ColecaoCliente()

  const [formMode, setFormMode] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [clientes, setClientes] = useState([])
  const [currentClient, setCurrentClient] = useState(Cliente.vazio())
  
  function obterClientes(){
    return repo.obterTodos().then(setClientes)
  }

  useEffect(() => {obterClientes()}, [])

  function selecionarCliente(cliente: Cliente) {
    setEditMode(true)
    setFormMode(true)
    setCurrentClient(cliente)
  }
  
  function excluirCliente(cliente: Cliente) {
    const clientesNovo = [...clientes].filter(clienteArray => {
      return clienteArray.id !== cliente.id
    })
    repo.excluir(cliente)
    setClientes(clientesNovo)
  }

  function editClient(cliente: Cliente){
    
    repo.salvar(cliente)
        .then(obterClientes)
        .then(() => setEditMode(false))
        .then(() => setCurrentClient(Cliente.vazio()))
    
  }


  function createClient(cliente: Cliente){
    const clientesNovo = [...clientes]
    // const ultimoId = clientes[clientes.length - 1].id
    obterClientes()
      .then(() => repo.salvar(cliente))
      .then(newClient => clientesNovo.push(newClient))
      .then(() => setClientes(clientesNovo))    
    
  }

  function saveClient(cliente: Cliente){
    console.log(cliente)
    editMode ? editClient(cliente) : createClient(cliente)
    setFormMode(false)
  }


    return {
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
    }
}