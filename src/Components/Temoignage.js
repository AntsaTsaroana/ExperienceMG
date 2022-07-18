import React from "react";

import "../Assets/css/temoignage.scss";
import pdp1 from "../Assets/img/pdp_1.jpg";
import pdp2 from "../Assets/img/pdp_2.png";
import pdp3 from "../Assets/img/pdp_3.jpg";
import pdp4 from "../Assets/img/pdp_4.jpg";

const Temoignage = () => {
  return (
    <div className="divTemoignage">
      <h2>
        <span>Ils </span>
        nous ont fait
        <span> confiance</span>
      </h2>
      <div className="temoignage">
        <div className="cardTemoignage">
          <img src={pdp1} alt="People's picture" />
          <div className="text">
            <h4>M Rabemihaja, General Manager, Ravintsara Wellness Resort</h4>
            <p>
              Ils ont su satisfaire toutes nos attentes à la fois dans la
              qualité et dans la vitesse. N'hésitez pas à faire appel à eux 😉
            </p>
          </div>
        </div>
        <div className="cardTemoignage">
          <img src={pdp2} alt="People's picture" />
          <div className="text">
            <h4>M Jordan, CEO de social-beauty.fr</h4>
            <p>
              Une équipe jeune et dynamique ! Ils savent être rigoureux tout en
              étant créatifs. C'est un plaisir de travailler avec eux.
            </p>
          </div>
        </div>
        <div className="cardTemoignage">
          <img src={pdp3} alt="People's picture" />
          <div className="text">
            <h4>Mlle Henintsoa, apprentie Community Manager</h4>
            <p>
              Good job ! Une très belle expérience avec la team XMG. Hâte de
              repartir pour de nouvelles aventures avec vous.F
            </p>
          </div>
        </div>
        <div className="cardTemoignage">
          <img src={pdp4} alt="People's picture" />
          <div className="text">
            <h4>Alida & Fabrice, co-gérants de Kintaña Beauty Cosmetics</h4>
            <p>
              C'est en bonne partie grâce à eux que notre entreprise est là où
              elle en est aujourd'hui. Merci Experience MG !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temoignage;
