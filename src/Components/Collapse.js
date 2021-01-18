import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Base from "../core/Base";
// import "../styles.css";

const Collapsible = ({ children }) => {
  const [values, setValues] = useState({
    collapsed: true,
    displayclass: "d-none",
  });
  const { collapsed, displayclass } = values;
  const CollapseExpand = async (e) => {
    setValues({ ...values, collapsed: false });
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 5000)
      });
    console.log("collpsed " + collapsed);
    console.dir(values);
    const status = !collapsed;
    const cls = status ? "d-none" : "d-block";
    setValues({
      ...values,
      collapsed: status,
      displayclass: cls,
    });
    console.log("collpsed " + collapsed);
  };
  return (
    <div className="col-12">
      <div className="col-12 bg-danger p-0">
        <span className="text-white">{JSON.stringify(values)}</span>
        <br />
        <span className="icon fa-plus-square" onClick={CollapseExpand}>click me</span>
        Hello
      </div>
      <ul className={"nav " + displayclass}>{children}</ul>
    </div>
  );
};

const Dropdown = () => {
  return (
    <div className="row border border-success">
      <Collapsible>
        <li className="nav-item text-white border-bottom">List Item</li>
        <li className="nav-item text-white border-bottom">List Item</li>
        <li className="nav-item text-white border-bottom">List Item</li>
      </Collapsible>
      <div className="col-12">
        <div className="col-12 bg-danger p-0">
          <span className="icon fa-plus-square"></span>
          Hello
        </div>
        <ul className="nav d-block">
          <li className="nav-item text-white border-bottom">List Item</li>
          <li className="nav-item text-white border-bottom">List Item</li>
          <li className="nav-item text-white border-bottom">List Item</li>
        </ul>
      </div>
      <div className="col-12">
        <div className="col-12 bg-danger p-0">
          <span className="icon fa-plus-square"></span>
          Hello
        </div>
        <ul className="nav d-block">
          <li className="nav-item text-white border-bottom">List Item</li>
          <li className="nav-item text-white border-bottom">List Item</li>
          <li className="nav-item text-white border-bottom">List Item</li>
        </ul>
      </div>
      <div className="col-12">
        <div className="col-12 bg-danger p-0">
          <span className="icon fa-plus-square"></span>
          Hello
        </div>
        <ul className="nav d-block">
          <li className="nav-item text-white border-bottom">List Item</li>
          <li className="nav-item text-white border-bottom">List Item</li>
          <li className="nav-item text-white border-bottom">List Item</li>
        </ul>
      </div>
    </div>
  );
};
const AdminDashBoard = () => {
  return (
      <div className="container border col-sm-3 float-left p-0">
        <Dropdown />
      </div>
  );
};

export default AdminDashBoard;