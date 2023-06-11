export type GenderType = "Male" | "Female" | "Other";

export type DietType =
  | "Vegan"
  | "Vegetarian"
  | "Omnivore"
  | "Carnivore"
  | "Other";

export type HabitType = "Never" | "Rarely" | "Sometimes" | "Often" | "Daily";

export type StressLevelType = "Low" | "Medium" | "High";

export interface UserType {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: GenderType;
  exerciseFrequency: HabitType;
  diet: DietType;
  smokingHabits: HabitType;
  alcoholConsumption: HabitType;
  sleepHours: number;
  stressLevel: StressLevelType;
  updatedAt: string;
  lifestyleScore: number;
}
