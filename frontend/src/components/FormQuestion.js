import React, { useState, useEffect } from "react";

const FormQuestion = ({ quesType, handleChange, errors }) => {
  const [trackCheckBox, setTrackCheckBox] = useState({
    Excellent: false,
    Good: false,
    Fair: false,
    Bad: false,
  });
  const [selected, setSeleted] = useState(null);

  const handleClick = (e) => {
    console.log(e.target);
    let allRest = {
      Excellent: false,
      Good: false,
      Fair: false,
      Bad: false,
    };

    allRest[e.target.name] = true;
    setTrackCheckBox(allRest);
    setSeleted(e.target.name);
  };

  useEffect(() => {
    if (!selected || !quesType || !handleChange) {
      return;
    }
    handleChange({ target: { name: quesType, value: selected } });
    console.log(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, quesType]);

  return (
    <>
      <div className="d-flex flex-wrap  flex-start justify-content-between">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="Excellent"
            onChange={handleClick}
            checked={trackCheckBox.Excellent}
          />
          <label className="form-check-label">Excellent</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="Good"
            onChange={handleClick}
            checked={trackCheckBox.Good}
          />
          <label className="form-check-label">Good</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="Fair"
            onChange={handleClick}
            checked={trackCheckBox.Fair}
          />
          <label className="form-check-label">Fair</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="Bad"
            onChange={handleClick}
            checked={trackCheckBox.Bad}
          />
          <label className="form-check-label">Bad</label>
        </div>
      </div>
      <div>
        {errors[quesType] && (
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
            {errors[quesType]}
          </p>
        )}
      </div>
    </>
  );
};

export default FormQuestion;
