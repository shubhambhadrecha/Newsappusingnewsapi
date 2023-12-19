import React from "react";
import Spinner from "./loading.gif";

function Loadinganimation() {
  return (
    <div className="flex justify-center">
      <div className="w-1/5">
        <img src={Spinner} alt="loading" />
      </div>
    </div>
  );
}

export default Loadinganimation;
