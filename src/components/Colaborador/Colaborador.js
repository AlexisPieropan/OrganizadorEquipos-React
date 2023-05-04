import "./Colaborador.css"
//se importa el icono del paquete de iconos instalado
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart } from "react-icons/ai"

const Colaborador=(props)=>{

    //destructuracion de los props
    const {nombre,puesto,foto,equipo,id,fav} =props.datos
    const {colorPrimario , eliminarColab,like} =props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColab(id)} />
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>            
        </div>
        <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                { fav ? <AiFillHeart color="red" onClick={()=>like(id)} className="fav"/> : <AiOutlineHeart onClick={()=>like(id)} className="fav"/>}
                
        </div>
    </div>
}

export default Colaborador