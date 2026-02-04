 import axios  from "axios";
  const RENTAL_BASE_URL="http//localhost:8080/rentals"
class RentalService{
    getRentals(){
    return  axios.get(RENTAL_BASE_URL);
 }
 getRentalById(id){
    return axios.get(`${RENTAL_BASE_URL}/${id}`);
 }
 addRental(rental){
    return axios.post(RENTAL_BASE_URL,rental)
 }
     updateRental(rentalId,rental) {
        return axios.put(RENTAL_BASE_URL+'/'+rentalId,rental);
    }
       DeleteRental(rentalId) {
        return axios.delete(RENTAL_BASE_URL+'/'+rentalId);
    }
}
export default RentalService;