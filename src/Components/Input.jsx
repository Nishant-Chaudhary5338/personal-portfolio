/** @format */

import { useField } from "formik";
import React from "react";

function Input({ children, id, name, type, ...rest }) {
  const [field, meta] = useField(name);
  return (
    <div>
      <label
        className="font-serif text-xl font-semibold text-gray-700"
        htmlFor={id}
      >
        {children}
      </label>
      <input
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        type={type || "text"}
        name={name}
        id={id}
        {...rest}
        className="w-full py-4 border-b-4 focus:outline-none"
      />
      {meta.touched && meta.error && (
        <span className="text-sm text-red-500 ">{meta.error}</span>
      )}
    </div>
  );
}

export default Input;
