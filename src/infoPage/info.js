import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarSide, faWater, faTree, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./info.css";

library.add(faCarSide, faWater, faTree );

const Info = () => {
  const product = {
    productName: "Pauls Farmhouse Gold Organic Milk 1.5l",
    servingSize: "1 glass (200ml) per serving",
    greenhouseGas: "229 Kg",
    petrolCar: "585 km",
    heatingHome: "36 days",
    water: "45,733 litres",
    showers: "703 showers",
    land: "652m²",
    tenisCourts: "2"
  };

  const productName = product.productName;
  const greenhouseGas = product.greenhouseGas;
  const petrolCar = product.petrolCar;
  const water = product.water;

  return (
    <div className="main">
      <h1>{productName}</h1>

      <div className="container">
        <div className="rating">
          <p className="textRating">Environment Ratings</p>
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star"/>
          <FontAwesomeIcon icon={faStar} className="star"/>
        </div>

        <div>
          <p>Your annual consumption of dairy milk is contributing to:</p>
        </div>

        <div className="item">
          <div className="iconItem">
            <FontAwesomeIcon icon={faTree} className="tree"/>
          </div>
          <div className="descriptionItem">
            <p className="amount">{greenhouseGas}</p>
            <p>of greenhouse gas emissions</p>
          </div>
        </div>

        <div className="item">
          <div className="iconItem">
            <FontAwesomeIcon icon={faWater} className="water"/>
          </div>
          <div className="descriptionItem">
            <p className="amount">{water}</p>
            <p>
              is the amount of water needed to keep these cows fed and healthy
            </p>
          </div>
        </div>

        <div className="item">
          <div className="iconItem">
            <FontAwesomeIcon icon={faCarSide} className="car" />
          </div>
          <div className="descriptionItem">
            <p className="amount">{petrolCar}</p>
            <p>is the distance equivalent from a regular petrol car</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
