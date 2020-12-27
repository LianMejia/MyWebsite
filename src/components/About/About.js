import React from 'react';
import './About.css';
import imgAbout from './../../assets/img-about.jpg';
class About extends React.Component{
    render(){
        return(
            <section className="sectionAbout">
                <div className="photo">
                    <div className="photo-a">
                       <img className="imgAbout" src={imgAbout} alt=""/>
                    </div>
                </div>
                <div className="aboutMe">
                    <div className="Description-a">
                        <h2>About Me</h2>
                        <p>Hi, I'm frontend developer with experience in React.js and Angular, talking of backend 
                        I know PHP, MySQL and Firebase. I'm also mobile developer with experience on Flutter.</p>
                        <p><b>Name :</b> Lian Mejia</p>
                        <p><b>Age :</b> 20</p>
                        <p><b>Home :</b> Ecuador, Guayaquil</p>
                        <p><b>e-mail :</b> lianmejiag@gmail.com</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;