import React from "react";
import { useNavigate } from "react-router-dom";
function Moviecard(props) {
  const navigate = useNavigate();
  const toBooking = () => {
    navigate("/more", { state: { name: props.name, summary: props.summary, premiered: props.premiered, rating: props.rating , image:props.image} });
    //
  };

  return (
    <>
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img className="img-thumbnail" src={props.image} alt="movie" />
          <div className="card-body">
            <h5 className="card-title">Movie : {props.name}</h5>
            <p className="card-text">
              <strong>movie type : </strong>
              {props.type}
            </p>
            <p className="card-text">
              <strong>movie language : </strong>
              {props.language}
            </p>
            <p className="card-text">
              <strong>genres : </strong>
              {props.genres}
            </p>
            <button onClick={() => toBooking()} className="btn btn-primary">
              Book your ticket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviecard;
