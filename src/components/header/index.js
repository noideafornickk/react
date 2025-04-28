import './style.css';
import { Link } from 'react-router-dom';
function Header(){
    return (
        <header>
            <h2>HEADER</h2>
            <Link className="logo" to="/">Onfilmes</Link>;
           <Link className="favoritos" to="/lista">Minha Lista</Link>;
        </header>
        

    );
}
export default Header;
