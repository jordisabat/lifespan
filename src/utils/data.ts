import {
  DietType,
  ExerciseFrequencyType,
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
  reports: [],
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

export const exerciseFrequencyOptions: ExerciseFrequencyType[] = [
  "Never",
  "1 time per week",
  "2 times per week",
  "3 times per week",
  "4 times per week",
  "5 times per week",
  "6 times per week",
  "every day",
];
