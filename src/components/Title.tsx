
interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {       
    return(
        <div className="uppercase font-bold mb-5 text-center text-3xl">
            <h1>{title}</h1>
        </div>
    )
}

export default Title;
