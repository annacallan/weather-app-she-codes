import React from 'react';
import CatPhoto from '../../images/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg'

const KittyPic = ({image, ...props}) => {
    return (
        <div className="catPhoto">
        <img src={CatPhoto} alt="cat mood" />
        </div>
        )
}

export default KittyPic
