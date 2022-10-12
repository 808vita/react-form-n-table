import React from "react";
import FormQuestion from "./FormQuestion";

const FormSectionBottom = () => {
  return (
    <div className="row g-3">
      {/* //left section  ques*/}
      <div className="col-md-6">
        {/* rateQuality */}
        <div className="row g-3">
          {/* <FormQuestion /> */}
          <div className="col-md-12">
            <label htmlFor="inputRateQuality" className="form-label">
              Please rate the quality of the service you received from your
              host.
            </label>
            <FormQuestion />
          </div>
        </div>
        {/* resClean */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateQuality" className="form-label">
              Was our restaurant clean?
            </label>
            <FormQuestion />
          </div>
        </div>
      </div>
      {/* //right section  ques*/}
      <div className="col-md-6">
        {/* rateQuality */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateQuality" className="form-label">
              Please rate the quality of the beverage.
            </label>
            <FormQuestion />
          </div>
        </div>
        {/* resClean */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateQuality" className="form-label">
              Please rate your overall dining experience.
            </label>
            <FormQuestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSectionBottom;
