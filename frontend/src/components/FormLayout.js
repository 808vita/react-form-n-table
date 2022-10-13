import React from "react";
import useForm from "../hooks/useForm";
import FormSectionBottom from "./FormSectionBottom";
import FormSectionTop from "./FormSectionTop";

const FormLayout = () => {
  const { handleSubmit, errors, handleChange, formValues } = useForm();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="bg-white pt-2 pb-2 mb-3">
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
      </div>
      <div className="d-flex flex-row-reverse align-items-center">
        <div>
          <button
            type="submit"
            style={{ background: "rgba(72,164,76,255)" }}
            className="btn pe-4 px-4 pt-2 pb-2 text-light fs-6"
          >
            Submit Review
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormLayout;
