import React from 'react';
import './Career.css';

function Career(props) {
  function handleClick() {
    window.open(props.link, '_blank');
  }

  return (
    <div className="career-card" onClick={handleClick}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>Learn more about {props.title}</button>
    </div>
  );
}

export default Career;