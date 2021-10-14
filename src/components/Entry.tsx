interface EntryProps {
    name: string
    onChangeFunction?: (value: any) => void
    value: any
    type?: "text" | "value"
    readonly: boolean
}

export default function Entry(props: EntryProps) { 

    const inputType = props.type ?? 'text'

    return (
        <>
            <label htmlFor={props.name}>{props.name}:</label>
            <input type={inputType} name={props.name} className={`my-4 rounded-md h-10 border-gray-400
             border-2 px-3 focus:outline-none bg-gray-${props.readonly ? '300 text-gray-500' : '100 focus:bg-white'} `} readOnly={props.readonly}
                value={props.value} onChange={e => props.onChangeFunction?.(e.target.value)} />
        </>
    )
}