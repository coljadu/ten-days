import { Route, Routes } from "react-router";
import ProjectHome from "../components/ProjectHome";
import Project1 from "../components/Projects/Project1/Project1";
import Project2 from "../components/Projects/Project2/Project2";
import Project3 from "../components/Projects/Project3/Project3";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProjectHome />}></Route>
            <Route path="/project1" element={<Project1 />}></Route>
            <Route path="/project2" element={<Project2 />}></Route>
            <Route path="/project3" element={<Project3 />}></Route>
        </Routes>
    )

}

export default Router;