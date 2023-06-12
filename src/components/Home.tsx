/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ReportType, UserType } from "../data/types";
import { initialUser } from "../utils/data";
import { calculateUserReport } from "../utils/helpers";
import DashBoard from "./Dashboard";
import Header from "../common/Header";
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
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // store user on cache
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data) as UserType);
    }
  }, []);

  return (
    <div className="p-[24px] font-silka text-[18px]">
      <Header />
      <div className="flex justify-center">
        <Routes>
          <Route
            path="/"
            element={<DashBoard user={user} isLoading={isLoading} />}
          />
          <Route
            path="/profile"
            element={<Profile user={user} onSave={handleOnSave} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
