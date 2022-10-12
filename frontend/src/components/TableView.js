import { Switch, Table } from "antd";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
const columns = [
  {
    title: "Form Details",
    key: "operation",
    fixed: "left",
    width: 150,
    render: () => <p>view details</p>,
  },

  {
    title: "Customer Name",
    width: 150,
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Email",
    width: 200,
    dataIndex: "email",
    key: "email",
  },
  // {
  //   title: "Code",
  //   dataIndex: "countryCode",
  //   key: "countryCode",
  //   width: 100,
  // },
  {
    title: "Country Code",
    key: "operation",

    width: 150,
    render: (text, record, index) => (
      <ReactCountryFlag
        countryCode={record.countryCode}
        svg
        style={{
          width: "2rem",
          height: "2rem",
        }}
        title={record.countryCode}
      />
    ),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 150,
  },
  {
    title:
      "Please rate the quality of the service you received from your host.",
    dataIndex: "rateService",
    key: "rateService",
    width: 300,
  },
  {
    title: "Please rate the quality of the beverage.",
    dataIndex: "rateBeverage",
    key: "rateBeverage",
    width: 300,
  },
  {
    title: "Was our restaurant clean?",
    dataIndex: "rateClean",
    key: "rateClean",
    width: 300,
  },

  {
    title: "Please rate your overall dining experience.",
    dataIndex: "rateExp",
    key: "rateExp",
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
    countryCode: "IN",
    rateBeverage: "Fair",
    rateClean: "Bad",
    rateExp: "Excellent",
    rateService: "Good",
  });
}
// need select check boxes handling states and column
const TableView = ({ tableData }) => {
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
      // dataSource={data}
      dataSource={tableData}
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
