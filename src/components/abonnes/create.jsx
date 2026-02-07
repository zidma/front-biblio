import { useParams } from "react-router-dom";
import {FaEdit} from "react-icons/fa"
import React, { useEffect, useState } from "react";
import AutoComplete from "../reusables/autoComplete";

function CreateUpdateAbonne(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [school,setSchool]=useState('')
    const [phone,setPhone]=useState('')
    const [idCard,setIdCard]=useState(null)
    const [picture,setPicture]=useState(null)
    const handlePictureChange=(e)=>{
        if(e.target.files){
           setPicture(e.target.files[0])
        }
    }
     const handleIdCardChange=(e)=>{
        if(e.target.files){
           setIdCard(e.target.files[0])
        }
    }
    useEffect(()=>{
        console.log(school)
    },[school])
const style={
    marginBottom:"100px",
    marginLeft:"15px",
     marginRight:"15px"
}
const {id}=useParams();
const ecoles=['Manquepa','Emmaus','Aime cesair','lycee 28']
useEffect(()=>{

})
const handleSubmit=(e)=>{
    e.preventDefault()
    const  fd=new FormData()
    fd.append('firstName',firstName)
     fd.append('lastName',lastName)
      fd.append('school',school)
      fd.append('phone',phone)
      fd.append('picture',picture)
      fd.append('idCard',idCard)
    console.log(fd)
}
    return <>
      <h3 className="text-center">Nouvel Abonne</h3>
    <form className="row g-4 " style={style} onSubmit={handleSubmit}>
         <div className="col-md-10" >
            <label className="form-label">Photo</label>
            <input type="file" name="picture" className="form-control"
            onChange={handlePictureChange}
            />
         {id &&  <FaEdit />}
        </div>
        <div className="col-md-4">
            <label className="form-label">Nom</label>
            <input type="text" name="firstName" className="form-control" />
          {id &&  <FaEdit />}
        </div>
         <div className="col-md-8">
            <label className="form-label">Prenom</label>
            <input type="text" name="lastName" className="form-control" />
            {id &&  <FaEdit />}
        </div>
       <div className="col-md-6">
          <label className="form-label">Ecole</label>
          <AutoComplete suggestions={ecoles} handleChoose={setSchool} placeholder={"saisir un nom d'ecole"}/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Telephone</label>
            <input type="text" name="phone" className="form-control"/>
            {id &&  <FaEdit />}
        </div>
        <div className="col-md-12">
            <label className="form-label">piece d'identite</label>
            <input type="file" name="idCard" className="form-control"
            onChange={handleIdCardChange}
            />
            {id &&  <FaEdit />}
        </div>
        <div className="col-md-12">
            <button type="submit" className="btn btn-primary col-md-12" onClick={handleSubmit}>Enregistrer</button>
    </div>
    </form>
    </>
}
export default CreateUpdateAbonne;
/*export default CreateUpdateAbonne;
function AutoComplete({suggestions,handleSchool}){
    const [filteredSuggestions,setFilteredSuggestions]=useState([])
    const [inputValue,setInputValue]=useState('')
    const handleChange=(event)=>{
        const inputValue=event.target.value;
        setInputValue(inputValue)
         const filteredSuggestions=
    suggestions.filter(suggestion=>suggestion.toLowerCase().includes(inputValue.toLowerCase()));
 setFilteredSuggestions(filteredSuggestions)
    };
    const handleSelect=(value)=>{
        handleSchool(value)
        setInputValue(value)
        setFilteredSuggestions([])
    }
   
    return <div className="autocomplete-container">
        <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Saisir un nom d'ecole"/>
        <ul className="autocomplete-suggestions">
            {
                filteredSuggestions.map((suggestion,index)=>(
                    <li key={index} className="autocomplete-suggestion" 
                    onClick={()=>handleSelect(suggestion)}>
                        {suggestion}
                    </li>
                ))
            }
        </ul>
    </div>
}*/