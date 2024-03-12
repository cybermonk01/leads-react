import React, { useContext } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import { userInputs } from "./formSource";
import { projectInputs } from "./formSourceProject";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import DetailsContextProvider from "./context/DetailsContext";
import AddBlog from "./components/AddBlog";
import BlogDisplay from "./components/BlogDisplay";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import UploadFile from "./pages/Gallery/UploadFile";
import ListTable from "./pages/ListTable/ListTable";
import ProjectList from "./pages/project/Project";
import LeadModal from "./components/Leads/LeadModal";
import NewProject from "./pages/NewProject/NewProject";
import Project from "./pages/project/Project";
import SingleProject from "./pages/SingleProject/SingleProject";
import Gallery from "./pages/Gallery/Gallery";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);
  return (
    <DetailsContextProvider>
      <AuthContextProvider>
        <div className={darkMode ? "app dark" : "app"}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Home />} />
                {/* <Route path="leads" element={<Contact />} /> */}
                <Route
                  index
                  element={
                    <RequireAuth>
                      <Home />
                    </RequireAuth>
                  }
                />
                {/* <Route path="blog" element={<BlogDisplay />} /> */}
                <Route
                  path="blogs"
                  element={
                    <div className="blogs">
                      {" "}
                      <BlogDisplay />
                      <AddBlog />
                    </div>
                  }
                />
              </Route>
              //gallery route
              <Route path="gallery" element={<UploadFile />} />
              {/* <Route path="gallery" element={<Gallery />} /> */}
              <Route path="leads" element={<ListTable />} />
              <Route path="leads/:id" element={<LeadModal />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":id" element={<Single id="id" />} />
                console.log(id)
                <Route
                  path="new"
                  element={
                    <New inputs={userInputs} title="Add New Employees" />
                  }
                />
              </Route>
              <Route path="projects">
                <Route index element={<Project />} />
                <Route path=":id" element={<SingleProject id="id" />} />
                <Route
                  path="new"
                  element={
                    <NewProject
                      inputs={projectInputs}
                      title="Add New Projects"
                    />
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </AuthContextProvider>
    </DetailsContextProvider>
  );
};

export default App;
