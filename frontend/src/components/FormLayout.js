import React from "react";
import FormSectionBottom from "./FormSectionBottom";
import FormSectionTop from "./FormSectionTop";

const FormLayout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.targer);
  };
  return (
    <form
      className="bg-white pt-2 pb-2 needs-validation "
      onSubmit={handleSubmit}
    >
      <FormSectionTop />
      <FormSectionBottom />
    </form>
  );
};

export default FormLayout;
