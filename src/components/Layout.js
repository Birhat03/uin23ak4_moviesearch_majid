import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div id="container">
          <header>
            <Link to="/">
                <h1 className="header">Filmsøk</h1>
            </Link>
            
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
    
          </footer>
        </div>
    )
}