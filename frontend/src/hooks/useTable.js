import { useState, useEffect } from "react";
import { processData } from "../utils/processData";
import { getFormData } from "../utils/LoadData";

const useTable = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    async function dataIndex() {
      const RawData = await getFormData();
      setTableData(processData(RawData));
    }
    dataIndex();
  }, []);

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return { tableData };
};

export default useTable;
