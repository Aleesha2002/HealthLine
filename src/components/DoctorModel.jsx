
import React from "react";
import "./styles.css";

function DoctorModel(props) {
  return (
    <div className="container grid ">
      <div
        className="Total-content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 20,
        }}
      >
        <div className="Image-file">
          <figure>
            <img className="Image" src={props.image} />
          </figure>
        </div>

        <div className="Desc-file">
          <h2>
            <span className="layout" role="img">
              {props.name}
            </span>
          </h2>
          <h3 class="depart">{props.department}</h3>
          <h3>{props.qualification}</h3>
          <h3>{props.experience}</h3>
          <h3>{props.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default DoctorModel;
