import LoginForm from "@/components/login/LoginForm";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import React, { CSSProperties } from "react";

type CSS = CSSProperties;

const bgStyle: CSS = {
  width: "100%",
  height: "100vh",
  background: "var(--main-dark)",
  display: "flex",
  justifyContent: "space-between",
  padding: "8px",
};

const rightBoxStyle: CSS = {
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const contentBoxStyle: CSS = {
  height: "100%",
  padding: "8px",
  background: "white",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
};

const leftBoxStyle: CSS = {
  ...contentBoxStyle,
  width: "50%",
};

const fullBoxStyle: CSS = {
  ...contentBoxStyle,
  width: "100%",
};

const login = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <div style={bgStyle}>
      <div style={isMobile ? {display: "none"} :rightBoxStyle}>
        <h1>Login</h1>
      </div>
      <div style={isMobile ? fullBoxStyle :leftBoxStyle}>
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
