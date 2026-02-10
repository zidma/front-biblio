import { useEffect, useState } from "react";
import AutoComplete from "../reusables/autoComplete";
import axiosInstance from "../helpers/axios";
import AbonneComplete from "../reusables/abonneComplete";
import DocumentComplete from "../reusables/documentComplete";
function CreateUpdateRental(){
    const [abonne,setAbonne]=useState(null);
     const [document,setDocument]=useState(null)
     const [documents,setDocuments]=useState([])
     const [abonnes,setAbonnes]=useState([])
     const [rented,setRented]=useState([])
     const handleAdd=()=>{
        setRented(
            [
                ...rented,
            {
                abonne:abonne,
                document:document
            }
            ]
        )
     }
     const formStyle={
        marginLeft:"15px",
        marginRight:"15px"
     }
   

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
        })
        (async ()=>{
            try{
                await axiosInstance.get("/documents").then((res)=>{
                    console.log(res.data)
                    setDocuments(res.data)
                })
            }catch(err){
                console.log("error",err);
            }
        })
        
     })
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
        
     },[abonnes])
          useEffect(()=>{
           (async ()=>{
            try{
                await axiosInstance.get("/books").then((res)=>{
                    console.log(res.data)
                    setDocuments(res.data)
                })
            }catch(err){
                console.log("error",err);
            }
        })();
     },[documents])
const handleSubmit=(e)=>{
    e.preventDeault()
    console.log(e.target.value)
}
    return <>
    <h3 className="text-center">Un nouvel emprunt</h3>
    <div className="container">
        <div className="row row-cols-1">
            <div className="col">
<form style={formStyle}>
    {
        abonne && <div className="col-md-6">
            <label className="form-label">Abonnes</label>
            <AbonneComplete suggestions={abonnes} className="form-control" placeholder="saisir  un nom d' abonne"/>
        </div>
    }
     <div className="col-md-6">
             <label className="form-label">Documents</label>
            <DocumentComplete suggestions={documents} className="form-control" placeholder="saisir un nom  de document"/>
        </div>
        <div className="col-md-6">
            <button type="submit" className="btn btn-primary" >Enregistrer</button>
        </div>
    </form>
    {
        !abonne && 
        <div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Ahmed diallo</h5>
            </div>
        <p className="card-text">Informaticien</p>
        { rented.length>0 && rented.map(rented=> <ul key={rented.code} className="lis-group list-group-flush">
            <li className="list-group-item"> {rented.code} {rented.title} {rented.author}</li>
        </ul>
       )
        }
        <div className="card-body">
            {
                rented.length>0 && <button className="btn btn-primary">Terminer</button>
            }
        </div>
        </div>
    }
        
        
            </div>
        </div>
    </div>

    </>
}
export default CreateUpdateRental;
