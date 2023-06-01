import React from "react";

// Expanded a bit on buttonStyling to see how much I can affect the submit button on special requests.
const StylesContext = React.createContext({
    buttonStyling: {
        background: "#1ECD97",
        display: "inline-block",
        padding: "12px 24px",
        color: "#fff",
        borderRadius: "4px",
        fontSize: "18px", // New property for font size
      },
});

export default StylesContext;