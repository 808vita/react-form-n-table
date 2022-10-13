import { useState, useEffect } from "react";
// import { processData } from "../utils/processData";
import { getFormData } from "../utils/LoadData";

const useTable = () => {
  const [tableData, setTableData] = useState([]);

  async function dataIndex() {
    const RawData = await getFormData();
    // setTableData(processData(RawData));
    setTableData(RawData);
  }

  useEffect(() => {
    dataIndex();
  }, []);

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return { tableData, dataIndex };
};

export default useTable;
