import CountrySelector from "./CountrySelector";
const FormSectionTop = ({ errors, handleChange, formValues }) => {
  return (
    <div className="row g-5">
      {/* //left section  */}
      <div className="col-md-6 mb-3">
        {/* customerName */}
        <div className="row g-3">
          <div className="col-md-12 mb-3">
            <label htmlFor="inputName" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="E.g. jon snow"
              name="customerName"
              required
              onChange={handleChange}
              value={formValues.customerName}
            />
            <div>
              {errors?.customerName && (
                <p
                  className="mt-3 p-2 border border-danger  d-flex flex-wrap align-items-center "
                  style={{
                    background: "rgb(251,228,229)",
                    color: "rgba(227,96,109,255)",
                    fontWeight: "bolder",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-info-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  {errors?.customerName}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* phone */}
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputPhone" className="form-label">
              Phone
            </label>
            <div className="row g-3">
              <div className="col-md-2">
                <div>
                  <CountrySelector handleChange={handleChange} />
                </div>
              </div>

              <div className="col-md-10">
                <input
                  type="number"
                  className="form-control"
                  placeholder="999999999"
                  name="phone"
                  required
                  onChange={handleChange}
                  value={formValues.phone}
                />
              </div>
            </div>

            <div>
              {errors?.phone && (
                <p
                  className="mt-3 p-2 border border-danger  d-flex flex-wrap align-items-center "
                  style={{
                    background: "rgb(251,228,229)",
                    color: "rgba(227,96,109,255)",
                    fontWeight: "bolder",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-info-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  {errors?.phone}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* //right section  */}
      <div className="col-md-6">
        {/* email */}
        <div className="row g-3">
          <div className="col-md-12 mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="E.g. abc@gmail.com"
              name="email"
              required
              onChange={handleChange}
              value={formValues.email}
            />
            <div>
              {errors?.email && (
                <p
                  className="mt-3 p-2 border border-danger  d-flex flex-wrap align-items-center "
                  style={{
                    background: "rgb(251,228,229)",
                    color: "rgba(227,96,109,255)",
                    fontWeight: "bolder",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-info-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  {errors?.email}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSectionTop;
