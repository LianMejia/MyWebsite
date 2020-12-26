import React from 'react';
import './Home.css';
import imgHome from './../../assets/img-Home.jpg';
class Home extends React.Component{
    render(){
        return(
            <section className="contenedor">
                <div className="Description">
                    <div className="descriptionContent">
                       <h1 className="description-h1">I Am Programmer</h1>
                       <p className="description-p">{/* En el desarrollo 
                       web con 2 años de experiencia autodidacta */}
                       Programador autodidacta con 2 años de experiencia 
                       en desarrollo web y mobil.</p>
                       <button className="description-b">About</button>
                    </div>
                </div>
                <div className="Photo">
                    <img src={imgHome} alt=""/>
                </div>
            </section>
        );
    }
}

export default Home;