import React from 'react';
import './Rating.css';

const Rating = (props) => {
  const score = (props.score / 5) * 100

  return (
    <i className="star-wrapper">
      <i className="stars" style={{ width: score + "%" }}></i>
    </i>
  )
}

export default Rating