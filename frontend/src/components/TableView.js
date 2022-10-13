// import { Switch, Table } from "antd";
import { Table } from "antd";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { deleteFormData } from "../utils/LoadData";
import TableHeaderTop from "./TableHeaderTop";
import ViewDetailsModal from "./ViewDetailsModal";

// need select check boxes handling states and column
const TableView = ({ tableData, refreshData, countRecords }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    console.log("current selection: ", newSelectedRowKeys);
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

  const handleDelteBtn = (deleteItems, refreshData) => {
    deleteFormData(deleteItems, refreshData);
  };
  const columns = [
    {
      title: "Form Details",
      key: "operation",

      width: 125,
      render: (record) => <ViewDetailsModal record={record} />,
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
      filteredValue: [searchTxt],
      onFilter: (val, record) => {
        return record.email.includes(val);
      },
    },

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
  return (
    <>
      <TableHeaderTop
        countRecords={countRecords}
        refreshData={refreshData}
        setSearchTxt={setSearchTxt}
      />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        scroll={{
          x: 1500,
        }}
        sticky
      />
      <div className="d-flex flex-row-reverse align-items-center">
        <button
          onClick={() => handleDelteBtn(selectedRowKeys, refreshData)}
          className="btn btn-danger pe-4 px-4 pt-2 pb-2 text-light fs-6"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TableView;
