/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ReportType, UserType } from "../data/types";
import { initialUser } from "../utils/data";
import { calculateUserReport } from "../utils/helpers";
import DashBoard from "./Dashboard";
import Header from "../common/Header";
import Profile from "./Profile";
import { fetchAdvice } from "../api/openai";

const Home = () => {
  const [user, setUser] = useState<UserType>(initialUser);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOpenAI, setIsLoadingOpenAI] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data) as UserType);
    } else {
      setUser(initialUser);
    }
  }, []);

  const callOPenAI = async (user: UserType) => {
    setIsLoadingOpenAI(true);
    try {
      const advices = await fetchAdvice(user);
      localStorage.setItem("advices", JSON.stringify(advices));
      setIsLoadingOpenAI(false);
    } catch (e) {
      console.log(e);
      setIsLoadingOpenAI(false);
    }
  };

  const handleOnSave = async (updatedUser: UserType) => {
    setUser(updatedUser);
    if (updatedUser.id === 0) {
      localStorage.removeItem("user");
      localStorage.removeItem("advices");
    } else {
      setIsLoading(true);
      const report: ReportType = await calculateUserReport(updatedUser);
      updatedUser.reports.push(report);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsLoading(false);
      await callOPenAI(updatedUser);
    }
  };

  return (
    <div className="p-[24px] font-silka text-[18px]">
      <Header />
      <div className="flex justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <DashBoard
                user={user}
                isLoading={isLoading}
                isLoadingOpenAI={isLoadingOpenAI}
              />
            }
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
