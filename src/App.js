import './App.css';
import {Router} from "react-router-dom"
import { AddCustomer } from './forms/addCustomer';
import {BrowserRouter,Routes,Route} from "react-router"
import {Link} from "react-router-dom"
import {HeaderComponent} from "./header.jsx"
import {FooterComponent} from "./footer.jsx"

function App() {
return (
    <BrowserRouter>
    <HeaderComponent/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/books" element={<Users/>}/>
</Routes>
<FooterComponent/>
</BrowserRouter>
);
}
export default App;
function MyFooter(){
    return <>
    <footer className="footer bg-dark">
            <span className="text-muted">All rights reserved to hamiz</span>
        </footer>
    </>
}
function MyHeader(){
    return <>
     <header className="header bg-dark"> 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><Link to="/" className="navbar-brand">Employee Management App</Link></div>
                <div><Link to="/add-employee/-1" className="navbar">Add an Employee</Link></div>
            </nav>
        </header>
    </>
}
function Home(){
    return <>
    <h1>Home</h1>
    </>
}
function Users(){
    return <>
    <h1>Users</h1>
    </>
}
