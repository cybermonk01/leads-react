import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import "./gallery.css";
import { motion } from "framer-motion";

import { db } from "../../firebaseConfig";
import useStorage from "../../hooks/useStorage";

const ImageDisplay = (file) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const Imageref = collection(db, "images");
    const q = query(Imageref, orderBy("createDate"));

    onSnapshot(q, (snapshot) => {
      const allImages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setImages(allImages);
    });
  }, []);

  // console.log("inagesssss", images);
  return (
    <div className="img-grid">
      {images.length === 0 ? (
        <p>No Images found!</p>
      ) : (
        images.map((image) => (
          <div className="img-wrap" key={image.id}>
            <img src={image.url} alt="" />
          </div>
        ))
      )}
    </div>
  );
};

export default ImageDisplay;

// import useFirestore from "../../hooks/useFirestore";
// import { motion } from "framer-motion";

// const ImageDisplay = ({ setSelectedImg }) => {
//   const { data } = useFirestore("images");

//   console.log(data);
//   return (
//     <div className="img-grid">
//       {data &&
//         data.map((doc) => (
//           <motion.div
//             className="img-wrap"
//             key={doc.id}
//             layout
//             whileHover={{ opacity: 1 }}
//             s
//             onClick={() => setSelectedImg(doc.url)}
//           >
//             <motion.img
//               src={doc.url}
//               alt="uploaded pic"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             />
//           </motion.div>
//         ))}
//     </div>
//   );
// };

// export default ImageDisplay;
