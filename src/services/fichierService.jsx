 import axios from "axios";
 const FILE_BASE_URL="http//localhost:8080/fichiers"
class FichierService{
 getFileById(id){
    return axios.get(`${FILE_BASE_URL}/${id}`);
 }
 addFile(file){
    return axios.post(FILE_BASE_URL,file)
 }
  addMultipleFile(file){
    return axios.post(FILE_BASE_URL,file)
 }
     updateFile(fileId,file) {
        return axios.put(FILE_BASE_URL+'/'+fileId,file);
    }
       DeleteFile(fileId) {
        return axios.delete(FILE_BASE_URL+'/'+fileId);
    }
}
export default FichierService;