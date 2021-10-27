import React from "react";
const Instru =(props) => (
        <>
       <div className="card mb-3">
  <h2 className="card-header">{props.id} - {props.nom}</h2>
  
  <div className="text-center" style={{"height": "400px"}}>
  <img src={props.image} alt={props.nom} className="img-fluid h-100"/>
  <audio controls src={props.son} style={{"width":"100px"}}/>
  </div>
  
  <div className="card-body">
    <h3>BPM :<button className="btn btn-success">{props.bpm.libelleBpm}</button></h3>
    
    <p className="card-text">{props.description}</p>
  </div>
 
  <div className="card-body">
    <h4>GENRE :</h4>
     {
      props.genre.map(genre => {
        
        return <button key={genre.idGenre}  className="btn btn-secondary"> {genre.libelleGenre}</button>
      })
    } 
    <div>
    
    </div>
  </div>
  
</div>
</>
);
export default Instru;