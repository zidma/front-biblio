import { useState } from "react";
function CreateUpdateBook(){
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
     const [type,setType]=useState('')
      const [code,setCode]=useState('')
         const [images,setImages]=useState(null)
         const style={
            marginLeft:"15px",
              marginRight:"15px",
         }
         const handleSubmit=(e)=>{
            e.preventDefault()
            const newDoc={'title':title,
               'author':author,
               'type':type,
               'code':code,
               'images':images
            }
            console.log(newDoc)
            const fd=new FormData()
            fd.append('title',title)
               fd.append('author',author)
                  fd.append('type',type)
                     fd.append('code',code)
                        fd.append('images',images)
            console.log(fd)
         }
         const handleTitleChange=(e)=>{
            setTitle(e.target.value)
         }
          const handleAuthorChange=(e)=>{
            setAuthor(e.target.value)
         }
          const handleTypeChange=(e)=>{
            setType(e.target.value)
         }
          const handleCodeChange=(e)=>{
            setCode(e.target.value)
         }
          const handleImagesChange=(e)=>{
            if(e.target.images)
            setImages(e.target.files)
         }
         
    return <>
    <h3 className="text-center">Nouveau Document</h3>
            <form onSubmit={handleSubmit} className="row g-4" style={style}>
                 <div className="col-md-12" >
                            <label className="form-label">Code</label>
                            <input type="text" name="code" className="form-control"
                            onChange={handleCodeChange}
                            />
                        </div>
                    <div className="col-md-12" >
                            <label className="form-label">Titre</label>
                            <input type="text" name="title" className="form-control"
                            onChange={handleTitleChange}
                            />
                        </div>
                         <div className="col-md-6" >
                            <label className="form-label">Auteur</label>
                            <input type="text" name="auteur" className="form-control"
                             onChange={handleAuthorChange}
                            />
                        </div>
                         <div className="col-md-6" >
                            <label className="form-label">Type document</label>
                           <select class="form-select" onSelect={handleTypeChange}>
                                    <option selected>Type du document</option>
                                    <option>Roman</option>
                                    <option>Encyclopedie</option>
                                     <option>Manuel scolaire</option>
                                    <option>Autres</option>
                             </select>
                        </div>
                        <div className="col-md-12" >
                            <label className="form-label">Images</label>
                            <input type="file" name="images" className="form-control" multiple
                            onChange={handleImagesChange}
                             />
                        </div>
                        <div className="col-md-12">
            <button type="submit" className="btn btn-primary col-md-12" onClick={handleSubmit}>Enregistrer</button>
        </div>
            </form>
           </>
}
export default CreateUpdateBook;