import { Switch, Table } from "antd";
import React, { useState } from "react";
const columns = [
  {
    title: "Form Details",
    key: "operation",
    fixed: "left",
    width: 100,
    render: () => <p>view details</p>,
  },
  {
    title: "Customer Name",
    width: 150,
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    width: 200,
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 300,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 300,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 300,
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 300,
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    email: `oof@oof${i}.oof`,
    phone: `58${i}${i + 1}`,

    address: `London Park no. ${i}`,
  });
}
// need select check boxes handling states and column
const TableView = () => {
  const [fixedTop, setFixedTop] = useState(false);
  // row selection related stuff
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
      }}
      //scroll fixing code -- review delete later
      //   summary={() => (
      //     <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
      //       <Table.Summary.Row>
      //         <Table.Summary.Cell index={0} colSpan={2}>
      //           <Switch
      //             checkedChildren="Fixed Top"
      //             unCheckedChildren="Fixed Top"
      //             checked={fixedTop}
      //             onChange={() => {
      //               setFixedTop(!fixedTop);
      //             }}
      //           />
      //         </Table.Summary.Cell>
      //         <Table.Summary.Cell index={2} colSpan={8}>
      //           Scroll Context
      //         </Table.Summary.Cell>
      //         <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
      //       </Table.Summary.Row>
      //     </Table.Summary>
      //   )}
      sticky
    />
  );
};

export default TableView;
