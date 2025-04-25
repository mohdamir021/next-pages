import Button from "@/components/buttons/Button";
import React from "react";
import style from "@/styles/Buttons.module.css"

export default function about() {
  return (
    <div>
      <h1>About</h1>

      <Button
        id="button-1"
        style={{
          padding: "8px",
          border: "1px solid yellow",
          borderRadius: "4px",
          backgroundColor: "red",
        }}
      >
        Button 1
      </Button>
      <Button
        id="button-2"
        className={style["main-button"]}
      >
        Button 2
      </Button>
    </div>
  );
}
