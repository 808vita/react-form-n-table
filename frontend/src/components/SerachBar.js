import { Input, Space } from "antd";
import React from "react";
const { Search } = Input;

const SerachBar = ({ setSearchTxt }) => {
  const onSearch = (value) => setSearchTxt(value);
  return (
    <Space direction="vertical">
      <Search
        placeholder="search email"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};
export default SerachBar;
