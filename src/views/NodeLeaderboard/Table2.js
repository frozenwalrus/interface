import React from "react";
import Table from "rc-table";
import "./Table.css";

const data = [
  {
    rank: 1,      
    address: '0x69542011111111111111111xxx11111xxxxx1111',
    lastweek: 100,
    alltime: 101,
  },
  {
    rank: 2, 
    address: '0x69542011111111111111111xxx11111xxxxx1111',
    lastweek: 99,
    alltime: 450,
  },
  {
    rank: 3, 
    address: '0x69542011111111111111111xxx11111xxxxx1111', 
    lastweek: 98, 
    alltime: 2500,
},
  {
    rank: 4, 
    address: '0x69542011111111111111111xxx11111xxxxx1111', 
    lastweek: 55, 
    alltime: 55,
  },
  {
    rank: 5, 
    address: '0x69542011111111111111111xxx11111xxxxx1111', 
    lastweek: 10, 
    alltime: 11, 
  },
];
const columns = [
  { title: "Rank", dataIndex: "rank", fixed: true, width: "10%" },
  { title: "Wallet Address", dataIndex: "address", width: "45%" },
  { title: "Nodes Created", dataIndex: "lastweek", width: "35%"},
];

export default class TableDemo extends React.PureComponent {
  render() {
    return (
      <Table
        rowKey="id"
        tableLayout="auto"
        columns={columns}
        data={data}
        scroll={{ x: "750px", y: "520px" }}
        useFixedHeader={false}
        className="table"
      />
    );
  }
}
