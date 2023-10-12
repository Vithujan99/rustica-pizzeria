import React from "react";
import gluten from "../../../asset/allergens/gluten.webp";
import crustaceans from "../../../asset/allergens/crustaceans.webp";
import egg from "../../../asset/allergens/egg.webp";
import fish from "../../../asset/allergens/fish.webp";
import peanuts from "../../../asset/allergens/peanuts.webp";
import soya from "../../../asset/allergens/soya.webp";
import milk from "../../../asset/allergens/milk.webp";
import nuts from "../../../asset/allergens/nuts.webp";
import celery from "../../../asset/allergens/celery.webp";
import mustard from "../../../asset/allergens/mustard.webp";
import sesame from "../../../asset/allergens/sesame.webp";
import sulphites from "../../../asset/allergens/sulphites.webp";
import lupin from "../../../asset/allergens/lupin.webp";
import molluscs from "../../../asset/allergens/molluscs.webp";

import "./ZusatzstoffeUndallergene.css";

const ZusatzstoffeUndAllergene = () => {
  return (
    <div className="container z-a-page">
      <h1>Zusatzstoffe und Allergene</h1>
      <div className="allergens-holder">
        <span className="allergen-holder">
          <img className="allergen-img" src={gluten} alt="Gluten" />
          <div>
            <sup>A</sup>Gluten
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={gluten} alt="Glutenfrei" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>A*</sup>Glutenfrei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={crustaceans} alt="Krebstiere" />
          <div>
            <sup>B</sup>Krebstiere
          </div>
        </span>
        <span className="allergen-holder">
          <img
            className="allergen-img"
            src={crustaceans}
            alt="Krebstiere frei"
          />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>B*</sup>Krebstiere frei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={egg} alt="Eier" />
          <div>
            <sup>C</sup>Eier
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={egg} alt="Frei von Ei" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>C*</sup>Frei von Ei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={fish} alt="Fisch" />
          <div>
            <sup>D</sup>Fisch
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={fish} alt="Fisch" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>D*</sup>Frei von Fisch
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={peanuts} alt="Erdnüsse" />
          <div>
            <sup>E</sup>Erdnüsse
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={peanuts} alt="Erdnussfrei" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>E*</sup>Erdnussfrei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={soya} alt="Sojabohnen" />
          <div>
            <sup>F</sup>Sojabohnen
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={soya} alt="Sojabohnen frei" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>F*</sup>Sojabohnen frei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={milk} alt="Milch / Laktose" />
          <div>
            <sup>G</sup>Milch / Laktose
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={milk} alt="Milch / Laktosefrei" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>G*</sup>Milch / Laktosefrei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={nuts} alt="Nüsse" />
          <div>
            <sup>H</sup>Nüsse
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={nuts} alt="Frei von Nüssen" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>H*</sup>Frei von Nüssen
          </div>
        </span>
        <span class="allergen-holder">
          <img className="allergen-img" src={celery} alt="Sellerie" />
          <div>
            <sup>L</sup>Sellerie
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={celery} alt="Frei von Sellerie" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>L*</sup>Frei von Sellerie
          </div>
        </span>
        <span class="allergen-holder">
          <img className="allergen-img" src={mustard} alt="Senf" />
          <div>
            <sup>M</sup>Senf
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={mustard} alt="Ohne Senf" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>M*</sup>Ohne Senf
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={sesame} alt="Sesam" />
          <div>
            <sup>N</sup>Sesam
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={sesame} alt="Frei von Sesam" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>N*</sup>Frei von Sesam
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={sulphites} alt="Sulfite" />
          <div>
            <sup>O</sup>Sulfite
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={sulphites} alt="Sulfit frei" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>O*</sup>Sulfit frei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={lupin} alt="Lupine" />
          <div>
            <sup>P</sup>Lupine
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={lupin} alt="Lupinfrei" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>P*</sup>Lupinfrei
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={molluscs} alt="Weichtiere" />
          <div>
            <sup>R</sup>Weichtiere
          </div>
        </span>
        <span className="allergen-holder">
          <img className="allergen-img" src={molluscs} alt="Keine Weichtiere" />
          <div className="allergen-img-cross"></div>
          <div>
            <sup>R*</sup>Keine Weichtiere
          </div>
        </span>
      </div>
      <div className="zusatzstoff-holder">
        <span>
          <sup>1</sup>Farbstoff
        </span>
        <span>
          <sup>2</sup>Antioxidationsmittel
        </span>
        <span>
          <sup>3</sup>Geschmacksverstärker
        </span>
        <span>
          <sup>4</sup>Konservierungsmittel
        </span>
        <span>
          <sup>5</sup>Phosphat
        </span>
        <span>
          <sup>6</sup>Süßungsmittel
        </span>
        <span>
          <sup>7</sup>Milcheiweiß
        </span>
        <span>
          <sup>8</sup>Stärke
        </span>
        <span>
          <sup>9</sup>Mayonaise (enthält Konservierungsmittel und Milcheiweiß)
        </span>
        <span>
          <sup>10</sup>Koffein
        </span>
        <span>
          <sup>11</sup>Formfleisch (Hinterschinken)
        </span>
        <span>
          <sup>12</sup>geschwärzt
        </span>
        <span>
          <sup>13</sup>Eiweiß
        </span>
      </div>
    </div>
  );
};

export default ZusatzstoffeUndAllergene;
