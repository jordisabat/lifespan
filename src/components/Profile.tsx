import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../data/userType";
import { initialUser } from "../utils/data";
import { isValidUser } from "../utils/helpers";

type ProfileProps = {
  user: UserType;
  onSave: (user: UserType) => void;
};

const Profile = (props: ProfileProps) => {
  const { user, onSave } = props;
  const [updatedUser, setUpdatedUser] = useState<UserType>(user);

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleOnChange = (field: string, value: string | number) => {
    setUpdatedUser((prevUser: UserType) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidUser(updatedUser)) {
      onSave(updatedUser);
      navigate("/");
    } else {
      alert("Please fill in all the fields before submitting the form.");
    }
  };
  return (
    <div>
      <h1>Profile</h1>
      {user !== null && <div>Hello {user.name}</div>}
      <div className="flex flex-col">
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
              <input
                type="text"
                id="gender"
                name="gender"
                placeholder="Gender"
                value={updatedUser.gender}
                onChange={(e) => handleOnChange("gender", e.target.value)}
              />
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
              <input
                type="text"
                id="diet"
                name="diet"
                placeholder="diet"
                value={updatedUser.diet}
                onChange={(e) => handleOnChange("diet", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="smokingHabits">Smoking Habits</label>
              <input
                type="text"
                id="smokingHabits"
                name="smokingHabits"
                placeholder="Smoking Habits"
                value={updatedUser.smokingHabits}
                onChange={(e) =>
                  handleOnChange("smokingHabits", e.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="alcoholConsumption">Alcohol Consumption</label>
              <input
                type="text"
                id="alcoholConsumption"
                name="alcoholConsumption"
                placeholder="Alcohol Consumption"
                value={updatedUser.alcoholConsumption}
                onChange={(e) =>
                  handleOnChange("alcoholConsumption", e.target.value)
                }
              />
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
              <input
                type="text"
                id="stressLevel"
                name="stressLevel"
                placeholder="Stress Level"
                value={updatedUser.stressLevel}
                onChange={(e) => handleOnChange("stressLevel", e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button onClick={() => onSave(initialUser)}>Clean Data</button>
      </div>
    </div>
  );
};

export default Profile;
