import React from "react";

// Optional to use `type` but not linter friendly -> type ButtonProps = {...}
interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id: string
  handleClick?: Function
}

// Use `type` for this specific case
type ButtonComponent = React.FunctionComponent<ButtonProps>;

const Button: ButtonComponent = (props) => {
  // props
  const { style, className, children } = props;

  // states
  const [count, setCount] = React.useState<number>(0);

  // handlers
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("Button is clicked");
    // Update count
    setCount((prev) => prev + 1);

    props.handleClick?.();
  };

  // effects
  React.useEffect(() => {
    console.log(`[${props.id}]`)
    console.log("Effect on every render");
  });
  React.useEffect(() => {
    console.log("Effect on count updating, count = ", count);
  }, [count]);
  React.useEffect(() => {
    console.log("Effect on first render");
    console.log(
      "================================================================="
    );
  }, []);

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
  const [count, setCount] = React.useState<number>(0);

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

  /**
   * Effects - useEffect, useLayoutEffect, ...
   * function - accepts two parameters
   *  1. required - function
   *  2. optional - array of dependencies
   */

  /**
   * No dependencies passed
   */
  React.useEffect(() => {
    console.log("Effect on every render");
  });
  /**
   * 1 dependencies passed - count
   */
  React.useEffect(() => {
    console.log("Effect on count updating, count = ", count);
  }, [count]);
  /**
   * Empty dependencies passed
   */
  React.useEffect(() => {
    console.log("Effect on first render");
  }, []);

  return (
    <button className={className} style={style} onClick={handleClick}>
      {/* children -> naming convention for getting the ReactNode tree 
        passed into the component */}
      {children}
    </button>
  );
};
