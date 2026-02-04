import {Link} from "react-router-dom"
export function HeaderComponent(){
     return(
        <>
        <header className="header bg-dark"> 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><Link to="/" className="navbar-brand">Home</Link></div>
                <div><Link to="/books" className="navbar">Books</Link></div>
            </nav>
        </header>
        </>
    );
}