import React from "react";

type InputFieldProps = Partial<{
  label: string,
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}> & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function InputField(props: InputFieldProps) {

  const { label, placeholder, onChange = () => {}, ...restProps} = props;

  return (
    <div
      style={{
        width: "100%",
        margin: "8px 0px"
      }}
    >
      <h4
        style={{
          marginLeft: "2px",
          color: "black",
          fontSize: '18px'
        }}
      >
        {label ?? "Label"}
      </h4>
      <input
        {...restProps}
        onChange={onChange}
        placeholder={placeholder ?? "Input here"} 
        style={{
          borderRadius: "8px",
          color: "black",
          background: "whitesmoke",
          width: "100%",
          fontSize: '16px',
          padding: "8px 4px",

        }}
      />
    </div>
  );
}
