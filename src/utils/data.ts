import {
  DietType,
  GenderType,
  HabitType,
  StressLevelType,
  UserType,
} from "../data/types";

export const initialUser: UserType = {
  id: 0,
  name: "",
  email: "",
  age: 0,
  gender: "Other",
  exerciseFrequency: "Never",
  diet: "Other",
  smokingHabits: "Never",
  alcoholConsumption: "Never",
  sleepHours: 0,
  stressLevel: "Low",
  updatedAt: "",
  lifestyleScore: 0,
};

export const genderOptions: GenderType[] = ["Male", "Female", "Other"];

export const dietOptions: DietType[] = [
  "Vegan",
  "Vegetarian",
  "Omnivore",
  "Carnivore",
  "Other",
];
export const habitOptions: HabitType[] = [
  "Never",
  "Rarely",
  "Sometimes",
  "Often",
  "Daily",
];
export const stressLevelOptions: StressLevelType[] = ["Low", "Medium", "High"];
