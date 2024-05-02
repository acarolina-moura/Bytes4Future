import { Link } from "react-router-dom";
import Estatistica from "./pages/Estatisticas"

function Sidebar() {
    return ( 
        <Router>
            <ul>
                <li>
                    <Link to="#">Home</Link>
                </li>
                <li>
                    <Link to="#">Search</Link>
                </li>
                <li>
                    <Link to="#">Your Library</Link>
                </li>
                <li>
                    <Link to="#">Create Playlist</Link>
                </li>
                <li>
                    <Link to="#">Liked Songs</Link>
                </li>
                <hr />
                <li>
                    <Link to="#">Jazz</Link>
                </li>
                <li>
                    <Link to="#">Hangover Cure</Link>
                </li>
                <li>
                    <Link to="#">Your Top Songs 2022</Link>
                </li>
                <li>
                    <Link to="#">Indie</Link>
                </li>
                <li>
                    <Link to="#">Rock</Link>
                </li>
                <li>
                    <Link to="#">RADAR</Link>
                </li>
                <li>
                    <Link to="#">TOP 100</Link>
                </li>
                <li>
                    <Link to="/Estatisticas">Estatísticas</Link>
                </li>
            </ul>
           
        </Router>
    )
}

export default Sidebar;