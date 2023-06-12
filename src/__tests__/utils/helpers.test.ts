import { describe, test, expect, beforeAll, afterAll, vitest } from "vitest";
import { UserType } from "../../data/types";
import { calculateUserReport, formatDateString } from "../../utils/helpers";

describe("formatDateString", () => {
  test("should format the date string correctly", () => {
    const dateString = "2022-01-01T10:30:00Z";
    const formattedString = formatDateString(dateString);
    expect(formattedString).toEqual("1/1/2022 11:30:00 AM");
  });

  test("should handle invalid date strings", () => {
    const dateString = "invalid-date-string";
    const formattedString = formatDateString(dateString);
    console.log(formattedString);
    expect(formattedString).toEqual("Invalid Date");
  });
});

describe("calculateUserReport", () => {
  const user: UserType = {
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

  test("should calculate the user report correctly", async () => {
    const fakeNow = new Date("2023-06-10T12:00:00Z");
    vitest.setSystemTime(fakeNow);

    const report = await calculateUserReport(user);

    expect(report.chronologicalAge).toEqual(user.age);
    expect(typeof report.biologicalAge).toBe("number");
    expect(typeof report.bloodAge).toBe("number");
    expect(typeof report.epigeneticAge).toBe("number");
    expect(typeof report.microbiomeAge).toBe("number");
    expect(report.createdAt).toBe("2023-06-10T12:00:00.000Z");
  }, 10000);
});
