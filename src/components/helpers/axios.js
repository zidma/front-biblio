import axios from "axios";
const baseURL="http://localhost:8080/api"
const header={
    'content-type':'application/json'
}
const axiosInstance=axios.create(
    {
        baseURL:baseURL,
        headers:header
    }
); 
export default axiosInstance;