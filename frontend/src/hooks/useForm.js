import { useState, useEffect } from "react";

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

  const [errors, setErrors] = useState([]);

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
    setSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //  api call , set local storage & navigate
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
