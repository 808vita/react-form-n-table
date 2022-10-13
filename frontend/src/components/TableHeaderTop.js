import React from "react";
import SerachBar from "./SerachBar";
import { useNavigate } from "react-router-dom";
const TableHeaderTop = ({ refreshData }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between">
      <div>
        <h4>Aromatic bar</h4>
        112 records found , 3 filters applied
      </div>
      <div className="d-flex flex-wrap align-items-center">
        <div>
          <SerachBar />
        </div>
        <div>
          <button
            onClick={refreshData}
            style={{ background: "none" }}
            className="border border-secondary text-secodary pt-1 pb-2 me-2 mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
          </button>
        </div>
        <button
          onClick={() => navigate("/")}
          style={{ background: "rgba(72,164,76,255)" }}
          className="btn pe-4 px-4 pt-2 pb-2 text-light fs-6"
        >
          Add New
        </button>
      </div>
    </div>
  );
};

export default TableHeaderTop;
