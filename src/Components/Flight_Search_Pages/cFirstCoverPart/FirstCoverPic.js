import React from "react";
import CoverPic from "../cFirstCoverPart/images/Flight-Search-Page-Banner.jpg";

function FirstCoverPic() {
  return (
    <div>
      <img
        src={CoverPic}
        alt="CoverPic"
        width="100%"
        className="img-fluid"
      ></img>
    </div>
  );
}

export default FirstCoverPic;
