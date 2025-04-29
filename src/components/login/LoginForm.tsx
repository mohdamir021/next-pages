import React from "react";
import InputField from "../inputs/InputField";
import Button from "../buttons/Button";
import style from "@/styles/Buttons.module.css";

export default function LoginForm() {
  return (
    <div
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          margin: "8px 4px",
          color: "var(--main)",
        }}
      >
        Sign In / Login
      </h1>

      <InputField
        label="Email"
        placeholder="Enter Email"
        onChange={(e) => {
          console.log("nm", e.currentTarget.value);
        }}
      />
      <InputField
        label="Password"
        placeholder="Enter Password"
        type="password"
        onChange={(e) => {
          console.log("pw", e.currentTarget.value);
        }}
      />

      <Button id="submit-button" className={style.main}>
        Submit
      </Button>
    </div>
  );
}
