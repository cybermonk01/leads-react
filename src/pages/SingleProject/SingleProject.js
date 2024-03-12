import "../single/single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { getDatabase, ref, child, get } from "firebase/database";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useHistory, useParams, Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ProjectDetails from "./ProjectDetails";

const SingleProject = () => {
  const [project, setProject] = useState({});

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async (id) => {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setProject(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        setProject({});
        console.log("No such document!");
      }
    };

    fetchData(id);
  }, [id]);

  console.log("project", project);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {/* <SingleEmployee userData={user} /> */}
        <ProjectDetails userData={project} />
      </div>
    </div>
  );
};

export default SingleProject;
