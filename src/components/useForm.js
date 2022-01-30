import React, { useState, useEffect } from "react";

const useForm = (initialFieldValues,validate) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors,setErrors]= useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldValue={[name]:value}
    setValues({
      ...values,
      ...fieldValue,
    });
    
    validate()
  };

  return {
    values,
    errors,
    setErrors,
    setValues,
    handleInputChange,
  };
};

export default useForm;
