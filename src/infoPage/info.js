import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarSide, faShower, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./info.css"

library.add(faCarSide, faShower, faTree);

const Info = () =>{

  const product = {
    productName: 'Pauls Farmhouse Gold Organic Milk 1.5l',
    servingSize: '1 glass (200ml) per serving',
    greenhouseGas: '229 Kg',
    petrolCar: '585 km',
    heatingHome: '36 days',
    water: '45,733 litres',
    showers: '703 showers',
    land: '652m²',
    tenisCourts: '2'
  }

  const productName = product.productName
  const greenhouseGas = product.greenhouseGas
  const petrolCar = product.petrolCar
  const water = product.water

  return(
    <div className="main">

      <h1>{productName}</h1>

      <div className="container">

      <div className="rating">
        <p>Climate Change Ratings</p>
        <p> * * * * * </p>
      </div>

      <div>
        <p>Your annual consumption of dairy milk is contributing to:</p>
      </div>


        <div className="item">
        <FontAwesomeIcon icon={faTree} />
          <p>{greenhouseGas}</p>
          <p> to your greenhouse gas emissions (annually)</p>
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faCarSide} />
          <p>{petrolCar}</p>
          <p>is the distance equivalent from a regular petrol car</p>
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faShower} />
          <p>{water}</p>
          <p>is the amount of water needed to keep these cows fed and healthy.</p>
        </div>

      </div>

    </div>
  )
};

export default Info