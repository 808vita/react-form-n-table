const FormSectionTop = ({ errors, handleChange, formValues }) => {
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
              onChange={handleChange}
              value={formValues.customerName}
            />
            <div>{errors?.customerName && <p>{errors?.customerName}</p>}</div>
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
                  name="phone"
                  required
                  onChange={handleChange}
                  value={formValues.phone}
                />
              </div>
            </div>

            <div>{errors?.phone && <p>{errors?.phone}</p>}</div>
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
              onChange={handleChange}
              value={formValues.email}
            />
            <div>{errors?.email && <p>{errors?.email}</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSectionTop;
