import { useState } from 'react'

//CUSTOM HOOK QUE SE ENCARGA DE MANEJAR LOS FORMULARIOS
export const useFormFile = (initialState = {}) => {
  const [value, setValue] = useState(initialState)

  const reset = () => {
    setValue(initialState)
  }
  const handleInputChangeFile = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.files[0],
    })
  }

  return [value, handleInputChangeFile, reset]
}
