import "./card.styles.css";

import React from "react";

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set1`}
      alt="monster"
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
