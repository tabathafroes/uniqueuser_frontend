import React from 'react';
import { Link } from 'react-router-dom';
function Header() {

    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <Link to="/" className="btn btn-primary">Registrar  </Link>
            <Link to="/usuarios" className="btn btn-primary">Usuarios</Link>
            <span className="h3">UOL</span>
            <Link to="/dedupe" className="btn btn-primary">Dedupe</Link>
            <Link to="/kmeans" className="btn btn-primary">Kmeans</Link>
            
            </div>
        </nav>
    )
}
export default Header;