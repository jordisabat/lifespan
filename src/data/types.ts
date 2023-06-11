export type GenderType = "Male" | "Female" | "Other";

export type DietType =
  | "Vegan"
  | "Vegetarian"
  | "Omnivore"
  | "Carnivore"
  | "Other";

export type HabitType = "Never" | "Rarely" | "Sometimes" | "Often" | "Daily";

export type StressLevelType = "Low" | "Medium" | "High";

export type ExerciseFrequencyType =
  | "Never"
  | "1 time per week"
  | "2 times per week"
  | "3 times per week"
  | "4 times per week"
  | "5 times per week"
  | "6 times per week"
  | "every day";

export interface UserType {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: GenderType;
  exerciseFrequency: ExerciseFrequencyType;
  diet: DietType;
  smokingHabits: HabitType;
  alcoholConsumption: HabitType;
  sleepHours: number;
  stressLevel: StressLevelType;
  updatedAt: string;
  reports: ReportType[];
}

export interface ReportType {
  chronologicalAge: number;
  biologicalAge: number;

  bloodAge: number;
  epigeneticAge: number;
  microbiomeAge: number;
  createdAt: string;
}
