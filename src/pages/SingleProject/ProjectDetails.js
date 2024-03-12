import React from "react";
import "./single.scss";
import Chart from "../../components/charts/Chart";
import List from "../../components/ProjectList/ProjectList";

const ProjectDetails = (userData) => {
  const users = Object.values(userData);
  console.log(users[0].phone);

  return (
    <>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Project Details</h1>
          <div className="item">
            <img src={users[0].img} alt="" className="itemImg" />

            <div className="details">
              <div className="detailItem">
                <span className="itemKey">Project ID:</span>
                <span className="itemValue">{users[0].projectId}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Project Name:</span>
                <span className="itemValue">{users[0].projectName}</span>
              </div>
              <h1 className="itemTitle">{users[0].user}</h1>
              <div className="detailItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">{users[0].email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Date:</span>
                <span className="itemValue">+91 {users[0].date}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Status:</span>
                <span className="itemValue">{users[0].status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
