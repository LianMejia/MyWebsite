import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends React.Component{
    render(){
        return(
            <section>
                <div className="Titulo">
                    <p className="titulo-p">MiWeb</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to ="/Services">Services</Link></li>
                        {/* <li><Link to ="/">Contact</Link></li> */}
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Header;