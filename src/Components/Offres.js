import React from "react";

import "../Assets/css/offres.scss";
import pic1 from "../Assets/img/cardPic_1.png";
import pic2 from "../Assets/img/cardPic_3.png";
import pic3 from "../Assets/img/cardPic_2.png";
import pic4 from "../Assets/img/cardPic_4.png";

const Offres = () => {
    return (
        <div className="divOffres">
            <h2 data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back">
                Découvrer
                <span> nos offres</span>
            </h2>
            <div className="offres">
                <div
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    className="cardOffre">
                    <img src={pic1} alt="Offer card picture" />
                    <div
                        data-aos="fade-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="100"
                        className="details">
                        <h4>Community Management</h4>
                        <p>Une équipe entière de CMs, graphistes et photographes, dédiée à la promotion de votre entreprise sur les réseaux sociaux.</p>
                        <button className="btnDetails">Grille tarifaire</button>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    className="cardOffre">
                    <img src={pic2} alt="Offer card picture" />
                    <div
                        data-aos="fade-left"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="100"
                        className="details">
                        <h4>Conception de site-web</h4>
                        <p>Faites-nous part de vos besoins de manière détaillée afin que nos experts puissent vous proposer un programme sur-mesure.</p>
                        <button className="btnDetails">Demander devis</button>
                    </div>
                </div>

                <div
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    className="cardOffre">
                    <img src={pic3} alt="Offer card picture" />
                    <div
                        data-aos="fade-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="100"
                        className="details">
                        <h4>Photos & Vidéos</h4>
                        <p>Nos photographes / vidéastes se déplaceront où vous le souhaitez pour couvrir vos événements ou autre séance photos.</p>
                        <button className="btnDetails">Grille tarifaire</button>
                    </div>
                </div>

                <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine" className="cardOffre">
                    <img src={pic4} alt="Offer card picture" />
                    <div
                        data-aos="fade-left"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="100"
                        className="details">
                        <h4>Consultance & Formation</h4>
                        <p>Faites-nous part de vos besoins de manière détaillée afin que nos experts puissent vous proposer un programme sur-mesure.</p>
                        <button className="btnDetails">Demander devis</button>
                    </div>
                </div>
            </div>
            <button
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                className="btnCondition">Conditions générales de vente</button>
        </div>
    );
};

export default Offres;
