import React from "react";

import "../Assets/css/us.scss";
import videoPres from "../Assets/video/videoPresentation.mp4";
import instagram from "../Assets/img/sociaux_3.png";
import facebook from "../Assets/img/sociaux_1.png";
import linkedin from "../Assets/img/sociaux_2.png";

const Us = () => {
  return (
    <div className="divUs">
      <div className="left">
        <h2
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-back">
          <span>Qui </span>
          sommes-nous
          <span> ?</span>
        </h2>
        <p
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-back"
          data-aos-delay="100">Une agence digitale moderne et à l'écoute de vos besoins 😉</p>
        <p
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-back"
          >
          Experience MG, c'est une équipe de jeunes experts créatifs qui ont
          décidé de monter ensemble la meilleure agence digitale de Madagascar
          🇲🇬
        </p>
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-back"
          data-aos-delay="100" className="btnAndSociaux">
          <button>Voir nos dernières réaliations</button>
          <div className="sociaux">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-back"
        data-aos-delay="100" className="right">
        <video autoPlay loop muted>
          <source src={videoPres} type="video/mp4" />
          Your browser does not support the video tag. I suggest you upgrade
          your browser.
        </video>
      </div>
    </div>
  );
};

export default Us;
