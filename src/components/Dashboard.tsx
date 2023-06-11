import { Link } from "react-router-dom";
import { UserType } from "../data/types";
import "chart.js/auto";
import { formatDateString } from "../utils/helpers";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const DashBoard = (props: { user: UserType }) => {
  const { user } = props;

  return (
    <div className="p-[16px] lg:w-[1000px]">
      {user.id === 0 ? (
        <div>
          <div className="font-silka pb-8 text-[48px] font-semibold md:text-[64px] lg:text-[72px]">
            Optimise your healthspan
          </div>
          <Link
            to="/profile"
            className="inline-flex flex-row flex-nowrap items-center rounded-full bg-black px-[32px] py-[12px] text-[16px] text-white"
          >
            <div className="pr-[5px]">Start Journey</div>
            <img src="assets/arrow.svg" alt="arrow" className="h-[16px]" />
          </Link>
        </div>
      ) : (
        <div>
          <div className="font-silka  text-[48px] font-semibold md:text-[64px] lg:text-[72px]">
            {user.name}&apos;s Journey
          </div>
          <div className="pb-32 text-[18px]">
            {`Started 10th June 2021 | Last updated ${formatDateString(
              user.updatedAt
            )}`}
          </div>
          <div className="flex flex-row flex-wrap gap-8">
            <div className="flex w-[120px] flex-col items-center gap-4">
              <div
                className="radial-progress text-[20px] font-semibold"
                style={{
                  "--value": user.lifestyleScore - 2.6,
                }}
              >
                {user.lifestyleScore - 2.6}
              </div>
              <div className="text-[16px]">Biological Age:</div>
            </div>
            <div className="flex w-[120px] flex-col items-center gap-4">
              <div
                className="radial-progress text-[20px] font-semibold"
                style={{
                  "--value": user.lifestyleScore - 3,
                }}
              >
                {user.lifestyleScore - 3}
              </div>
              <div className="text-[16px]">Blood Age:</div>
            </div>
            <div className="flex w-[120px] flex-col items-center gap-4">
              <div
                className="radial-progress text-[20px] font-semibold"
                style={{
                  "--value": user.lifestyleScore - 2,
                }}
              >
                {user.lifestyleScore - 2}
              </div>
              <div className="text-[16px]">Epigenetic Age:</div>
            </div>
            <div className="flex w-[120px] flex-col items-center gap-4">
              <div
                className="radial-progress text-[20px] font-semibold"
                style={{
                  "--value": user.lifestyleScore,
                }}
              >
                {user.lifestyleScore}
              </div>
              <div className="text-[16px]">Chronological Age:</div>
            </div>
            <div className="flex w-[120px] flex-col items-center gap-4">
              <div
                className="radial-progress text-[20px] font-semibold"
                style={{
                  "--value": user.lifestyleScore - 1.8,
                }}
              >
                {user.lifestyleScore - 1.8}
              </div>
              <div className="text-[16px]">Microbiome Age:</div>
            </div>
          </div>
          <div className="py-8">
            <LineChart />
          </div>

          <div className="py-8">
            <BarChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
