export function HeaderComponent(){
     return(
         <header className="header bg-dark"> 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a href="/books" className="nav-link">Documents</a>
                        </li>
                        <li className="nav-item">
                            <a href="/abonnes" className="nav-link">Lecteurs</a>
                        </li>
                        <li className="nav-item">
                            <a href="/rentals" className="nav-link">locations</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
             </header>
            );
}
     /*   <header className="header bg-dark"> 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><Link to="/" className="navbar-brand">Home</Link></div>
                <div><Link to="/books" className="navbar">Books</Link></div>
                 <div><Link to="/abonnes" className="navbar">Customers</Link></div>
                  <div><Link to="/rentals" className="navbar">rentals</Link></div>
            </nav>
        </header>
        </nav>
    );
}*/