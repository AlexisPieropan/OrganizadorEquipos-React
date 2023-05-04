import "./ListaOpciones.css"

const ListaOpciones=(props)=>{


    //FUNCION LOCAL PARA OBTENER EL VALOR DE LA SELECCION
    const manejarSeleccion=(evento)=>{
        props.actualizarValor(evento.target.value)
    }

    //Metodo map para recorrer un array --> array.map( (equipo,index)=>{ 
    //    return <option><option/>  
    //})
    

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select  onChange={manejarSeleccion} value={props.valor}>
            <option value="" disable defaultValue="" hidden >Seleccionar Equipo</option>
            {props.equipos.map((equipo,index)=> <option key={index} value={equipo}> {equipo} </option>)}
        </select>
    </div>
}

export default ListaOpciones