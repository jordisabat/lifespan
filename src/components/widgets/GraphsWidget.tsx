import BarChart from "./BarChart";
import LineChart from "./LineChart";

const GraphsWidget = () => {
  return (
    <>
      <div className="flex flex-col items-center pb-[48px] text-[24px] font-semibold">
        HeathSpan Estimations
      </div>
      <div className="flex flex-col gap-12 pb-32 md:flex-row">
        <div className="md:w-1/2">
          <LineChart />
        </div>
        <div className="md:w-1/2">
          <BarChart />
        </div>
      </div>
    </>
  );
};

export default GraphsWidget;
