// // import React, { useEffect, useState } from "react";
// // import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

// // import { db } from "../firebaseConfig";

// // const ImageDisplay = () => {
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     const Imageref = collection(db, "images");
// //     const q = query(Imageref, orderBy("createDate"));

// //     onSnapshot(q, (snapshot) => {
// //       const allImages = snapshot.docs.map((docs) => ({
// //         id: docs.id,
// //         ...docs.data(),
// //       }));

// //       setImages(allImages);
// //     });
// //   }, []);

// //   return (
// //     <div>
// //       {images.length === 0 ? (
// //         <p>No Images found!</p>
// //       ) : (
// //         images.map((image) => (
// //           <div className="image-container" key={image.id}>
// //             <img src={image.url} alt="" />
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default ImageDisplay;

// import { collection, onSnapshot } from "firebase/firestore";
// import { useState, useEffect } from "react";
// import { db } from "../firebaseConfig";

// const useFirestore = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const unsub = onSnapshot(collection(db, "images"), (snapShot) => {
//       let documents = [];
//       snapShot.docs.forEach((doc) => {
//         documents.push({ id: doc.id, ...doc.data() });
//       });
//       setData(documents);
//     });

//     // db
//     //   .collection("images")
//     //   .orderBy("createdAt", "desc")
//     //   .onSnapshot((snap) => {
//     //     let documents = [];
//     //     snap.forEach((doc) => {
//     //       documents.push({ ...doc.data(), id: doc.id });
//     //     });
//     //     setDocs(documents);
//     //   });

//     return () => unsub();
//     // this is a cleanup function that react will run when
//     // a component using the hook unmounts
//   }, [documents]);

//   return { data };
// };

// export default useFirestore;
