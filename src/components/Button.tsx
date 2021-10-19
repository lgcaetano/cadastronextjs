

interface ButtonProps {
    cor?: 'green' |'blue' | 'gray'
    children?: any
    onClickFunction?: (...args: any[]) => void
}

export default function Button(props: ButtonProps){

    const gradients = {
        green: 'from-green-500 to-green-700',
        blue: 'from-blue-500 to-blue-700',
        gray: 'from-gray-500 to-gray-700',
    }

    const cor = props.cor ?? 'gray' 

    return (
        <button className={` bg-gradient-to-r ${gradients[cor]}
         rounded-md py-2 px-4 m-2 mt-0 text-gray-100 font-bold self-end`} onClick={props.onClickFunction}>
            {props.children}
        </button>
    )
}