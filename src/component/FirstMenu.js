import Header from "./Header";
import Promo from "./Promo";
import Card from "./Card";
import { useState } from "react";
import "./Card.css";
import SearchInput from "./SearchInput";

const cards = [
  {
    id: 1,
    name: "Pet store",
    description: "WE have here the Cutest animal in the WORLD !",
    category: "Pet",
    price: `${1.99} - ${99.99}`,
    rating: 4.5,
    imgUrl:
      "https://cdn.pixabay.com/photo/2022/09/07/07/07/cat-7438092_960_720.jpg",
  },
  {
    id: 2,
    name: "Socer academy",
    description: "The best socer academy in the coutry come visit us :)",
    category: "Sport",
    price: `${36.99} per Month`,
    rating: 5,
    imgUrl:
      "https://cdn.pixabay.com/photo/2022/08/17/15/46/soccer-7392844_960_720.jpg",
  },
  {
    id: 3,
    name: "Music store",
    description: "The most Popular musical instruments you must to see ! ",
    category: "Music",
    price: `${20} - ${500}`,
    rating: 4,
    imgUrl:
      "https://cdn.pixabay.com/photo/2022/07/10/01/38/keyboard-7312016_960_720.jpg",
  },
];

function FirstMenu() {
  const [business, setBusiness] = useState(cards);
  const [businessC, setBusinessC] = useState(cards);
  function searchBusiness(value) {
    let result = [...business];
    if (value.length > 0) {
      result = business.filter(data =>
        data.name.toLowerCase().includes(value.toLowerCase())
      );    
    }
    setBusinessC(result);
  }

  const [display, setDisplay] = useState("grid");
  return (
    <>
      <Header />
      <Promo mainTxt="BizAd" subTxt="Adversting your business" />
      <div>
        <div className="d-flex justify-content-between px-5 pt-2">
          <div>
            <SearchInput search={searchBusiness} />
          </div>

          <div>
            <button
              onClick={(e) => setDisplay("list")}
              className="btn btn-default"
            >
              <i className="bi-list-ul"></i>
            </button>
            <button
              onClick={(e) => setDisplay("grid")}
              className="btn btn-default"
            >
              <i className="bi-grid-3x3-gap-fill"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={display}>
        <Card data={businessC} />
      </div>
    </>
  );
}

export default FirstMenu;
