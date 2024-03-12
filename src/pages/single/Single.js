// import { collection, onSnapshot } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/navbar/Navbar";
// import Sidebar from "../../components/sidebar/Sidebar";

// import { useDetails } from "../../context/DetailsContext";
// import { db } from "../../firebaseConfig";
// import "./single.scss";
// import SingleEmployee from "./SingleEmployee";

// const Single = ({ datum }) => {
//   // console.log(email);
//   console.log(datum);
//   // console.log(datum.length);
//   // console.log(props);
//   // console.log(props.datum);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     //   const fetchData = async () => {
//     //     let list = [];
//     //     try {
//     //       const querySnapshot = await getDocs(collection(db, "users"));
//     //       querySnapshot.forEach((doc) => {
//     //         // doc.data() is never undefined for query doc snapshots
//     //         list.push({ id: doc.id, ...doc.data() });
//     //         console.log(doc.id, " => ", doc.data());
//     //       });
//     //       setData(list);
//     //     } catch (err) {
//     //       console.log(err);
//     //     }
//     //   };
//     //   fetchData();
//     // }, []);

//     const fetchData = onSnapshot(
//       collection(db, "users"),

//       (snapShot) => {
//         let list = [];
//         snapShot.docs.forEach((doc) => {
//           list.push({ id: doc.id, ...doc.data() });
//         });
//         setData(list);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );

//     return () => {
//       fetchData();
//     };
//   }, []);

//   // console.log(data.length);

//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         {/* <SingleEmployee
//           phone={props.phone}
//           displayName={props.displayName}
//           username={props.username}
//           address={props.address}
//           img={props.img}
//           email={props.email}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default Single;
import SingleEmployee from "./SingleEmployee";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { getDatabase, ref, child, get } from "firebase/database";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useHistory, useParams, Link } from "react-router-dom";
import { db } from "../../firebaseConfig";

const Single = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async (id) => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        setUser({});
        console.log("No such document!");
      }
    };

    fetchData(id);
  }, [id]);

  console.log("users", user);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <SingleEmployee userData={user} />
      </div>
    </div>
  );
};

export default Single;
