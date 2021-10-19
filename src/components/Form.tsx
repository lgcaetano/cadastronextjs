import { useRef, useState } from 'react';
import Button from './Button';
import Entry from './Entry';
import Cliente from '../core/Cliente';

interface FormProps{
    saveFunction?: (cliente: Cliente) => void,
    cancelFunction?: () => void
    client?: Cliente
}


export default function Form(props: FormProps){

    const [nome, setNome] = useState(props.client.nome)
    const [idade, setIdade] = useState(props.client.idade)
    const [id, setId] = useState(props.client.id)

    

    return (
        <div className=" bg-purple-200 rounded-md w-full flex flex-col p-10 justify-around">


            {id ? <Entry value={id} name="Código" onChangeFunction={setId} readonly={true}></Entry> : false}

            <Entry value={nome} name="Nome" onChangeFunction={setNome} readonly={false}></Entry>
            <Entry value={idade} name="Idade" onChangeFunction={setIdade} readonly={false}></Entry>

            <div className='flex self-end w-1/3 justify-around'>
                <Button onClickFunction={() => props.saveFunction(new Cliente(nome, idade, id ?? null))}
                 cor="blue">{id ? "Alterar" : "Salvar"}</Button>
                <Button onClickFunction={props.cancelFunction} cor="gray">Cancelar</Button>
            </div>
        </div>
    )
}