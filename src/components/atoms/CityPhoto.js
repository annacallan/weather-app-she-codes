import React from 'react';

import PerthPhoto from '../../images/perth.jpg'
import LondonPhoto from '../../images/london.jpg'
import ParisPhoto from '../../images/paris.jpg'
import BeijingPhoto from '../../images/beijing.jpg'
import SydneyPhoto from '../../images/sydney.jpg'
import TokyoPhoto from '../../images/tokyo.jpg'


const CityPhoto = ({image, city, ...props}) => {
    switch(city) {
      case 'Perth':
          return(
            <div>
                <img src={PerthPhoto} alt="Perth City"/>
          </div>);
      case 'London':
          return (
            <div>
            <img src={LondonPhoto} alt="London City"/>
            </div>); 
      case 'Paris':
          return (
            <div>
            <img src={ParisPhoto} alt="Paris City"/>
            </div>); 
      case 'Beijing':
          return (
            <div>
            <img src={BeijingPhoto} alt="Beijing City"/>
            </div>);  
      case 'Tokyo':
          return (
            <div>
            <img src={TokyoPhoto} alt="Tokyo City"/>
            </div>); 
      case 'Sydney':
          return (
            <div>
            <img src={SydneyPhoto} alt="Sydney City"/>
            </div>);   
      default:
          return (
            <div>
            <img src={PerthPhoto} alt="Perth City"/>
            </div>); 
    }}

// const CityPhoto = ({ image, city, ...props }) => {
//     return (
//       <div className="cityPhoto">
//         <img src={PerthPhoto} alt="Perth City" />
//       </div>
//     );
//   };
  
  export default CityPhoto

