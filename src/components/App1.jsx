import React, { useState } from "react";
import doctor_info from "../doctor_info";
import DoctorModel from "./DoctorModel";
import colors from "../color.json";

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
      color={doctor_info.color}
      value={doctor_info.value}
    />
  );
}

// function setclassName() {
//   if (doctor_info.id % 2 != 0) {
//     "className" = "color";
//   } else {
//     "className" = "color1";
//   }
// }

function App() {
  //console.log(colors, "json");
  const [changeColor, setChangeColor] = useState("#E9F3F6");
  const handleClick = () => {
    const color = "#ffffff";
    setChangeColor(color);
  };

  //   const isValue = true;
  const dynamicCSS = `
  .color{
    background:${colors.color}
  }
  .color1{
    background:${colors.color1}
  }`;

  //   if (doctor_info.id % 2 != 0) {
  //     colorName = "color";
  //   } else {
  //     colorName = "color1";
  //   }
  console.log(doctor_info.color);
  return (
    <div>
      <style>{dynamicCSS}</style>
      <h1>
        <span>Doctor</span>
      </h1>
      <div onmouseover="handleClick()">
        {/* <script type="text/javascript">
          var colorName; if (doctor_info.id % 2 != 0) {(colorName = "color")}
          else {(colorName = "color1")}
        </script> */}
        <dl
          className="dictionary color"
          //   style={{ backgroundColor: isValue ? "E9F3F6" : "fffff" }}
        >
          {doctor_info.map(Doctor)}
        </dl>
      </div>
    </div>
  );
}

export default App;
