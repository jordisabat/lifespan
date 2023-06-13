import { useEffect, useState } from "react";
import LoadingReport from "../../common/LoadingReport";

const OpenaiWidget = (props: { isLoading: boolean }) => {
  const { isLoading } = props;
  const [advices, setAdvices] = useState<string>(
    "No data available from OpenAI"
  );

  useEffect(() => {
    const data = localStorage.getItem("advices");
    if (data && JSON.stringify(data) !== '"{}"') {
      setAdvices(JSON.parse(data) as string);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col items-center p-16 ">
      <div className="flex flex-col items-center pb-[32px] text-[24px] font-semibold">
        Health Advices
      </div>
      {isLoading ? (
        <LoadingReport />
      ) : advices ? (
        <div className="whitespace-pre-line">{advices}</div>
      ) : (
        <div>Click to get advices</div>
      )}
    </div>
  );
};

export default OpenaiWidget;
