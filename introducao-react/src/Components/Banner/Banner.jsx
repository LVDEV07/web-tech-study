const Banner = (props) => {
    console.log(props.children)
    
    // children permite que você passe e renderize conteudo dinâmico dentro de um componente em React

    return (
        <>
            {props.children}
        </>
    )
}

export default Banner