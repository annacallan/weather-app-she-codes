import React from 'react'

const Label = ({ name, email, messageText,...props }) => {
    return <label>{props.children}</label>;
  };

export default Label
