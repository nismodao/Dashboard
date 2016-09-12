import React from 'react';

const template = (props) => {
    console.log(props);
  return (
    <div>
      <h1>{props.day}</h1>
      <h2>{props.weight}</h2>
    </div>
  );
}

export default template;

