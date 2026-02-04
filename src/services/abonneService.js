 import axios from "axios";
 const ABONNE_BASE_URL="http//localhost:8080/abonnes"
class AbonneService{
getAbonnes(){
    return  axios.get(ABONNE_BASE_URL);
 }
 getAbonneById(id){
    return axios.get(`${ABONNE_BASE_URL}/${id}`);
 }
 addAbonne(abonne){
    return axios.post(ABONNE_BASE_URL,abonne)
 }
     updateAbonne(abonneId,abonne) {
        return axios.put(ABONNE_BASE_URL+'/'+abonneId,abonne);
    }
       DeleteAbonne(abonneId) {
        return axios.delete(ABONNE_BASE_URL+'/'+abonneId);
    }
}
export default AbonneService;