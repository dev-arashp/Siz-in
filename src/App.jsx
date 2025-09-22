import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./page/home/Home";
import FindJobs from "./page/navbar-pages/FindJobs";
import ExplorPage from "./page/explor-page/ExplorPage";
import ProfileUser from "./page/home/profile-user/ProfileUser";
import Moodboards from "./page/home/profile-user/Moodboards";
import Appreciations from "./page/home/profile-user/Appreciations";
import Overview from "./components/navbar/Overview";
import CreativeApprenticeship from "./components/navbar/CreativeApprenticeship";

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
        <Route path="/Moodboards" element={<Moodboards />} />
        <Route path="/Appreciations" element={<Appreciations />} />
        <Route path="/Overview" element={<Overview />} />
        <Route
          path="/CreativeApprenticeship"
          element={<CreativeApprenticeship />}
        />
      </Routes>
    </Router>
  );
}

export default App;
