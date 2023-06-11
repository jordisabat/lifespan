import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../data/types";
import {
  initialUser,
  genderOptions,
  dietOptions,
  habitOptions,
  stressLevelOptions,
} from "../utils/data";
import { formatDateString as formatDateToString } from "../utils/helpers";
import { isValidUser } from "../utils/validators";

type ProfileProps = {
  user: UserType;
  onSave: (user: UserType) => void;
};

const Profile = (props: ProfileProps) => {
  const { user, onSave } = props;
  const [updatedUser, setUpdatedUser] = useState<UserType>(user);
  const navigate = useNavigate();

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleOnChange = (field: string, value: string | number) => {
    setUpdatedUser((prevUser: UserType) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidUser(updatedUser)) {
      updatedUser.id = 1;
      updatedUser.updatedAt = new Date().toISOString();
      onSave(updatedUser);
      navigate("/");
    } else {
      console.log("Please fill in all the fields before submitting the form.");
    }
  };
  return (
    <div>
      <h1>Profile</h1>
      {user !== null && (
        <div>
          Hello {user.name}, last Updated: {formatDateToString(user.updatedAt)}
        </div>
      )}

      <h1>Wizard form</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="string"
              id="name"
              name="name"
              placeholder="Name"
              value={updatedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={updatedUser.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="age"
              value={updatedUser.age}
              onChange={(e) => handleOnChange("age", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={updatedUser.gender}
              onChange={(e) => handleOnChange("gender", e.target.value)}
            >
              {genderOptions.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="exerciseFrequency">Exercise Frequency</label>
            <input
              type="text"
              id="exerciseFrequency"
              name="exerciseFrequency"
              placeholder="Exercise Frequency"
              value={updatedUser.exerciseFrequency}
              onChange={(e) =>
                handleOnChange("exerciseFrequency", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="diet">Diet</label>
            <select
              id="diet"
              name="diet"
              value={updatedUser.diet}
              onChange={(e) => handleOnChange("diet", e.target.value)}
            >
              {dietOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="smokingHabits">Smoking Habits</label>
            <select
              id="smokingHabits"
              name="smokingHabits"
              value={updatedUser.smokingHabits}
              onChange={(e) => handleOnChange("smokingHabits", e.target.value)}
            >
              {habitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="alcoholConsumption">Alcohol Consumption</label>
            <select
              id="alcoholConsumption"
              name="alcoholConsumption"
              value={updatedUser.alcoholConsumption}
              onChange={(e) =>
                handleOnChange("alcoholConsumption", e.target.value)
              }
            >
              {habitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sleepHours">Sleep Hours</label>
            <input
              type="number"
              id="sleepHours"
              name="sleepHours"
              placeholder="Sleep Hours"
              value={updatedUser.sleepHours}
              onChange={(e) => handleOnChange("sleepHours", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="stressLevel">Stress Level</label>
            <select
              id="stressLevel"
              name="stressLevel"
              value={updatedUser.stressLevel}
              onChange={(e) => handleOnChange("stressLevel", e.target.value)}
            >
              {stressLevelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row justify-around">
            <div>
              <button type="submit">Save</button>
            </div>
            <div>
              <button onClick={() => onSave(initialUser)}>Clean Data</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
