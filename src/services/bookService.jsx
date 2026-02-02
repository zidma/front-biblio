import axios from "axios"
    const BOOK_BASE_URL="http//localhost:8080/books"
class BookService{
 getBooks(){
    return  axios.get(`${BOOK_BASE_URL}`);
 }
 getBookById(id){
    return axios.get(`${BOOK_BASE_URL}/${id}`);
 }
 addBook(book){
    return axios.post(BOOK_BASE_URL,book)
 }
     updateBook(bookId,book) {
        return axios.put(BOOK_BASE_URL+'/'+bookId,book);
    }
       DeleteBook(bookId) {
        return axios.delete(BOOK_BASE_URL+'/'+bookId);
    }
}
export default BookService;