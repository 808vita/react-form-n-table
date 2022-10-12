import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="d-flex flex-wrap flex-column align-items-center justify-content-center bg-white"
    >
      <div className="m-2">tick symbol</div>
      <h3>Thank you for providing the feedback</h3>
      <p className="h5 fw-normal mb-4">
        We will work towards improving your experience
      </p>
      <button
        onClick={() => navigate("/view-data")}
        className="btn btn-secondary "
        style={{
          background: "rgb(160, 30, 211)",
          padding: "0.5rem 2rem 0.5rem 2rem",
          fontSize: "0.7rem",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default ThankYouPage;
