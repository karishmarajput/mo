import React from 'react';
import './style/card.css';
export default function Motivation() {
  return (
    <div className="cardDiv">
      <div className="cardHeading"> Heading</div>
      <div className="cardImg"></div>
      <div className="cardDetails">
        <div className="cardLike"></div>
        <div className="cardShare">
          <i class="fa-solid fa-share"></i>
        </div>
        <div className="cardDonate"></div>
      </div>
    </div>
  );
}
