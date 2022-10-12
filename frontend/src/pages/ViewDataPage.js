import TableView from "../components/TableView";

import useTable from "../hooks/useTable";

const ViewDataPage = () => {
  // const [tableData, setTableData] = useState([]);
  // useEffect(() => {
  //   async function dataIndex() {
  //     const RawData = await getFormData();
  //     setTableData(processData(RawData));
  //   }
  //   dataIndex();
  // }, []);

  const { tableData } = useTable();

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

      <TableView tableData={tableData} />
    </div>
  );
};

export default ViewDataPage;
