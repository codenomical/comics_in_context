import React, { useContext } from "react";
import StylesContext from "./StylesContext";


export default function RequestFormButton() {
  const buttonStyling = useContext(StylesContext);
  
  // Made the Submit button to look like the Click Here! on the Collector Section.
  return (
    <div>
      <label>
        <input type="submit" value="Submit" style={buttonStyling} />
      </label>
    </div>
  );
}
