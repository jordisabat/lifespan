import { cleanup, fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vitest,
} from "vitest";
import Profile from "../../components/Profile";
import { UserType } from "../../data/types";

describe("Profile", () => {
  let onSaveMock: Mock;
  beforeEach(() => {
    onSaveMock = vitest.fn();
  });

  afterEach(() => {
    onSaveMock.mockReset();
    cleanup();
  });

  const initialUser: UserType = {
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

  const user: UserType = {
    id: 1,
    name: "John Doe",
    age: 25,
    email: "john@example.com",
    gender: "Other",
    exerciseFrequency: "Never",
    diet: "Other",
    smokingHabits: "Never",
    alcoholConsumption: "Never",
    sleepHours: 7,
    stressLevel: "Low",
    updatedAt: "2021-08-25T00:00:00.000Z",
    reports: [],
  };

  test("when data is correct it should save a valid user data", () => {
    const date = new Date("2021-08-25T00:00:00.000Z");

    vitest.useFakeTimers();
    vitest.setSystemTime(date);

    const screen = render(
      <MemoryRouter>
        <Profile user={initialUser} onSave={onSaveMock} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Full Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Age"), { target: { value: "25" } });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Sleep Hours"), {
      target: { value: 7 },
    });

    const buttonSave = screen.getByText("Save") as HTMLButtonElement;
    buttonSave.click();

    expect(onSaveMock).toHaveBeenCalledWith({
      id: 1,
      name: "John Doe",
      age: "25",
      email: "john@example.com",
      gender: "Other",
      exerciseFrequency: "Never",
      diet: "Other",
      smokingHabits: "Never",
      alcoholConsumption: "Never",
      sleepHours: "7",
      stressLevel: "Low",
      updatedAt: "2021-08-25T00:00:00.000Z",
      reports: [],
    });
  });

  test("when data is incorrect, it should display an error message", () => {
    const date = new Date("2021-08-25T00:00:00.000Z");

    vitest.useFakeTimers();
    vitest.setSystemTime(date);

    const screen = render(
      <MemoryRouter>
        <Profile user={initialUser} onSave={onSaveMock} />
      </MemoryRouter>
    );

    const buttonSave = screen.getByText("Save") as HTMLButtonElement;
    buttonSave.click();

    const errorMessage = screen.getByTestId("error-element");

    expect(errorMessage).toBeDefined();
  });

  test("when there is no user, is should render default data", () => {
    const screen = render(
      <MemoryRouter>
        <Profile user={initialUser} onSave={onSaveMock} />
      </MemoryRouter>
    );

    const name = screen.getByPlaceholderText("Name") as HTMLInputElement;
    const email = screen.getByPlaceholderText("email") as HTMLInputElement;
    const age = screen.getByPlaceholderText("Age") as HTMLInputElement;
    const gender = screen.getByTestId("gender-selector") as HTMLSelectElement;
    const exerciseFrequency = screen.getByTestId(
      "exerciseFrequency-selector"
    ) as HTMLSelectElement;
    const diet = screen.getByTestId("diet-selector") as HTMLSelectElement;
    const alcoholConsumption = screen.getByTestId(
      "alcoholConsumption-selector"
    ) as HTMLSelectElement;
    const smokingHabits = screen.getByTestId(
      "smokingHabits-selector"
    ) as HTMLSelectElement;
    const sleepHours = screen.getByPlaceholderText(
      "Sleep Hours"
    ) as HTMLInputElement;
    const stressLevel = screen.getByTestId(
      "stressLevel-selector"
    ) as HTMLInputElement;

    expect(name.value).toBe("");
    expect(email.value).toBe("");
    expect(age.value).toBe("0");
    expect(gender.value).toBe("Other");
    expect(exerciseFrequency.value).toBe("Never");
    expect(diet.value).toBe("Other");
    expect(alcoholConsumption.value).toBe("Never");
    expect(smokingHabits.value).toBe("Never");
    expect(sleepHours.value).toBe("0");
    expect(stressLevel.value).toBe("Low");
  });

  test("cleanUser should reset the user data to initial values", () => {
    const screen = render(
      <MemoryRouter>
        <Profile user={user} onSave={onSaveMock} />
      </MemoryRouter>
    );

    const buttonClean = screen.getByText("Delete Account") as HTMLButtonElement;
    buttonClean.click();

    expect(onSaveMock).toHaveBeenCalledWith(initialUser);
  });

  test("component should navigate to the correct route after successful save", () => {
    // Test implementation goes here
  });
});
