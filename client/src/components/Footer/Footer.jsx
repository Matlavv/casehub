import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link className ="link" to="/products/1">Silicones</Link>
          <Link className ="link" to="/products/2">Images</Link>
          <Link className ="link" to="/products/3">Personnalisées</Link>
        </div>
        <div className="item">
          <h1>Liens</h1>
          <span>FAQ</span>
          <span>CGV</span>
        </div>
        <div className="item">
          <h1>A propos</h1>
          <span>
          L’Ingéniosité Créative à toujours été au cœur de nos actions. C’est avec ingéniosité et créativité que nous avons développées un matériau révolutionnaire qui protège votre technologie. En tant qu’acteur du changement, CASEHUB avance constamment en développant des solutions innovantes en accordant une priorité à la durabilité.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Contactez-nous via nos réseaux sociaux ou via la case contact de notre page d'accueil en entrant votre addresse mail. Nos équipes vous recontacterons.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">CaseHub</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;