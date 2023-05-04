//Funciones
import { useState } from 'react';
import { v4 as uuid } from 'uuid'

import './App.css';
//Componentes hijos de root
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/MiOrg.js';
import Equipos from './components/Equipos/Equipos.js';
import Footer from './components/Footer/Footer.js';


function App() {

  //HOOK para mostrar o no el form es un switch
const [mostrarFormulario,actualizarForm] = useState(true) //le asigna el estado inicial del form
const[colaboradores,setColaboradores]=useState([{
  id:uuid(),
  equipo:"Front End",
  foto:"https://github.com/alexispieropan.png",
  nombre:"Alexis",
  puesto:"Programador",
  fav:true

},
{
  id:uuid(),
  equipo:"Programacion",
  foto:"https://github.com/a.png",
  nombre:"Juan",
  puesto:"Programador",
  fav:false
},
{
  id:uuid(),
  equipo:"Programacion",
  foto:"https://github.com/al.png",
  nombre:"Roberto",
  puesto:"Programador",
  fav:false
},
{
  id:uuid(),
  equipo:"Movil",
  foto:"https://github.com/ann.png",
  nombre:"Ana",
  puesto:"Programador",
  fav:false
},
]) //se inicia con un array vacio

//hook de equipos donde se setean los colores
//comienzan con los colores que estan dentro del useState
const [equipos,setEquipos]=useState([
  {
    id:uuid(),
    titulo:"Programacion",
    colorPrimario:"#57C278",
    colorSecundario:"#D9F7E9"
  },
  {
    id:uuid(),
    titulo:"Front End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  },
  {
    id:uuid(),
    titulo:"Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  },
  {
    id:uuid(),
    titulo:"Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  },
  {
    id:uuid(),
    titulo:"UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  },
  {
    id:uuid(),
    titulo:"Movil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"
  },
  {
    id:uuid(),
    titulo:"Innovacion y Gestion",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"
  }
])

//Funcion que agrega o quita el formulario "switch"
const cambiarForm = ()=>{
  actualizarForm(!mostrarFormulario);
}

//REGISTRAR COLABORADOR
const resgistrarColab =(colaborador)=>{
    console.log("Nuevo colaborador",colaborador)
    //Spread operator
    setColaboradores([...colaboradores, colaborador]) //se esta haciendo una copia de un array a otro
}


//eliminar colaborador
const eliminarColab = (id)=>{
  console.log("Eliminar colaborador",id)
  const nuevosColab = colaboradores.filter((colaborador) => colaborador.id !== id)
  
  setColaboradores(nuevosColab)
}

//Actualizar color de equipo 
const actualizarColor = (color,id) => {
    console.log("Actualizar: ",color,id)
    const equiposActualizados=equipos.map((equipo)=>{

      if(equipo.id===id){
        equipo.colorPrimario=color
        
      }

      return equipo //retorna el equipo modificado
    });

    setEquipos(equiposActualizados)
}

//Crear equipo
const crearEquipo=(nuevoEquipo)=>{
  console.log(nuevoEquipo)
  setEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
}

//Modificar favoritos o like
const like =(id)=>{
  
  const colaboradoresAct=colaboradores.map((colaborador)=> {
    if(colaborador.id===id){
      colaborador.fav = !colaborador.fav //se modifica negando el boolean 
    }
    return colaborador
  })

  setColaboradores(colaboradoresAct); //devuelve la actualizacion del fav que es boolean
}


//Lista de equipos (ARREGLO DE OBJETOS llave/valor)
//Ternario --> condicion ? seMuestra : noSemuestra
  return (
    <div>
      <Header/>
      { mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} resgistrarColab={resgistrarColab} crearEquipo={crearEquipo}/> : <div></div>}
      <MiOrg cambiarForm={cambiarForm}/>
      
      {
        //Se iteran los equipos y colaborares para enviar los datos correspondientes de los hooks  
        equipos.map( (equipo) => <Equipos datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
        eliminarColab={eliminarColab} 
        actualizarColor={actualizarColor} 
        like={like}/> )
      }

      <Footer/>
    </div>
  );
}

export default App;
