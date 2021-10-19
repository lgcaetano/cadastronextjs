import Title from "./Title"

interface LayoutProps{
    title: string
    children: any
}

export default function Layout (props: LayoutProps){
    return (
        <div className={`flex flex-col sm:w-2/3 w-11/12 bg-white text-gray-800 rounded-md my-10`}>
            <Title>
                {props.title}
            </Title>
            <div className={` p-6 flex flex-col relative`}>
                {props.children}
            </div>
        </div>
    )
} 