import './App.css';
import {BrowserRouter,Routes,Route} from "react-router"
import {HeaderComponent} from "./header.jsx"
import {FooterComponent} from "./footer.jsx"
import Abonnes from './components/abonnes/abonnes.jsx';
import CreateUpdateAbonne from './components/abonnes/create.jsx';
import ViewAbonne from './components/abonnes/view.jsx';
import Books from './components/books/books.jsx';
import CreateUpdateBook from './components/books/createUpdate.jsx';
import ViewBook from './components/books/view.jsx';
import Rentals from './components/rentals/rentals.jsx';
import CreateUpdateRental from './components/rentals/createupdate.jsx';
import ViewRental from './components/rentals/view.jsx';

function App() {
    const footerStyle={
        position:"absolute",
        align:"bottom"
    }
return (
    <BrowserRouter>
    <HeaderComponent/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/abonnes" element={<Abonnes/>}/>
<Route path="/add-abonne/" element={<CreateUpdateAbonne/>}/>
<Route path="/edit-abonne/:id" element={<CreateUpdateAbonne/>}/>
<Route path="/view-abonne/:id" element={<ViewAbonne/>}/>
<Route path="/books" element={<Books/>}/>
<Route path="/add-book" element={<CreateUpdateBook/>}/>
<Route path="/edit-book/:id" element={<CreateUpdateBook/>}/>
<Route path="/view-book/:id" element={<ViewBook/>}/>
<Route path="/rentals" element={<Rentals/>}/>
<Route path="/add-rental" element={<CreateUpdateRental/>}/>
<Route path="/add-rental/:i" element={<CreateUpdateRental/>}/>
<Route path="/view-rental/:id" element={<ViewRental/>}/>
</Routes>
<FooterComponent style={footerStyle}/>
</BrowserRouter>
);
}
export default App;
function Home(){
    return <>
    <h1>Home</h1>
    </>
}
