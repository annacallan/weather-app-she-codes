import React from 'react'

const TextArea = ({ name, value, onChange,...props }) => {
    return <textarea name={name} value={value} onChange={onChange} />;
  };
  

export default TextArea
