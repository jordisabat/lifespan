import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../data/types";
import {
  initialUser,
  genderOptions,
  dietOptions,
  habitOptions,
  stressLevelOptions,
  exerciseFrequencyOptions,
} from "../utils/data";
import { isValidUser } from "../utils/validators";
import Greatings from "../common/Greetings";
import InputField from "./form/InputField";
import SelectorField from "./form/SelectorField";
import ActionButtons from "./form/ActionButtons";

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

  const handleOnChange = (field: string, value: string) => {
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    <div className="p-[16px] lg:w-[1000px]">
      {user.id === 0 ? (
        <div className="pb-[32px] text-[32px]">Start Your Journey</div>
      ) : (
        <div className="flex flex-row  pb-[30px] text-[32px]">
          <Greatings user={user} />
        </div>
      )}

      <form onSubmit={onHandleSubmit}>
        <InputField
          label="Full Name"
          name="name"
          placeholder="Name"
          type="text"
          value={updatedUser.name}
          onChange={(e) => handleOnChange("name", e.target.value)}
        />
        <InputField
          label="Age"
          name="age"
          type="number"
          placeholder="age"
          value={updatedUser.age}
          onChange={(e) => handleOnChange("age", e.target.value)}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="email"
          value={updatedUser.email}
          onChange={(e) => handleOnChange("email", e.target.value)}
        />
        <SelectorField
          label="Gender"
          name="gender"
          value={updatedUser.gender}
          options={genderOptions}
          onChange={(e) => handleOnChange("gender", e)}
        />
        <SelectorField
          label="Exercise Frequency"
          name="exerciseFrequency"
          options={exerciseFrequencyOptions}
          value={updatedUser.exerciseFrequency}
          onChange={(e) => handleOnChange("exerciseFrequency", e)}
        />
        <SelectorField
          label="Diet"
          name="diet"
          options={dietOptions}
          value={updatedUser.diet}
          onChange={(e) => handleOnChange("diet", e)}
        />
        <SelectorField
          label="Smoking Habits"
          name="smokingHabits"
          options={habitOptions}
          value={updatedUser.smokingHabits}
          onChange={(value) => handleOnChange("smokingHabits", value)}
        />
        <SelectorField
          label="Alcohol Consumption"
          name="alcoholConsumption"
          options={habitOptions}
          value={updatedUser.alcoholConsumption}
          onChange={(value) => handleOnChange("alcoholConsumption", value)}
        />
        <InputField
          label="Sleep Hours"
          name="sleepHours"
          type="number"
          placeholder="Sleep Hours"
          value={updatedUser.sleepHours}
          onChange={(e) => handleOnChange("sleepHours", e.target.value)}
        />
        <SelectorField
          label="Stress Level"
          name="stressLevel"
          options={stressLevelOptions}
          value={updatedUser.stressLevel}
          onChange={(value) => handleOnChange("stressLevel", value)}
        />

        {error && (
          <div className="mb-6 md:flex md:w-[600px]">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <div className="text-red-500">{error}</div>
            </div>
          </div>
        )}

        <ActionButtons cleanUser={cleanUser} />
      </form>
    </div>
  );
};

export default Profile;
