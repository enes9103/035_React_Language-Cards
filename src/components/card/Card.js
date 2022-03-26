import { languages } from "../../helpers/data";
import Item from "../item/Item";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          return <Item card={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Card;
