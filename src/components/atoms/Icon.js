import React from 'react'

import {ReactComponent as Sunny } from '../../images/icons/weathericons/svg/sunny-day.svg'
import {ReactComponent as PartiallyCloudy } from '../../images/icons/weathericons/svg/partially-cloudy.svg'
import {ReactComponent as Cold } from '../../images/icons/weathericons/svg/cold.svg'
import {ReactComponent as RainyDay } from '../../images/icons/weathericons/svg/rainy-day.svg'
import {ReactComponent as Drizzle } from '../../images/icons/weathericons/svg/drizzle.svg'
import {ReactComponent as Lighting } from '../../images/icons/weathericons/svg/lighting.svg'
import {ReactComponent as Mist } from '../../images/icons/weathericons/svg/mist.svg'
import {ReactComponent as Cloudy } from '../../images/icons/weathericons/svg/overcast-day.svg'
import {ReactComponent as Rainbow } from '../../images/icons/weathericons/svg/rainbow.svg'

// const iconlist = {
//     '01d': <Sunny/>,
//     '01n': <Sunny/>,
//     '02d': <PartiallyCloudy/>,
//     '02n': <PartiallyCloudy/>,
//     '03d': <PartiallyCloudy/>,
//     '03n': <PartiallyCloudy/>,
//     '04d': <Cloudy/>,
//     '04n': <Cloudy/>,
//     '09d': <Drizzle/>,
//     '09n': <Drizzle/>,
//     '10d': <RainyDay/>,
//     '10n': <RainyDay/>,
//     '11d': <Lighting/>,
//     '11n': <Lighting/>,
//     '13d': <Cold/>,
//     '13n': <Cold/>,
//     '50n': <Mist/>,
//     '50d': <Mist/>,
//     'default': <Rainbow/>,
// }

const Icon = ({icon}) => {
  switch(icon) {
    case '01d':
    case '01n':
        return(<div className='icon'>
                <Sunny/>
            </div>);
    case '02d':
    case '02n':
    case '03d':
    case '03n':
        return (<div className='icon'>
        <PartiallyCloudy/>
        </div>
        );
    case '04d':
    case '04n':
        return (<div className='icon'>
            <Cloudy/>
            </div>
            );
    case '09d':
    case '09n':
        return (<div className='icon'><Drizzle/></div>); 
    case '10d':
    case '10n':
        return (<div className='icon'><RainyDay/></div>);
    case '11d':
    case '11n':
        return (<div className='icon'><Lighting/></div>);     
    case '13d':
    case '13n':
        return (<div className='icon'><Cold/></div>);
    case '50d':
    case '50n':
        return (<div className='icon'><Mist/></div>);             
    default:
        console.log('icon passed', icon) 
        return (<div className='icon'><Rainbow/></div>); 
  }}

export default Icon
