import React from "react";
import FormHeader from "../components/FormHeader";
import FormLayout from "../components/FormLayout";

const FeedbackPage = () => {
  return (
    <div>
      <div className="mt-3 bg-white">
        <FormHeader />
      </div>
      <div className="mt-3 bg-white" style={{ padding: "2rem" }}>
        <FormLayout />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;
