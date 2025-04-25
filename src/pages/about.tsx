import Button from "@/components/buttons/Button";
import React from "react";
import style from "@/styles/Buttons.module.css";

const buttonStyles: React.CSSProperties = {
  padding: "8px",
  border: "1px solid yellow",
  borderRadius: "4px",
  backgroundColor: "red",
};

export default function about() {
  return (
    <div>
      <h1>About</h1>

      <Button id="button-1" style={buttonStyles}>
        Button 1
      </Button>
      <Button id="button-2" className={style["main-button"]}>
        Button 2
      </Button>
    </div>
  );
}
