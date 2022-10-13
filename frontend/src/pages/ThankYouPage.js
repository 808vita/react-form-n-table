import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="d-flex flex-wrap flex-column align-items-center justify-content-center bg-white"
    >
      <div className="m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6rem"
          height="6rem"
          fill="rgba(72,164,76,255)"
          className="bi bi-check-circle-fill tick-shadow"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </div>
      <h3>Thank you for providing the feedback</h3>
      <p className="h5 fw-normal mb-4">
        We will work towards improving your experience
      </p>
      <button
        onClick={() => navigate("/view-data")}
        className="btn pe-5 px-5 pt-2 pb-2 text-light fs-6"
        style={{
          background: "rgba(136,112,201,255)",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default ThankYouPage;
