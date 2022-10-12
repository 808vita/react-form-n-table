import React from "react";
import FormQuestion from "./FormQuestion";

const FormSectionBottom = ({ errors, handleChange, formValues }) => {
  return (
    <div className="row g-3">
      {/* //left section  ques*/}
      <div className="col-md-6">
        {/* rateQuality */}
        <div className="row g-3">
          {/* <FormQuestion /> */}
          <div className="col-md-12">
            <label htmlFor="inputRateService" className="form-label">
              Please rate the quality of the service you received from your
              host.
            </label>
            <FormQuestion
              quesType={"rateService"}
              handleChange={handleChange}
              errors={errors}
            />
          </div>
        </div>
        {/* resClean */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateClean" className="form-label">
              Was our restaurant clean?
            </label>
            <FormQuestion
              quesType={"rateClean"}
              handleChange={handleChange}
              errors={errors}
            />
          </div>
        </div>
      </div>
      {/* //right section  ques*/}
      <div className="col-md-6">
        {/* rateQuality */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateBeverage" className="form-label">
              Please rate the quality of the beverage.
            </label>
            <FormQuestion
              quesType={"rateBeverage"}
              handleChange={handleChange}
              errors={errors}
            />
          </div>
        </div>
        {/* resClean */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateExp" className="form-label">
              Please rate your overall dining experience.
            </label>
            <FormQuestion
              quesType={"rateExp"}
              handleChange={handleChange}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSectionBottom;
