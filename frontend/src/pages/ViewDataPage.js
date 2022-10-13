import { useState, useEffect } from "react";
import TableView from "../components/TableView";

import useTable from "../hooks/useTable";

const ViewDataPage = () => {
  const { tableData, dataIndex } = useTable();
  const [countRecords, setCountRecords] = useState(0);

  useEffect(() => {
    if (!tableData) {
      return;
    }

    setCountRecords(tableData.length);
  }, [tableData]);

  return (
    <div>
      <TableView
        tableData={tableData}
        refreshData={dataIndex}
        countRecords={countRecords}
      />
    </div>
  );
};

export default ViewDataPage;
