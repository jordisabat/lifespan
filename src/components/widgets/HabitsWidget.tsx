import { UserType } from "../../data/types";
import {
  getDietValue,
  getExerciseFrequencyValue,
  getHabitValue,
  getStressLevelValue,
} from "../../utils/helpers";
import ProgressWidget from "./ProgressWidget";

const HabitsWidget = (props: { user: UserType }) => {
  const { user } = props;
  return (
    <div>
      <div className="flex flex-col items-center pb-[32px] text-[24px] font-semibold">
        Habits
      </div>
      <div className="flex flex-wrap justify-center pb-32">
        <div className="flex flex-col md:flex-row">
          <ProgressWidget value={user.sleepHours} max={10} label="Sleep" />
          <ProgressWidget
            value={getExerciseFrequencyValue(user.exerciseFrequency)}
            max={7}
            label="Exercise Frequency"
          />
          <ProgressWidget
            value={getHabitValue(user.smokingHabits)}
            max={6}
            label="Smoking Habits"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <ProgressWidget
            value={getHabitValue(user.alcoholConsumption)}
            max={6}
            label="Alcohol Consumption"
          />
          <ProgressWidget
            value={getDietValue(user.diet)}
            max={5}
            label="Diet"
          />
          <ProgressWidget
            value={getStressLevelValue(user.stressLevel)}
            max={3}
            label="Stress Level"
          />
        </div>
      </div>
    </div>
  );
};

export default HabitsWidget;
