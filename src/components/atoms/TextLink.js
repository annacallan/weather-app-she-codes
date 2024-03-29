import React from 'react'

const TextLink = ({ onButtonClick, ...props }) => {
    return (
      <div>
        <button className='textLinkClass' onClick={onButtonClick}>{props.children}</button>
      </div>
    );
  };
  

export default TextLink
