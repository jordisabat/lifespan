import { expect, test } from "vitest";
import { UserType } from "../../data/types";
import { isValidUser } from "../../utils/validators";

test("should return false for an invalid user with invalid name", () => {
  const user: UserType = {
    id: 0,
    name: "",
    email: "john@example.com",
    age: 25,
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

  const result = isValidUser(user);

  expect(result).toBe(false);
});

test("should return false for an invalid user with invalid email format", () => {
  const user: UserType = {
    id: 0,
    name: "John Doe",
    email: "john@example", // Invalid email format
    age: 25,
    gender: "Other",
    exerciseFrequency: "Never",
    diet: "Other",
    smokingHabits: "Never",
    alcoholConsumption: "Never",
    sleepHours: 0, // Invalid sleep hours range
    stressLevel: "Low",
    updatedAt: "",
    reports: [],
  };

  const result = isValidUser(user);

  expect(result).toBe(false);
});

test("should return true for a valid user", () => {
  const user: UserType = {
    id: 0,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    gender: "Other",
    exerciseFrequency: "Never",
    diet: "Other",
    smokingHabits: "Never",
    alcoholConsumption: "Never",
    sleepHours: 7,
    stressLevel: "Low",
    updatedAt: "",
    reports: [],
  };

  const result = isValidUser(user);

  expect(result).toBe(true);
});

test("should return false for an invalid user with missing fields", () => {
  const user: UserType = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    gender: "Other",
    exerciseFrequency: "", // Missing field
    diet: "Other",
    smokingHabits: "Never",
    alcoholConsumption: "Never",
    sleepHours: 7,
    stressLevel: "Low",
    updatedAt: "",
    reports: [],
  };

  const result = isValidUser(user);

  expect(result).toBe(false);
});

test("should return false for an invalid user with invalid age", () => {
  const user: UserType = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 120, // Invalid age range
    gender: "Other",
    exerciseFrequency: "Never",
    diet: "Other",
    smokingHabits: "Never",
    alcoholConsumption: "Never",
    sleepHours: 7,
    stressLevel: "Low",
    updatedAt: "",
    reports: [],
  };

  const result = isValidUser(user);

  expect(result).toBe(false);
});

test("should return false for an invalid user with invalid sleep hours", () => {
  const user: UserType = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    gender: "Other",
    exerciseFrequency: "Never",
    diet: "Other",
    smokingHabits: "Never",
    alcoholConsumption: "Never",
    sleepHours: 0, // Invalid sleep hours range
    stressLevel: "Low",
    updatedAt: "",
    reports: [],
  };

  const result = isValidUser(user);

  expect(result).toBe(false);
});
