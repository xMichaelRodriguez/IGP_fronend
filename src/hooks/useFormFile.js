import { useState } from 'react';

// CUSTOM HOOK QUE SE ENCARGA DE MANEJAR LOS FORMULARIOS
const useFormFile = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const resetFile = () => {
    setValue(initialState);
  };
  const handleInputChangeFile = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.files[0],
    });
  };

  return [value, handleInputChangeFile, resetFile];
};
export default useFormFile;
