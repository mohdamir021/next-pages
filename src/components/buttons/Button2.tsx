import React, { CSSProperties, ReactNode, useEffect, useState } from "react";

export default function Button2({
  className,
  style,
  children,
  ...props
}: {
  className?: string;
  style: CSSProperties;
  children: ReactNode;
  id: string
  handleClick?: Function
}) {
  // states
  const [count, setCount] = useState<number>(0);

  // effects
  useEffect(() => {
    console.log("Effect on every render");
  });
  useEffect(() => {
    console.log("Effect on count updating, count = ", count);
  }, [count]);
  useEffect(() => {
    console.log("Effect on first render");
    console.log(
      "================================================================="
    );
  }, []);

  return (
    <button
      className={className}
      style={style}
      onClick={(e) => {
        console.log("Button is clicked");
        // Update count
        setCount((prev) => prev + 1);
      }}
    >
      {children}
    </button>
  );
}
