import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarSide, faTemperatureHigh, faShower, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./info.css"

library.add(faCarSide, faTemperatureHigh, faShower, faTree);

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
  const servingSize = product.servingSize
  const greenhouseGas = product.greenhouseGas
  const petrolCar = product.petrolCar
  const heatingHome = product.heatingHome
  const water = product.water
  const showers = product.showers
  const land = product.land
  const tenisCourts = product.tenisCourts

  return(
    <div className="main">
      <h1>{productName}</h1>
      <h2>{servingSize}</h2>

      <div className="container">

        <div className="item">
          <p>Over an entire year your consumption of dairy milk is contributing {greenhouseGas} to your annual greenhouse gas emissions.</p>
          <p><FontAwesomeIcon icon={faCarSide} /> That's the equivalent of driving a regular petrol car {petrolCar}.</p>
          <p>OR</p>
          <p><FontAwesomeIcon icon={faTemperatureHigh} /> the same as heating the average UK home for {heatingHome}.</p>
        </div>

        <div className="item">
          <p>Your consumption of dairy milk also uses</p>
          <p><FontAwesomeIcon icon={faShower} /> {water} litres of water, equal to {showers} lasting eight minutes.</p>
          <p>AND</p>
          <p><FontAwesomeIcon icon={faTree} /> {land} land, equal to the space of {tenisCourts} tennis courts.</p>
        </div>

      </div>

    </div>
  )
};

export default Info