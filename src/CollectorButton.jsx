import React, { useContext } from "react";
import StylesContext from "./StylesContext";

// We have a CollectorButton displayed correctly. Does not have any value to it.
export default function CollectorButton() {
  const buttonStyling = useContext(StylesContext);
  
  return (
    <div>
      <button style={buttonStyling}>Click Here!</button>
    </div>
  );
}