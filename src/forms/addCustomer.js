import { useState } from "react"

export function AddCustomer(){
    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [naissance,setNaissance]=useState('');
    const[sexe,setSexe]=useState('')
    const [proffession,setProfession]=useState('');
    const [ecole,setEcole]=useState('');
    const [piece,setPiece]=useState('');
    const [phone,setPhone]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
    }
    return  <div class="container">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                <lable class="form-label">Nom</lable>
                <input type="text" name="nom" class="form-control"/>
                </div>
                 <div class="mb-3">
                 <lable class="form-label">Prenom</lable>
                 <input type="text" name="prenom" class="form-control"/>
                 </div>
                  <div class="mb-3">
                  <lable class="form-label">Naissance</lable>
                  <input type="text" name="naissance" class="form-control"/>
                  </div>
                  <div class="mb-3">
                  <lable class="form-label">proffession</lable>
                  <input type="text" name="profession" class="form-control"/>
                  </div>
                   <div class="mb-3">
                  <lable class="form-label">proffession</lable>
                  <input type="" name="profession" class="form-control"/>
                  </div>
                  <select class="form-select">
                    <option selected> quel est votre sexe</option>
                    <option>Masculin</option>
                    <option>Feminin</option>
                  </select>
                </form>
       
           </div>
}