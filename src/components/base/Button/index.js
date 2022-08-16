import React from "react";

const Button = ({ backgroundColor, border, children, ...props }) => {
  return (
    <button id={props.id} style={{ border: border, width: props.width, height: props.height, backgroundColor: backgroundColor, borderRadius: props.borderRadius, color: props.color }} {...props}>
      {children ? children : props.title}
    </button>
  );
};

export default Button;
