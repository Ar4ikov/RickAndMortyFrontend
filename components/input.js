import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ value, onChange, ...rest }, ref) => {
  return (
    <div className="flex">
      <input
        ref={ref}
        type="text"
        className=""
        {...rest}
      />
    </div>
  );
});
