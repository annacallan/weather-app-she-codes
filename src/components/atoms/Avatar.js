import React from 'react'
import HipCat from '../../images/raoul-droog-yMSecCHsIBc-unsplash_resize.jpg'

const Avatar = ({ image, ...props }) => {
    return (
      <div className="profilePic">
        <img src={HipCat} alt="Weather Person Avatar" />
      </div>
    );
  };
  

export default Avatar
