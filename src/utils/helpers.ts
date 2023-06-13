import { ReportType, UserType } from "../data/types";

export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", { timeZone: "CET" });
  const formattedTime = date.toLocaleTimeString("en-US", { timeZone: "CET" });
  if (formattedDate === "Invalid Date" || formattedTime === "Invalid Date") {
    return "Invalid Date";
  }

  return `${formattedDate} ${formattedTime}`;
};

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const calculateScore = (user: UserType): number => {
  const min = +user.age - 5;
  const max = +user.age + 5;
  const randomValue = Math.random() * (max - min) + min;

  return parseFloat(randomValue.toFixed(1)); // Round to 2 decimal places
};

export const calculateUserReport = async (
  user: UserType
): Promise<ReportType> => {
  const report = {
    chronologicalAge: user.age,
    biologicalAge: calculateScore(user),
    bloodAge: calculateScore(user),
    epigeneticAge: calculateScore(user),
    microbiomeAge: calculateScore(user),
    createdAt: new Date().toISOString(),
  };
  await delay(3000);
  return report;
};

export const getHabitValue = (habit: string): number => {
  switch (habit) {
    case "Never":
      return 5;
    case "Rarely":
      return 4;
    case "Sometimes":
      return 3;
    case "Often":
      return 2;
    case "Daily":
      return 1;
    default:
      return 0;
  }
};

export const getDietValue = (diet: string): number => {
  switch (diet) {
    case "Vegan":
      return 4;

    case "Vegetarian":
      return 3;

    case "Omnivore":
      return 2;

    case "Carnivore":
      return 1;

    case "Other":
      return 0;

    default:
      return 0;
  }
};

export const getStressLevelValue = (stressLevel: string): number => {
  switch (stressLevel) {
    case "Low":
      return 0;
    case "Medium":
      return 1;
    case "High":
      return 2;
    default:
      return 0;
  }
};

export const getExerciseFrequencyValue = (frequency: string): number => {
  switch (frequency) {
    case "Never":
      return 0;
    case "1 time per week":
      return 1;
    case "2 times per week":
      return 2;
    case "3 times per week":
      return 3;
    case "4 times per week":
      return 4;
    case "5 times per week":
      return 5;
    case "6 times per week":
      return 6;
    case "every day":
      return 7;
    default:
      return 0;
  }
};
