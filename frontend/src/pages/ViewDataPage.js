import TableView from "../components/TableView";

import useTable from "../hooks/useTable";

const ViewDataPage = () => {
  const { tableData, dataIndex } = useTable();

  return (
    <div>
      <TableView tableData={tableData} refreshData={dataIndex} />
    </div>
  );
};

export default ViewDataPage;
