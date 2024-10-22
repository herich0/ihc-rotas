import { Link, Route } from "react-router-dom";

function Header(){
    return (
        <Header>
            <h2>Herich</h2>
            <div>
                <Link to ='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
            </div>
        </Header>
    );
}

export default Header;