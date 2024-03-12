import SingleEmployee from "../../pages/single/SingleEmployee";
import "../../pages/single/single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { getDatabase, ref, child, get } from "firebase/database";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useHistory, useParams, Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import SingleLead from "./SingleLead";

const LeadModal = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async (id) => {
      const docRef = doc(db, "ContactData", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(docSnap.data().data);
      } else {
        // doc.data() will be undefined in this case
        setUser({});
        console.log("No such document!");
      }
    };

    fetchData(id);
  }, [id]);

  console.log("users", user.data);
  const leadData = user;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <SingleLead userData={leadData} />
      </div>
    </div>
  );
};

export default LeadModal;
