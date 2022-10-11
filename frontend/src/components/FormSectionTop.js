import React from "react";

const FormSectionTop = () => {
  return (
    <div className="row g-3">
      {/* //left section  */}
      <div className="col-md-6">
        {/* customerName */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputName" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="E.g. jon snow"
              name="customerName"
              required
            />
            <div>error will be here;</div>
          </div>
        </div>
        {/* phone */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputPhone" className="form-label">
              Phone
            </label>
            <div className="row g-1">
              <div className="col-md-2">
                <div>flag dropdown</div>
              </div>

              <div className="col-md-10">
                <input
                  type="number"
                  className="form-control"
                  placeholder="999999999"
                  name="phoneNumber"
                  required
                />
              </div>
            </div>

            <div>error will be here;</div>
          </div>
        </div>
      </div>
      {/* //right section  */}
      <div className="col-md-6">
        {/* email */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="E.g. abc@gmail.com"
              name="email"
              required
            />
            <div>error will be here;</div>
          </div>
        </div>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormSectionTop;
