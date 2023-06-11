/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ReportType, UserType } from "../data/types";
import { initialUser } from "../utils/data";
import { calculateUserReport } from "../utils/helpers";
import DashBoard from "./Dashboard";
import Header from "./Header";
import Profile from "./Profile";

const Home = () => {
  const [user, setUser] = useState<UserType>(initialUser);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = async (user: UserType) => {
    setIsLoading(true);
    if (user.id === 0) {
      setUser(user);
    } else {
      const report: ReportType = await calculateUserReport(user);
      user.reports.push(report);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User saved!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data) as UserType);
    }
  }, []);

  return (
    <div className="p-[24px] font-silka text-[18px]">
      <Header />
      {isLoading ? (
        <div className="p-16">Loading...</div>
      ) : (
        <div className="flex justify-center">
          <Routes>
            <Route path="/" element={<DashBoard user={user} />} />
            <Route
              path="/profile"
              element={<Profile user={user} onSave={handleOnSave} />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Home;
