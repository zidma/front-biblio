import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axios";

function Abonnes(){
   // const ABONNE_BASE_URL="http//localhost:8080/api//abonnes"
    const style={
        width:"50px",
        height:"50px",
        borderReadius:"50%"
    }
    const navigate =useNavigate();
    const [abonnes,setAbonnes]=useState([])
    useEffect(()=>{

        (async ()=>{
            try{
                await axiosInstance.get("/abonnes").then((res)=>{
                    console.log(res.data)
                    setAbonnes(res.data)
                })
            }catch(err){
                console.log("error",err);
            }
        })();
    },[])
    const addEditAbonne=(id)=>{
        navigate(`add-update/${id}`);
    }
    const addAbonne=()=>{
        navigate(`/add-abonne`)
    }
        const viewAbonne = (id) => {
        navigate(`view-employee/${id}`);
    }
    const deleteAbonne=(id)=>{
        console.log(`${id} deleted`);
    }
    return <>
     <h2 className="text-center">Abonnes</h2>
        <div className="row">
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
            <th></th>
            <th>Numero</th>
             <th>Nom</th>
              <th>Ecole</th>
               <th>telephone   <button className="btn btn-primary" onClick={()=>addAbonne()}>New(+)</button></th>
               </tr>
        </thead>
        <tbody>
            {
                abonnes.map(abonne=>
                    <tr key={abonne.id} onDoubleClick={()=>viewAbonne(abonne.id)}>
                         <td key={abonne.nom} style={style}>
                            <img src={abonne.profil} className="img-fluid" alt={abonne.nom}/>
                         </td>
                        <td key={abonne.nom}>{abonne.nom}</td>
                         <td key={abonne.profession}>{abonne.profession}</td>
                         <td key={abonne.ecole}>{abonne.ecole}</td>
                         <td key={abonne.telephone}>{abonne.telephone}</td>
                         <td>
                            <button id="action-btn" className="btn btn-info" onClick={()=>addEditAbonne(abonne.id)}>update</button>
                            <button id="action-btn" className="btn btn-danger" onClick={()=>deleteAbonne(abonne.id)}>delete</button>
                         </td>
                    </tr>
                )
            }
        </tbody>
      </table>
      </div>
    </>;
}
export default Abonnes;