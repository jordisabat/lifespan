/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserType } from "../data/types";
import { initialUser } from "../utils/data";
import { calculateLifestyleScore } from "../utils/helpers";
import DashBoard from "./Dashboard";
import Header from "./Header";
import Profile from "./Profile";

const Home = () => {
  const [user, setUser] = useState<UserType>(initialUser);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = async (user: UserType) => {
    console.log("Saving user...", user);
    setIsLoading(true);
    if (user.id === 0) {
      setUser(user);
    } else {
      const value = await calculateLifestyleScore(user);
      user.lifestyleScore = value;
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
    <div className="font-silka p-[16px] text-[18px]">
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
