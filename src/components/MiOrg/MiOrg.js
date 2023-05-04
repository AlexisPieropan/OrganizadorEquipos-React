import{useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
    //Estado - hooks
    //useState
    //useState()
    
    //const [nombre,actualizarNombre] = useState("estadoIni")
   /* const [mostrar,actualiazarMostrar]=useState(true);
    const manejarClick=()=>{
        console.log("Mostrar/ocultar element",mostrar);
        actualiazarMostrar(props.cambiarForm);
    }
*/
    return <section className="orgSection">
        <h3 className="titulo">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarForm}/>
    </section>
}

export default MiOrg