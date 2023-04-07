import React from "react";
import doctor_info from "../doctor_info";
import DoctorModel from "./DoctorModel";

function Doctor(doctor_info) {
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
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Doctor</span>
      </h1>
      <dl className="dictionary">{doctor_info.map(Doctor)}</dl>
    </div>
  );
}

export default App;
