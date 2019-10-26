import React from 'react';
import KittyMood from '../atoms/KittyMood';
import KittyPic from '../atoms/KittyPic';
import TextLink from '../atoms/TextLink';

const KittyProfile = ({mood, photo, ...props}) => {
    return (
        <div>
            <h2>Today's Cat Mood</h2>
            < KittyPic />
            < KittyMood />
            < TextLink> Back to the weather </TextLink>
        </div>
    )
}

export default KittyProfile
