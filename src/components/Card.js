import React from "react";

function Card(props) {
  return(
      <div className="card--gradient">
        <div className="card">
        <img src={require(`../images/${props.item.img}`)} className="card--image"/>
        <span className="card--title">{props.item.title}</span>
        <span className="card--text">{props.item.description}</span>
      </div>
    </div>
  )
}

export default Card
