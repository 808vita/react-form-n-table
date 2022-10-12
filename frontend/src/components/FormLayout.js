import React from "react";
import useForm from "../hooks/useForm";
import FormSectionBottom from "./FormSectionBottom";
import FormSectionTop from "./FormSectionTop";

const FormLayout = () => {
  const { handleSubmit, errors, handleChange, formValues } = useForm();

  return (
    <form className="bg-white pt-2 pb-2 " onSubmit={handleSubmit} noValidate>
      <FormSectionTop
        errors={errors}
        handleChange={handleChange}
        formValues={formValues}
      />
      <FormSectionBottom
        errors={errors}
        handleChange={handleChange}
        formValues={formValues}
      />
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormLayout;
