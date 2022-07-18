import React from 'react';

import "../Assets/css/partenaire.scss";
import logo1 from "../Assets/img/partenaire_1.png";
import logo2 from "../Assets/img/partenaire_2.png";
import logo3 from "../Assets/img/partenaire_3.png";
import logo4 from "../Assets/img/partenaire_4.png";
import logo5 from "../Assets/img/partenaire_5.jpeg";
import logo6 from "../Assets/img/partenaire_6.png";
import logo7 from "../Assets/img/partenaire_7.jpeg";
import logo8 from "../Assets/img/partenaire_8.png";
import logo9 from "../Assets/img/partenaire_9.png";
import logo10 from "../Assets/img/partenaire_10.jpeg";
import logo11 from "../Assets/img/partenaire_11.jpg";
import logo12 from "../Assets/img/partenaire_12.jpeg";

const Partenaire = () => {
    return (
        <div className='divPartenaire'>
            <img src={logo1} alt="logo des partenaires" />
            <img src={logo2} alt="logo des partenaires" />
            <img src={logo3} alt="logo des partenaires" />
            <img src={logo4} alt="logo des partenaires" />
            <img src={logo5} alt="logo des partenaires" />
            <img src={logo6} alt="logo des partenaires" />
            <img src={logo7} alt="logo des partenaires" />
            <img src={logo8} alt="logo des partenaires" />
            <img src={logo9} alt="logo des partenaires" />
            <img src={logo10} alt="logo des partenaires" />
            <img src={logo11} alt="logo des partenaires" />
            <img src={logo12} alt="logo des partenaires" />
        </div>
    );
};

export default Partenaire;