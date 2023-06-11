import { UserType } from "../data/types";

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

export const calculateLifestyleScore = async (
  user: UserType
): Promise<number> => {
  const min = +user.age - 5;
  const max = +user.age + 5;
  const randomValue = Math.random() * (max - min) + min;
  await myAsyncFunction();
  return parseFloat(randomValue.toFixed(1)); // Round to 2 decimal places
};
