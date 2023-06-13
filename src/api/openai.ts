/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { UserType } from "../data/types";

export const fetchAdvice = async (user: UserType): Promise<string> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `I am acting as a patient and I am giving you my health data for your analysis. Based on this data, please provide me with concise advice on how to improve my health and prolong my lifespan. Here is my data: \\n - Age: ${user.age} \\n - Gender: ${user.gender} \\n - Exercise Frequency: ${user.exerciseFrequency} \\n - Diet: ${user.diet} \\n - Smoking Habits: ${user.smokingHabits} \\n - Alcohol Consumption: ${user.alcoholConsumption} \\n - Average Sleep Hours per day: ${user.sleepHours} \\n - Current Stress Level: ${user.stressLevel} \\nBased on this information, could you provide some health advice?`,
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
