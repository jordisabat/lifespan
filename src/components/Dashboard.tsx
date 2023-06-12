import { UserType } from "../data/types";
import "chart.js/auto";
import LineChart from "./widgets/LineChart";
import BarChart from "./widgets/BarChart";
import Greatings from "../common/Greetings";
import ChronoWidget from "./widgets/ChronoWidget";
import Welcome from "./Welcome";
import LoadingReport from "../common/LoadingReport";

const DashBoard = (props: { user: UserType; isLoading: boolean }) => {
  const { user, isLoading } = props;
  const lastReport = user.reports[user.reports.length - 1];

  return (
    <div className="p-[16px] lg:w-[1000px]">
      {user.id === 0 ? (
        <Welcome />
      ) : isLoading ? (
        <LoadingReport />
      ) : (
        <div>
          <Greatings user={user} />
          <ChronoWidget report={lastReport} />
          <div className="flex flex-col gap-12 pb-32 md:flex-row">
            <div className="md:w-1/2">
              <LineChart />
            </div>
            <div className="md:w-1/2">
              <BarChart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
