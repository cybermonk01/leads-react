import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { list } from "firebase/storage";
import Single from "../../pages/single/Single";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [singleDoc, setSingleDoc] = useState([]);

  useEffect(() => {
    //   const fetchData = async () => {
    //     let list = [];
    //     try {
    //       const querySnapshot = await getDocs(collection(db, "users"));
    //       querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         list.push({ id: doc.id, ...doc.data() });
    //         console.log(doc.id, " => ", doc.data());
    //       });
    //       setData(list);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   fetchData();
    // }, []);

    const fetchData = onSnapshot(
      collection(db, "users"),

      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (err) => {
        console.log(err);
      }
    );

    return () => {
      fetchData();
    };
  }, []);

  console.log(data);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleView = async (id) => {
    // db.child(`users/${id}`)
    //   .get()
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       setSingleDoc(...snapshot.val());
    //     } else {
    //       setSingleDoc({});
    //     }
    //   });
    // console.log(singleDoc);

    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      console.log("Document data:", docSnap.data());

      console.log(userData);
      console.log(userData.email);
      <Single datum={userData.email} />;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="cellAction">
            <Link
              to={{ pathname: `/users/${params.row.id}` }}
              className="link"
              style={{ textDecoration: "none" }}
            >
              <div
                className="viewButton"
                onClick={() => handleView(params.row.id)}
              >
                View
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
