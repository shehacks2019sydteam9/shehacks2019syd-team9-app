import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarSide, faTemperatureHigh, faShower, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCarSide, faTemperatureHigh, faShower, faTree);

const Info = () =>{
  return(
    <div>
      <h1>Milk (dairy)</h1>
      <h2>1 glass (200ml) per serving</h2>


      <p>Over an entire year your consumption of dairy milk is contributing 229kg to your annual greenhouse gas emissions.</p>
      <p><FontAwesomeIcon icon={faCarSide} /> That's the equivalent of driving a regular petrol car 585 miles (941km).</p>
      <p>OR</p>
      <p><FontAwesomeIcon icon={faTemperatureHigh} /> the same as heating the average UK home for 36 days.</p>
      <p>Your consumption of dairy milk also uses</p>
      <p><FontAwesomeIcon icon={faShower} /> 45,733 litres of water, equal to 703 showers lasting eight minutes.</p>
      <p>AND</p>
      <p><FontAwesomeIcon icon={faTree} /> 652m² land, equal to the space of 2 tennis courts.</p>
    </div>
  )
};

export default Info