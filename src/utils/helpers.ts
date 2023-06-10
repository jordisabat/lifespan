import { UserType } from "../data/userType";

export const isValidUser = (user: UserType): boolean => {
  if (!user || typeof user !== "object") {
    return false;
  }

  const {
    name,
    email,
    age,
    gender,
    exerciseFrequency,
    diet,
    smokingHabits,
    alcoholConsumption,
    sleepHours,
    stressLevel,
  } = user;

  if (
    !name ||
    !email ||
    !age ||
    !gender ||
    !exerciseFrequency ||
    !diet ||
    !smokingHabits ||
    !alcoholConsumption ||
    !sleepHours ||
    !stressLevel
  ) {
    return false;
  }

  return true;
};
