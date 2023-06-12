/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { UserType } from "../data/types";

export const fetchAdvice = async (user: UserType): Promise<string> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Act like a doctor. I will write down some of my health data and I would like that you give to me in a short way some advices how I can be more healthy and span my health time life.\n I have ${user.age} and I am a ${user.gender}. I exercise ${user.exerciseFrequency} and my diet mostly is ${user.diet}. I smoke ${user.smokingHabits}, I drink alcohol ${user.alcoholConsumption} and I use to sleep ${user.sleepHours} hours a day. I feel that my stress level right now is ${user.stressLevel}.\n. Can you provide me some advices?`,
          },
        ],
        max_tokens: 512,
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return data.choices[0].message.content;
  } catch (error) {
    // Handle the error
    console.log("error OpenAI");
    return error as string;
  }
};
