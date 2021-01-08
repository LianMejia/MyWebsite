import React from 'react';
import './Services.css';
import imgwebDesign from './../../assets/web-design.png';
import imgFrontendDeveloper from './../../assets/frontend.png';
import imgMobileDeveloper from './../../assets/MDeveloper.png';

class Services extends React.Component{
    render(){
        return(
            <section className="sectionServices">
                <div className="divSection">
                <div className="div1">
                    <h2 className="titleServices">My Services</h2>
                </div>
                <div className="div2">
                    <div className="div2Content">
                        <img className="imgWD" src={imgwebDesign} alt=""/>
                        <h3 className="div2Title">Web Design</h3>
                        {/* <p>Experiencia en el desarrollo UI de sitios webs</p> */}
                        <p>Experience on UI development for websites</p>
                    </div>
                </div>
                <div className="div3">
                <div className="div3Content">
                        <img className="imgFrontend" src={imgFrontendDeveloper} alt=""/>
                        <h3>Frontend Developer</h3>
                        {/* <p>Experiencia en el desarrollo frontend con React.js y Angular</p> */}
                        <p>Experience on frontend development with React.js and Angular</p>
                    </div>
                </div>
                <div className="div4">
                <div className="div4Content">
                        <img className="imgMobile" src={imgMobileDeveloper} alt=""/>
                        <h3>Mobile developer</h3>
                        {/* <p>Experiencia en el desarrollo de aplicaciones moviles con flutter</p> */}
                        <p>Experience on mobile development with Flutter</p>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Services;