import { useEffect, useState } from "react";
import AbonneService from "../../services/abonneService";
import { useNavigate } from "react-router-dom";

function Abonnes(){
    const navigate =useNavigate();
    const [abonnes,setAbonnes]=useState([])
    useEffect(()=>{
        AbonneService.getAbonnes().then((res)=>{
            setAbonnes(res.data);
        }).catch(error=>console.log(error))
    })
    const editAbonne=(id)=>{
        navigate(`add-update/${id}`);
    }
        const viewAbonne = (id) => {
        navigate(`view-employee/${id}`);
    }
    const deleteAbonne=(id)=>{
        console.log(`${id} deleted`);
    }
    return <>
     <h2 className="text-center">Employees</h2>
        <div className="row">
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
            <th></th>
            <th>Nom</th>
             <th>Profession</th>
              <th>Ecole</th>
               <th>telephone</th>
               </tr>
        </thead>
        <tbody>
            {
                abonnes.map(abonne=>
                    <tr key={abonne.id} onDoubleClick={()=>viewAbonne(abonne.id)}>
                        <td key={abonne.nom}>{abonne.nom}</td>
                         <td key={abonne.profession}>{abonne.profession}</td>
                         <td key={abonne.ecole}>{abonne.ecole}</td>
                         <td key={abonne.telephone}>{abonne.telephone}</td>
                         <td>
                            <button id="action-btn" className="btn btn-info" onClick={()=>editAbonne(abonne.id)}>update</button>
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