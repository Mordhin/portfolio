import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/hops.png";
import { Tag } from "../Tags/Tag";

export const Hops = () => {
  return (
    <div className="project">
      <div className="project_description">
        <h3 className="text-align-right">Hops!... I did it again!</h3>
        <p>
          Application Web qui, tel un carnet de bord, permet de tracker sa
          caonsommation de bière.
          <br />
          Ainsi il est possible d'enregistrer (en scannant le code-barres) une
          bière que l'on vient de goûter, indiquer si elle nous a plu, obtenir
          une multitude d'informations concernant le produit mais aussi le
          producteur.
        </p>
        <p>
          Nous avons développé ce projet en équipe de 4 développeurs fullstack,
          codé en Ruby on rails, javascript, html, css.
        </p>
        <p className="discret">
          Le site peut prendre plusieurs secondes à charger.
        </p>
      </div>
      <div className="project_photo">
        <Link to="/portfolio/hops">
          <img src={photo} alt="hops preview"></img>
        </Link>
      </div>
      <div className="project_footer">
        <div className="project_tags">
          <Tag type="tag">Fullstack</Tag>
          <Tag type="tag">Responsive</Tag>
          <Tag type="tag">Scrapping</Tag>
          <Tag type="tag">API</Tag>
          <Tag type="tag">Bootstrap</Tag>
          <a href="https://hops-505.herokuapp.com/" target="blank">
            <Tag type="tag_link">
              <i class="fas fa-globe"></i> Site
            </Tag>
          </a>
          <a href="https://github.com/adcousin/hops" target="blank">
            <Tag type="tag_link">
              <i class="fas fa-code"></i> Code
            </Tag>
          </a>
        </div>
      </div>
    </div>
  );
};
