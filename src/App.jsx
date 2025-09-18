import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./page/home/Home";
import FindJobs from "./page/navbar-pages/FindJobs";
import ExplorPage from "./page/explor-page/ExplorPage";
import ProfileUser from "./page/home/profile-user/ProfileUser";
import ProfileUsers from "./page/home/profile-user/Moodboards";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindJobs" element={<FindJobs />} />
        <Route path="/ExplorPage/:id" element={<ExplorPage />} />
        <Route path="/ProfileUser/:id" element={<ProfileUser />} />
        <Route path="/ProfileUser" element={<ProfileUser />} />
        <Route path="/Moodboards" element={<ProfileUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
