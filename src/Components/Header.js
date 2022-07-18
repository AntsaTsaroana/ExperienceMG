import React, { useRef } from "react";

import "../Assets/css/header.scss";
import headerPic from "../Assets/img/headerPic.png";
import logo from "../Assets/img/logoMG.png";

const Header = () => {
  const ref = useRef();
  const handleClick = (e) => {
    e.currentTarget.style.position = "fixed";
    e.currentTarget.style.right = "3%";
    e.currentTarget.style.bottom = "5%";
    e.currentTarget.style.width = "100px";
    e.currentTarget.style.height = "100px";
    e.currentTarget.style.background = "crimson";
    e.currentTarget.style.color = "#ffffff";
    e.currentTarget.style.zIndex = "10";

    ref.current.style.fontSize = "15px";
  };
  return (
    <header>
      <img src={logo} alt="Logo of experience MG" className="logo" />
      <img src={headerPic} alt="picture of the header" />
      <h2
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
      >
        Experience MG - Votre partenaire dans tous vos projets digitaux
      </h2>
      <h2
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        className="hasard"
      >
        Vous n'êtes pas là par hasard
      </h2>
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        id="btnBonjour"
        className="divBonjour"
        onClick={handleClick}
      >
        <span ref={ref} className="textBonjour" id="text">
          Bonjour
        </span>
      </div>
    </header>
  );
};

export default Header;
