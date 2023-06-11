import { UserType } from "../data/types";

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

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Validate age range
  if (age < 18 || age > 100) {
    return false;
  }

  // Validate sleep hours range
  if (sleepHours < 1 || sleepHours > 24) {
    return false;
  }

  return true;
};
