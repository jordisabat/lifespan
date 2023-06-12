import { UserType } from "../data/types";
import "chart.js/auto";
import Greatings from "../common/Greetings";
import ChronoWidget from "./widgets/ChronoWidget";
import Welcome from "./Welcome";
import LoadingReport from "../common/LoadingReport";
import HabitsWidget from "./widgets/HabitsWidget";
import GraphsWidget from "./widgets/GraphsWidget";

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
          <HabitsWidget user={user} />
          <GraphsWidget />
        </div>
      )}
    </div>
  );
};

export default DashBoard;
