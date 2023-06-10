import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserType } from "../data/userType";
import { initialUser } from "../utils/data";
import DashBoard from "./Dashboard";
import Header from "./Header";
import Profile from "./Profile";

const Home = () => {
  const [user, setUser] = useState<UserType>(initialUser);

  const handleOnSave = (user: UserType) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    alert("User saved!");
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data) as UserType);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard user={user} />} />
        <Route
          path="/profile"
          element={<Profile user={user} onSave={handleOnSave} />}
        />
      </Routes>
    </>
  );
};

export default Home;

// const initialUser: UserType = {
//   id: 1,
//   name: "John Doe",
//   email: "example@test.com",
//   age: 30,
//   gender: "",
//   exerciseFrequency: "1 or 2 times a week",
//   diet: "Balanced",
//   smokingHabits: "Never",
//   alcoholConsumption: "Never",
//   sleepHours: 8,
//   stressLevel: "Low",
//   createdAt: "2021-08-01T00:00:00.000Z",
//   updatedAt: "2021-08-01T00:00:00.000Z",
//   lifestyleScore: 0,
// };
