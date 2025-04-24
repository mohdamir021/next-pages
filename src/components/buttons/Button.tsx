import React, { useState } from "react";

// Optional to use `type` but not linter friendly -> type ButtonProps = {...}
interface ButtonProps {
  className?: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}

// Use `type` for this specific case
type ButtonComponent = React.FunctionComponent<ButtonProps>;

const Button: ButtonComponent = (props) => {
  const { style, className, children } = props;

  // states
  const [count, setCount] = useState<number>(0);

  /** Handlers */
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("Button is clicked");

    // Update count
    setCount(prev => prev + 1)

  };

  return (
    <button className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;

const ButtonExplained: ButtonComponent = (props) => {
  // Deconstruct object -> only objects that are not optional | undefined
  const { style, className, children } = props;

  // states
  const [count, setCount] = useState<number>(0);

  /** Handlers
   * it is advisable to always declare function separately before
   * being passed to props
   */
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("Button is clicked");

    // State Update 1 - This will only set the value of count + 1
    setCount(count + 1);

    // State Update 2 - This will set the value of current value of count + 1
    setCount((prev) => {
      // Full body function declaration for extra 
      // ...

      // return value
      return prev + 1;
    });
    // setCount(prev => prev + 1) // <--- same thing but simplified 1 line

    /** State Update Difference in theory of how it works
     * 
     * State Update 1:
     * Start: count = 1
     *  setCount(count + 1);
     *  setCount(count + 1);
     *  setCount(count + 1);
     * Final result: count = 2
     * 
     * State Update 2:
     * Start: count = 1
     *  setCount(prev => prev + 1);
     *  setCount(prev => prev + 1);
     *  setCount(prev => prev + 1);
     * Final result: count = 4
     * 
     */

  };

  return (
    <button className={className} style={style} onClick={handleClick}>
      {/* children -> naming convention for getting the ReactNode tree 
        passed into the component */}
      {children}
    </button>
  );
};
