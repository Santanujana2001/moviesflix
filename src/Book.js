import React from "react";
import { useLocation } from "react-router-dom";
import Model from "./Model";
function Book() {
  const location = useLocation();
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-8">
            <h2>Context of {location.state.name}</h2>
            <img src={location.state.image} className="img-fluid shadow-2-strong" alt="Responsive" />

            <h5 className="text-wrap my-3">{location.state.summary}</h5>
          </div>
          <div className="col">
          <Model name={location.state.name}/>
          </div>
        </div>
        <div className="row">
        <div className="col">
        
        <p className="text-wrap"><b>rating : </b>{location.state.rating===null?<>N/A</>:location.state.rating}</p>
        <p className="text-wrap"><b>premiered on : </b>{location.state.rating===null?<>N/A</>:location.state.premiered}</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Book;
