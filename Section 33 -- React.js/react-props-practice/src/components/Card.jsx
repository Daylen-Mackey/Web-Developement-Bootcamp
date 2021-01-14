import React from "react";

function Card(props){
    return (
        <div className="card">
        <div className="top">
          <h2 className = "name">{props.name}</h2>
          <img className = "circle-img"
            src= {props.imgURL}
            // src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className = "info">{props.phone}</p>
          {/* <p>+123 456 789</p> */}
          <p className = "info">{props.email}</p>
          {/* <p>b@beyonce.com</p> */}
        </div>
      </div>



    )

}

export default Card;