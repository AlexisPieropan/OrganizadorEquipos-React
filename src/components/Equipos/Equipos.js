import "./Equipos.css"
import Colaborador from "../Colaborador/Colaborador.js"
//paquetes
import hexToRgba from 'hex-to-rgba';

const Equipos=(props)=>{
    //Destructuracion de codigo
    //SE LE ASIGNA A ESAS VARIABLES LOS COLORES O PROPIEDADES DEL PROPS
    const { colorPrimario, colorSecundario,titulo,id } = props.datos
    const{colaboradores, eliminarColab,actualizarColor,like} =props

    const obj={
        backgroundColor:hexToRgba(colorPrimario,0.5)
    }

    //colaboradores.length se fija si hay colaborares en ese equipo y renderiza el componente
    return <> 
    { colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(event)=>{ actualizarColor(event.target.value,id) }}
            />
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">

        {
            colaboradores.map( (colaborador,index) =>  <Colaborador datos={colaborador} key={index} 
            colorPrimario={colorPrimario} eliminarColab={eliminarColab} like={like}/> )
        }    

        </div>
    </section>
    }
    </>
}

export default Equipos
