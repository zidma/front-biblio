 import { useState } from "react";
 import { useEffect } from "react";
import axiosInstance from "../helpers/axios";
import './modal.css'
import Button from 'react-bootstrap/Button';
function Rentals(){
    const [modal,setModal]=useState(false)
    const [abonnes,setAbonnes]=useState([])
     const [documents,setDocuments]=useState([])
     const [showModal,setShowModal]=useState(false)
     const [rentals,setRentals]=useState([])
     const [newRentals,setNewRentals]=useState([])
const  toggleModal=()=>{
    setModal(!modal)
    }
     const viewRental=()=>{
     }
     const editRental=()=>{
     }
     const style={}
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
      useEffect(()=>{
             (async ()=>{
            try{
                await axiosInstance.get("/rentals").then((res)=>{
                    console.log(res.data)
                    setRentals(res.data)
                })
            }catch(err){
                console.log("error",err);
            }
        })();
     },[])
    return <>
    <Modal handle={toggleModal}/>
    {newRentals.length>0 && 
    <table className="table">
        <thead>
            <tr>
                <th>code</th>
                <th>title</th>
                <th>author</th>
            </tr>
        </thead>
        <tbody>
            {
                newRentals.map(rental=>
                    <tr key={rental.code}>
                         <td key={rental.code}>{rental.code}</td>
                        <td key={rental.title}>{rental.title}</td>
                         <td key={rental.author}>{rental.author}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    }
    <table className="table">
        <thead>
            <tr>
            <th>Date</th>
             <th>Document</th>
              <th>Abonne</th>
               <th>contacts</th>
                <th>Retour</th>
                 <th><button className="btn btn-primary" onClick={toggleModal}>new(+)</button></th>
               </tr>
        </thead>
        <tbody>
             {
                rentals.map(rental=>
                    <tr key={rental.id} onDoubleClick={()=>viewRental(rental.id)}>
                         <td key={rental.date} style={style}>
                           {rental.date}
                         </td>
                         <td key={rental.title}>{rental.title} <br/> {rental.author}</td>
                        <td key={rental.nom}>{rental.prenom}<br/>{rental.nom} </td>
                         <td key={rental.phone}>{rental.phone}</td>
                         <td key={rental.retour}>
                            <input type="checkbox" checked={rental.retour} />
                         </td>
                         <td>
                            <button id="action-btn" className="btn btn-info" onClick={()=>editRental(rental.id)}>update</button>
                         </td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </>
}
export default Rentals;
function Modal({handle}){
    return <>
<div className="modal">
<div onClick={handle} className="overlay"></div>
<div className="modal-content">
<h2>Hello Modal</h2>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
perferendis suscipit officia recusandae, eveniet quaerat assumenda
id fugit, dignissimos maxime non natus placeat illo iusto!
Sapiente dolorum id maiores dolores? Illum pariatur possimus
quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
placeat tempora vitae enim incidunt porro fuga ea.
</p>
<button className="close-modal" onClick={handle}>
CLOSE
</button>
</div>
</div>
    </>
}
