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
    if (!selected) {
      return;
    }
    handleChange({ target: { name: quesType, value: selected } });
    console.log(selected);
  }, [selected, quesType, handleChange]);

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
      <div>{errors[quesType] && <p>{errors[quesType]}</p>}</div>
    </>
  );
};

export default FormQuestion;
