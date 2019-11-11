import React from 'react';
import KittyMood from '../atoms/KittyMood';
import KittyPic from '../atoms/KittyPic';
import { Link } from 'react-router-dom';

const KittyProfile = ({mood, photo, ...props}) => {
    return (
        <div>
            <h2>Today's Cat Mood</h2>
            < KittyPic />
            < KittyMood />
            <Link to="/" style={{color: 'white',}}>Back to the weather!</Link>
        </div>
    )
}

export default KittyProfile
