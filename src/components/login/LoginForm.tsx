import React, { useState } from "react";
import InputField from "../inputs/InputField";
import Button from "../buttons/Button";
import style from "@/styles/Buttons.module.css";
import { apiHandler } from "@/services/index";
import { authService } from "@/services/next-api/auth";
import { useAppToast } from "@/libs/toast";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [type, setType] = useState<"login" | "register">("login");
  const toggleType = () => setType(type === "login" ? "register" : "login");

  // toast
  const {showToast} = useAppToast();

  // router
  const router = useRouter();

  // Form handler
  const [data, setData] = useState<Record<string, unknown>>({});
  const updateData = (field: string, value: unknown) =>
    setData((prev) => ({ ...prev, [field]: value }));
  const handleSubmit = async () => {
    try {
      const response = await (type === "register"
        ? authService.register(data)
        : authService.login(data));

        if(response) {
          showToast({
            title: "Success",
            description: "Login successful",
            status: "success"
          })
          router.push("/home");
        }
    } catch (error: any) {
      console.log(error);
      showToast({
        title: "Error",
        description: error?.message ?? "There's an error, please check again.",
        status: "error"
      })
    }
  };

  // console
  console.log("Data", data);

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
        <span style={{ color: type === "register" ? "inherit" : "black" }}>
          Sign In
        </span>
        {" / "}
        <span style={{ color: type === "login" ? "inherit" : "black" }}>
          Login
        </span>
      </h1>

      {type === "register" && (
        <InputField
          label="Name"
          placeholder="Enter name"
          onChange={(e) => {
            // console.log("nm", e.currentTarget.value);
            updateData("name", e.currentTarget.value);
          }}
        />
      )}

      <InputField
        label="Email"
        placeholder="Enter Email"
        onChange={(e) => {
          // console.log("em", e.currentTarget.value);
          updateData("email", e.currentTarget.value);
        }}
      />
      <InputField
        label="Password"
        placeholder="Enter Password"
        type="password"
        onChange={(e) => {
          // console.log("pw", e.currentTarget.value);
          updateData("password", e.currentTarget.value);
        }}
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          id="submit-button"
          className={style.main}
          handleClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          id="submit-button"
          className={style.secondary}
          handleClick={toggleType}
        >
          {type === "login" ? "Register" : "Login"}
        </Button>
      </div>
    </div>
  );
}
