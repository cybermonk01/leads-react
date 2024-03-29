export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "name",
    width: 160,
    renderCell: (params) => {
      console.log(params.row.data.number);
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status} */}
          {params.row.data.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
    renderCell: (params) => {
      console.log(params.row.data.number);
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status} */}
          {params.row.data.email}
        </div>
      );
    },
  },

  {
    field: "message",
    headerName: "message",
    width: 230,
    height: 500,
    renderCell: (params) => {
      console.log(params.row.data.number);
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status} */}
          {params.row.data.message}
        </div>
      );
    },
  },
  {
    field: "number",
    headerName: "number",
    width: 160,
    renderCell: (params) => {
      console.log(params.row.data.number);
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status} */}
          {params.row.data.number}
        </div>
      );
    },
  },
  {
    field: "subject",
    headerName: "subject",
    width: 160,
    renderCell: (params) => {
      console.log(params.row.data.number);
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status} */}
          {params.row.data.subject}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Nausheen Hasan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: "how can I know",
  },
  {
    id: 2,
    username: "Jaya Srivastava",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "active",
    age: "will not tell",
  },
  {
    id: 3,
    username: "Harsh Verma",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "active",
    age: "hoga kuch",
  },
  {
    id: 4,
    username: "Najeeb ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Chitranshu Srivastava",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "active",
    age: 28,
  },
  {
    id: 6,
    username: "Sparsh Srivastava",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 22,
  },
  {
    id: 7,
    username: "Ashutosh Singh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "active",
    age: 22,
  },
  {
    id: 8,
    username: "Tammanna",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: "nahi batayenge",
  },
  {
    id: 9,
    username: "Anurag",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
  {
    id: 10,
    username: "Arun",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
