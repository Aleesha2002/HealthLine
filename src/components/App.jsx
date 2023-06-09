
import React from "react";
import doctor_info from "../doctor_info";
import DoctorModel from "./DoctorModel";
import colors from "../color.json";
import "./styles.css";

function Doctor(doctor_info) {
  console.log(colors, "json");
  return (
    <DoctorModel
      id={doctor_info.id}
      key={doctor_info.id}
      name={doctor_info.name}
      image={doctor_info.image}
      department={doctor_info.department}
      qualification={doctor_info.qualification}
      experience={doctor_info.experience}
      description={doctor_info.description}
      color={doctor_info.color}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="first">
        <span className="second">Doctor</span>
      </h1>
      <dl className="dictionary">{doctor_info.map(Doctor)}</dl>
    </div>
  );
}

export default App;
