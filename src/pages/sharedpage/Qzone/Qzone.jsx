import React from "react";
import q1 from "../../../assets/qZone1.png";
import q2 from "../../../assets/qZone2.png";
import q3 from "../../../assets/qZone3.png";

const Qzone = () => {
   return (
      <div className="text-center w-100  q-zone py-4 d-flex justify-content-center align-items-center flex-column px-2">
         <h4>Qzone</h4>
         <div className="py-3">
            <img src={q1} alt="" />
            <img src={q2} alt="" />
            <img src={q3} alt="" />
         </div>
      </div>
   );
};

export default Qzone;
