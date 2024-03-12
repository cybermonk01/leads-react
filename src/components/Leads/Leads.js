import "./Leads.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  getDocs,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
// import { list } from "firebase/storage";

const Leads = ({ id }) => {
  const [data, setData] = useState([]);

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

    const unsub = onSnapshot(
      collection(db, "ContactData"),

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
      unsub();
    };
  }, []);

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

    const docRef = doc(db, "ContactData", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  // console.log(data[0].data.number);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={{ pathname: `/leads/${params.row.id}` }}
              className="link"
              style={{ textDecoration: "none" }}
            >
              <div
                className="viewButton"
                // onClick={() => handleView(params.row.id)}
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
        Jameosons' Leads
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

export default Leads;
