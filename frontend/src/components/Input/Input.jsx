import { useState, useEffect } from "react";
import { InputSpace, TextareaSpace } from "./InputStyled";

export function Input({
  type,
  placeholder,
  name,
  register,
  isInput = true,
  value: initialValue,
  disabled,
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  let inputProps = {
    type,
    placeholder,
    ...register(name),
    value,
    onChange: (e) => setValue(e.target.value),
    disabled,
  };

  return (
    <>
      {isInput ? (
        <InputSpace {...inputProps} />
      ) : (
        <TextareaSpace {...inputProps} />
      )}
    </>
  );
}