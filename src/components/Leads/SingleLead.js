import React from "react";
import "../../pages/single/single.scss";

const SingleLead = (userData) => {
  // console.log(users);
  const users = Object.values(userData);
  console.log("dsdjslk;d", users);

  return (
    <>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Leads</h1>
          <div className="item">
            <img
              src="https://pbs.twimg.com/profile_images/1566705871375462400/3z78UKC9_400x400.jpg"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">{users[0].name}</h1>
              <div className="detailItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">{users[0].email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+91 {users[0].number}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Subject:</span>
                <span className="itemValue">{users[0].subject}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Message:</span>
                <span className="itemValue">{users[0].message}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleLead;
