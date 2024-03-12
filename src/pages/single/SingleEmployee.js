import React from "react";
import "./single.scss";
import Chart from "../../components/charts/Chart";
import List from "../../components/ProjectList/ProjectList";

const SingleEmployee = (userData) => {
  // console.log(users);
  const users = Object.values(userData);
  console.log(users[0].phone);

  return (
    <>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src={users[0].img} alt="" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">{users[0].displayName}</h1>
              <div className="detailItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">{users[0].email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+91 {users[0].phone}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">{users[0].address}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="Performance last 6 months" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">All Employees</h1>
        <List />
      </div>
    </>
  );
};

export default SingleEmployee;
