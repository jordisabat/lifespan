import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, test } from "vitest";
import DashBoard from "../../components/Dashboard";
import { UserType } from "../../data/types";

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
  sleepHours: 7,
  stressLevel: "Low",
  updatedAt: "2021-08-25T00:00:00.000Z",
  reports: [
    {
      chronologicalAge: 23,
      biologicalAge: 25.2,
      bloodAge: 22.2,
      epigeneticAge: 19.9,
      microbiomeAge: 23.5,
      createdAt: "2023-06-12T12:50:04.220Z",
    },
  ],
};

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

afterEach(() => {
  cleanup();
});

test("renders the welcome message when user ID is 0", () => {
  const screen = render(
    <MemoryRouter>
      <DashBoard user={initialUser} isLoading={false} />
    </MemoryRouter>
  );

  const welcomeMessage = screen.getByText("Optimise your healthspan");
  expect(welcomeMessage).toBeDefined();
});

test("renders the loading indicator when isLoading is true", () => {
  render(<DashBoard user={user} isLoading={true} />);
  const loadingIndicator = screen.getByTestId("loading");
  expect(loadingIndicator).toBeDefined();
});

test("renders the dashboard with user data and widgets", () => {
  render(<DashBoard user={user} isLoading={false} />);
  const greatingsElement = screen.getByText("Hi John Doe");
  const chronoWidget = screen.getByText("Biomarkers");
  const habitsWidget = screen.getByText("Habits");
  const graphsWidget = screen.getByText("HealthSpan Estimations");

  expect(greatingsElement).toBeDefined();
  expect(chronoWidget).toBeDefined();
  expect(habitsWidget).toBeDefined();
  expect(graphsWidget).toBeDefined();
});
