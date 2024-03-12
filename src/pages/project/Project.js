import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProjectList from "../../components/ProjectList/ProjectList";
import "../list/list.scss";

const Project = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ProjectList />
      </div>
    </div>
  );
};

export default Project;
