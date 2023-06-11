import { ReportType, UserType } from "../data/types";

export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return `${formattedDate} ${formattedTime}`;
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function myAsyncFunction() {
  console.log("Calculating lifestyle score...");
  await delay(2000); // Delay of 2 seconds
  console.log("Almost finished calculating lifestyle score...");
  await delay(2000); // Delay of 2 seconds
  console.log("Finished calculating lifestyle score!");
}

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
  await myAsyncFunction();
  return report;
};
