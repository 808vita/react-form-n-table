import { useState, useEffect } from "react";
import validateInfo from "../utils/FormValidate";

const useForm = () => {
  const [formValues, setFormValues] = useState({
    customerName: "",
    countryCode: "",
    phone: "",
    email: "",
    rateService: "",
    rateClean: "",
    rateBeverage: "",
    rateExp: "",
  });

  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // set errors if validations fails setErrors(validate(values));
    setErrors(validateInfo(formValues));
    setSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      //  api call , set local storage & navigate
    }
  }, [errors, submitting]);

  useEffect(() => {
    console.log(errors);
    console.log(formValues);
  }, [formValues, errors]);

  return { handleChange, handleSubmit, formValues, errors };
};

export default useForm;
