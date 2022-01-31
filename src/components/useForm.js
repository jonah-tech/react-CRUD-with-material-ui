import React, { useState, useEffect } from "react";

const useForm = (initialFieldValues,validate,setCurrentId) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors,setErrors]= useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldValue={[name]:value}
    setValues({
      ...values,
      ...fieldValue,
    });
    
    validate(fieldValue)
  };

  const restForm =()=>{
    setValues({
      ...initialFieldValues
    })
    setErrors({})
    setCurrentId(0)
  }

  return {
    values,
    errors,
    setErrors,
    setValues,
    handleInputChange,
    restForm
  };
};

export default useForm;
