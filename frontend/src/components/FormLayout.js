import React from "react";

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
      <div className="row g-3">
        <div className="col-md-6">
          <div className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputName" className="form-label">
                Customer Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="E.g. jon snow"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="E.g. abc@gmail.com"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormLayout;
