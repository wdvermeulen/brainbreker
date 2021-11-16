import { useState } from "react";

export function useFormInput(defaultState) {
  const [value, setValue] = useState(defaultState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
}

export function useFormInputWithSet(defaultState) {
  const [value, setValue] = useState(defaultState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange, setValue };
}
