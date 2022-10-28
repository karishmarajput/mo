import React from 'react';
import './style/card.css';
import './data/cardData.json';
export default function Card() {
  const comment = comments.map((comm) => {
    return (
      <div className="cardDiv" key={comm.id} style={{ width: '100%' }}>
        <div className="cardHeading">{comm.name}</div>
        <div className="cardImg">
          <img src={comm.src} />
        </div>
        <div className="cardDetails">
          <div className="cardLike"></div>
          <div className="cardShare">
            <i class="fa-solid fa-share"></i>
          </div>
          <div className="cardDonate"></div>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {comment}
        {/* <CommentForm dishId={dishId} addComment={addComment} /> */}
      </div>
    </div>
  );
}
