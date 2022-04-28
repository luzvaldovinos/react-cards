import React from "react";

function Card(props) {
  return(
    <div className="card">
      <img src={require(`../images/${props.item.img}`)} className="card--image"/>
      <h3 className="card--title">{props.item.title}</h3>
      <p className="card--text">{props.item.description}</p>
    </div>
  )
}

export default Card
