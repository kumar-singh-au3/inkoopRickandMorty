import React from "react";

import { Table } from "react-bootstrap";
 
const TableData = ({ data }) => {
  const TableBody = () => {
    return data.length ? (
      data.map(x => {
        return (
          <tr key={x.episode}>
            <td>{x.episode}</td>
            <td>{x.name}</td>
            <td>{x.air_date}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="3">No Match Found</td>
      </tr>
    );
  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
