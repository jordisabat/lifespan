import { Route, Routes } from "react-router-dom";
import DashBoard from "./Dashboard";
import Header from "./Header";
import Profile from "./Profile";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Home;
