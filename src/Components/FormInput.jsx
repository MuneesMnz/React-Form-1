import React, { useState } from "react";
import "../App.css";

const FormInput = (props) => {
  const { handleChange, label, errorMessage, ...rest } = props;
  const [focus, setFocus] = useState(false);
  const handleFocus = (e) => {
    setFocus(true);
  };
  return (
    <div className="flex flex-col">
      <label className="labeltext">{label}</label>
      <input
        className="abc"
        onChange={handleChange}
        {...rest}
        onBlur={handleFocus}
        focused={focus.toString()}
        onFocus={()=>{
          rest.name==="cpass" && setFocus(true)
        }}
      />
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
