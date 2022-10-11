import React from "react";
import TableView from "../components/TableView";

const ViewDataPage = () => {
  return (
    <div>
      <div>
        <div>
          <h4>Aromatic bar</h4>
          112 records found , 3 filters applied
        </div>
        <div>
          search bard refresh
          <button>Add New</button>
        </div>
      </div>

      <TableView />
    </div>
  );
};

export default ViewDataPage;
