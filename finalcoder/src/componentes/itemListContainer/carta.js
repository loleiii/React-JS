import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import './carta.css'
import {InfoJson,InfoJson2} from'../info/info'



 function Item(props) {
    const[prod,setProd]=useState()
    const [carga,setCarga]=useState(false)

    useEffect(() => {
        setCarga(true)
        const promesa= new Promise((res, rej) => {      
            setTimeout(()=>{return {InfoJson,InfoJson2}},2000)
        });
        promesa.then((result) => {      
            setProd(result);     
            setCarga(false);    
        });
    });  

    return(<div className="producto">
           <img src={props.imagen} />
           <div className="infoAbajo">
               <div className="titulo">
                   {props.titulo}
               </div>
               <div className="autor">
                   {props.autor}
               </div>
               <Link to={`/producto/${props.id}`}><button>Ver mas</button></Link>
           </div>
       </div>)      
}

export default Item