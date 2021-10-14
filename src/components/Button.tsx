

interface ButtonProps {
    cor?: 'green' |'blue' | 'gray'
    children?: any
    onClickFunction?: (...args: any[]) => void
}

export default function Button(props: ButtonProps){

    const cor = props.cor ?? 'gray' 

    return (
        <button className={` bg-gradient-to-r from-${cor}-500 to-${cor}-700
         rounded-md py-2 px-4 m-2 mt-0 text-gray-100 font-bold self-end`} onClick={props.onClickFunction}>
            {props.children}
        </button>
    )
}