import "./CampoTexto.css"


const CampoTexto = (props)=>{

    //Destructuracion
    const { type ="text" } =props
    

    const placeholderModificado=`${props.placeholder}...` // solo es un ejemplo de como se puede trabajar los props 
    //FUNCION LOCAL DEL COMPONENTE PARA MANEJAR el cambio del input
    const manejarCambio =(evento)=>{
        console.log("manejar cambio",evento)
        props.actualizarValor(evento.target.value)
    }

    
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label> 
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default CampoTexto