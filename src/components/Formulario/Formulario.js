import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../ListaOpciones/ListaOpciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = (props) =>{

    //hooks
    const [nombre,setNombre]=useState("")
    const [puesto,setPuesto]=useState("")
    const [foto,setFoto]=useState("")
    const [equipo,setEquipo]=useState("")

    //hooks del form de crear nuevo equipo
    const[titulo,setTitulo]=useState("")
    const[color,setColor]=useState("")

    //DESTRUCTURACION
    const {resgistrarColab,crearEquipo} = props

    //FUNCION PARA PREVENIR LA RECARGA DE LA PAG
    //DENTRO DE las etiquetas se puden hacer alucion a las acciones que poseen como el 
    //onSubmit del form el cual le pasamos esta funcion para indicar que tiene que ejecutarla al hacer submit
    const manejarEnvio=(evento)=>{
    evento.preventDefault(); //previene el evento de recagar el envio de pag.

    //se recopila la info en un objeto para luego poder ser mandado al back
    //esto es el concepto de mantener los datos en el componente padre 
    const datosAenviar={
        nombre:nombre,
        puesto:puesto,
        foto:foto,
        equipo:equipo
    }
    resgistrarColab(datosAenviar); //solo para ver el objeto que se envia
}

const manejarNuevoEquipos=(evento)=>{
    evento.preventDefault()
    crearEquipo({titulo,colorPrimario:color})//se le pasa un obj con los valores que necesita por lo tanto es un solo parametro
}

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingrese nombre" required valor={nombre} actualizarValor={setNombre}/>  
        <CampoTexto titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} actualizarValor={setPuesto}/>
        <CampoTexto titulo="Foto"   placeholder="Ingrese enlace de foto" required valor={foto} actualizarValor={setFoto}/>
        <ListaOpciones valor={equipo} actualizarValor={setEquipo} equipos={props.equipos}/>
        <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipos}>
            <h2>Rellena el Formulario para crear el Equipo.</h2>
        <CampoTexto titulo="Titulo" placeholder="Ingrese Titulo" required valor={titulo} actualizarValor={setTitulo}/>  
        <CampoTexto titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} actualizarValor={setColor} type="color"/>
        <Boton>Registrar Equipo</Boton>
        </form>
    </section>
    
}

export default Formulario