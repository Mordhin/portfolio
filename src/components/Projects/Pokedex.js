import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/pokedex.png";
import { Tag } from "../Tags/Tag";

export const Pokedex = () => {
  return (
    <div className="project">
      <div className="project_photo">
        <Link to="/portfolio/pokedex">
          <img src={photo} alt="pokedex preview"></img>
        </Link>
      </div>
      <div className="project_description">
        <h3 className="text-align-left">Pokedex</h3>
        <p>
          Cette application permet de rechercher un Pokémon et les informations
          qui le concerne.
          <br />
          L'objectif derrière ce projet était de me faire la main avec React et
          la gestion d'une API (
          <a href="https://pokeapi.co/" target="blank">
            PokeAPI.co
          </a>
          ). J'en ai également profité pour y intégrer un store Redux, afin
          d'expérimenter également cette bibliothèque.
          <br />
          J'ai fait le choix de PokeAPI car c'est une API gratuite et très riche
          en data. De plus la diversité colorée des pokémons m'a permis de me
          faire plaisir sur le style.
        </p>
        <p>
          J'ai développé ce projet sous React JS, Redux. J'ai géré le style avec
          la bibliothèque Styled-Components (CSS-in-JS).
        </p>
        <p className="discret">
          Le site peut prendre plusieurs secondes à charger.
        </p>
      </div>

      <div className="project_footer">
        <div className="project_tags">
          <Tag type="tag">FrontEnd</Tag>
          <Tag type="tag">Redux</Tag>
          <Tag type="tag">API</Tag>
          <Tag type="tag">Styled-Components</Tag>
          <Tag type="tag">Responsive</Tag>
          <a href="https://jcpokedex.herokuapp.com/" target="blank">
            <Tag type="tag_link">
              <i class="fas fa-globe"></i> Site
            </Tag>
          </a>
          <a href="https://github.com/mordhin/pokedex" target="blank">
            <Tag type="tag_link">
              <i class="fas fa-code"></i> Code
            </Tag>
          </a>
        </div>
      </div>
    </div>
  );
};
