import React from "react";

const FormSectionBottom = () => {
  return (
    <div className="row g-3">
      {/* //left section  ques*/}
      <div className="col-md-6">
        {/* rateQuality */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateQuality" className="form-label">
              Please rate the quality of the service you received from your
              host.
            </label>
            <div className="d-flex flex-wrap  flex-start justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateQuality"
                  id="excellent"
                />
                <label className="form-check-label" htmlFor="excellent">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateQuality"
                  id="good"
                />
                <label className="form-check-label" htmlFor="good">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateQuality"
                  id="fair"
                />
                <label className="form-check-label" htmlFor="fair">
                  Fair
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateQuality"
                  id="bad"
                />
                <label className="form-check-label" htmlFor="bad1">
                  Bad
                </label>
              </div>
            </div>
            <div>error will be here;</div>
          </div>
        </div>
        {/* resClean */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateQuality" className="form-label">
              Was our restaurant clean?
            </label>
            <div className="d-flex flex-wrap  flex-start justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateClean"
                  id="excellentClean"
                />
                <label className="form-check-label" htmlFor="excellentClean">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateClean"
                  id="goodClean"
                />
                <label className="form-check-label" htmlFor="goodClean">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateClean"
                  id="fairClean"
                />
                <label className="form-check-label" htmlFor="fairClean">
                  Fair
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateClean"
                  id="badClean"
                />
                <label className="form-check-label" htmlFor="badClean">
                  Bad
                </label>
              </div>
            </div>
            <div>error will be here;</div>
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
            <div className="d-flex flex-wrap  flex-start justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateBeverage"
                  id="excellentBeverage"
                />
                <label className="form-check-label" htmlFor="excellentBeverage">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateBeverage"
                  id="goodBeverage"
                />
                <label className="form-check-label" htmlFor="goodBeverage">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateBeverage"
                  id="fairBeverage"
                />
                <label className="form-check-label" htmlFor="fairBeverage">
                  Fair
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateBeverage"
                  id="badBeverage"
                />
                <label className="form-check-label" htmlFor="badBeverage">
                  Bad
                </label>
              </div>
            </div>
            <div>error will be here;</div>
          </div>
        </div>
        {/* resClean */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputRateQuality" className="form-label">
              Please rate your overall dining experience.
            </label>
            <div className="d-flex flex-wrap  flex-start justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateExp"
                  id="excellentExp"
                />
                <label className="form-check-label" htmlFor="excellentExp">
                  Excellent
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateExp"
                  id="goodExp"
                />
                <label className="form-check-label" htmlFor="goodExp">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateExp"
                  id="fairExp"
                />
                <label className="form-check-label" htmlFor="fairExp">
                  Fair
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rateExp"
                  id="badExp"
                />
                <label className="form-check-label" htmlFor="badExp">
                  Bad
                </label>
              </div>
            </div>
            <div>error will be here;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSectionBottom;
