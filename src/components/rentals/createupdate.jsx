import { useEffect, useState } from "react";
import AutoComplete from "../reusables/autoComplete";
import axiosInstance from "../helpers/axios";
function CreateUpdateRental(){
    const [abonne,setAbonne]=useState('');
     const [document,setDocument]=useState('')
     const [documents,setDocuments]=useState([])
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
    <form className="row g-3" onSubmit={handleSubmit} style={{marginLeft:"15px",
        marginRight:"15px",
        marginTop:"10px"
    }}>
        <div className="col-md-12">
              <AutoComplete suggestions={abonnes} handleChoose={setAbonne} placeholder="saisir un nom d'abonne" className="form-control"/>
        </div>
        <div className="col-md-12">
        <AutoComplete suggestions={documents} handleChoose={setDocument} placeholder="un titre de document" className="form-control" />
        </div>
        <div className="col-md-6">
            <button type="submit" className="btn  btn-primary">Valider</button>
        </div>

    </form>
    </>
}
export default CreateUpdateRental;