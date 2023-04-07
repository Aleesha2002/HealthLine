import React from "react";
import doctor_info from "../doctor_info";

function DoctorModel(props) {
  // return (
  //   <div className="term">
  //     <img className="Image" src={props.image} />
  //     <dt>
  //       <span className="layout" role="img">
  //         {props.name}
  //       </span>
  //     </dt>
  //     <dd>{props.department}</dd>
  //     <dd>{props.qualification}</dd>
  //     <dd>{props.experience}</dd>
  //     <dd>{props.description}</dd>
  //   </div>
  // );

  return (
    <div className="container grid ">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 20,
        }}
      >
        <div>
          <figure>
            <img className="Image" src={props.image} />
          </figure>
        </div>

        <div>
          <dt>
            <span className="layout" role="img">
              {props.name}
            </span>
          </dt>
          <dd>{props.department}</dd>
          <dd>{props.qualification}</dd>
          <dd>{props.experience}</dd>
          <dd>{props.description}</dd>
        </div>
      </div>
    </div>
  );
}

export default DoctorModel;
