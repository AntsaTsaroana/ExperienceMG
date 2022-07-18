import React from "react";

import "../Assets/css/footer.scss";
import footerPic from "../Assets/img/footerPic.png";
import social1 from "../Assets/img/sociauxFooter_1.png";
import social2 from "../Assets/img/sociauxFooter_2.png";
import social3 from "../Assets/img/sociauxFooter_3.png";

const Footer = () => {
  return (
    <footer>
      <img src={footerPic} alt="footer picture" />
      <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="3">
        travailons
        <span> ensemble</span>
      </h2>
      <form className="input">
        <h3>
          Laissez-nous un <span>message</span>
        </h3>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            type="text"
            id="nom"
          />
        </div>
        <div>
          <label htmlFor="tel">Téléphone</label>
          <input
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            type="tel"
            id="tel"
          />
        </div>
        <div>
          <label htmlFor="mail">Email *</label>
          <input
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            type="email"
            id="mail"
          />
        </div>
        <div>
          <label htmlFor="objet">Objet</label>
          <input
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            type="text"
            id="objet"
          />
        </div>
        <div className="divMessage">
          <label htmlFor="message">Message</label>
          <textarea
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            id="message"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="btnSend">
          <button>Envoyer</button>
        </div>
      </form>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        className="divSociaux"
      >
        <a href="#">
          <img src={social1} alt="Social network" />
        </a>
        <a href="#">
          <img src={social2} alt="Social network" />
        </a>
        <a href="#">
          <img src={social3} alt="Social network" />
        </a>
      </div>
      <div className="divCopyright">
        <p>
          Site realisé par &copy; <b>Retina</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
