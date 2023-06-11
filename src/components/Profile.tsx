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
import { isValidUser } from "../utils/validators";

type ProfileProps = {
  user: UserType;
  onSave: (user: UserType) => void;
};

const Profile = (props: ProfileProps) => {
  const { user, onSave } = props;
  const [updatedUser, setUpdatedUser] = useState<UserType>(user);
  const [error, setError] = useState("");
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
      setError(
        "Please fill in all the fields before submitting the form. Email should be valid. Age should be between 18 and 100. Sleep hours should be between 0 and 24."
      );
    }
  };

  const cleanUser = () => {
    setUpdatedUser(initialUser);
    onSave(initialUser);
    navigate("/");
  };

  return (
    <div className="">
      {user.id === 0 ? (
        <div className="pb-[32px] text-[32px]">Start Your Journey</div>
      ) : (
        <div className="flex flex-row justify-between pb-[30px] text-[32px]">
          <div className="flex flex-row">
            <div>Hello </div>
            <div className="pl-[8px] font-bold"> {user.name} </div>
          </div>
          <div>
            <button onClick={() => cleanUser()}>
              <img src="assets/trash.svg" alt="trash" className="h-[32px]" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              value={updatedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={updatedUser.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="age"
            >
              Age
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              type="number"
              id="age"
              name="age"
              placeholder="age"
              value={updatedUser.age}
              onChange={(e) => handleOnChange("age", e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="gender"
            >
              Gender
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
        </div>
        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="exerciseFrequency"
            >
              Exercise Frequency
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
        </div>
        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="diet"
            >
              Diet
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="diet"
              name="diet"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
        </div>
        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="smokingHabits"
            >
              Smoking Habits
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="smokingHabits"
              name="smokingHabits"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
        </div>
        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="alcoholConsumption"
            >
              Alcohol Consumption
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="alcoholConsumption"
              name="alcoholConsumption"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
        </div>
        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="sleepHours"
            >
              Sleep Hours
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              id="sleepHours"
              type="number"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              name="sleepHours"
              placeholder="Sleep Hours"
              value={updatedUser.sleepHours}
              onChange={(e) => handleOnChange("sleepHours", e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:w-[600px] md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="stressLevel"
            >
              Stress Level
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="stressLevel"
              name="stressLevel"
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
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
        </div>
        <div className="mb-6 md:flex md:w-[600px]">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <div className="text-red-500">{error}</div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <button
            className="inline-flex flex-row flex-nowrap items-center rounded-full border-2 border-black bg-black px-[24px] py-[8px] text-[16px] text-white hover:border-black hover:bg-white hover:text-black"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
