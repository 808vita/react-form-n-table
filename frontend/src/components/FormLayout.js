import React from "react";
import FormSectionBottom from "./FormSectionBottom";
import FormSectionTop from "./FormSectionTop";

const FormLayout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form
      className="bg-white pt-2 pb-2 needs-validation "
      onSubmit={handleSubmit}
    >
      <FormSectionTop />
      <FormSectionBottom />
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormLayout;
