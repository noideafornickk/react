import './style.css';
import { Link } from 'react-router-dom';
function Header(){
    return (
        <header>
            <h2>HEADER</h2>
            <link className="logo" to="/">Onfilmes</link>;
           <link className="favoritos" to="/lista">Minha Lista</link>;
        </header>
        

    );
}
export default Header;