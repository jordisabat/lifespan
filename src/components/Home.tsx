import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserType } from "../data/types";
import { initialUser } from "../utils/data";
import DashBoard from "./Dashboard";
import Header from "./Header";
import Profile from "./Profile";

const Home = () => {
  const [user, setUser] = useState<UserType>(initialUser);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = (user: UserType) => {
    if (user.id > 0) {
      setIsLoading(true);
      // const value = await calculateLifestyleScore(user);
      user.lifestyleScore = 26.7;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User saved!");

      setIsLoading(false);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data) as UserType);
    }
  }, []);

  return (
    <div className="font-silka text-[18px]">
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<DashBoard user={user} />} />
          <Route
            path="/profile"
            element={<Profile user={user} onSave={handleOnSave} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default Home;
