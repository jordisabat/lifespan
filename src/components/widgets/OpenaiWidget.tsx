import { useEffect, useState } from "react";

const OpenaiWidget = (props: { isLoading: boolean }) => {
  const { isLoading } = props;
  const [advices, setAdvices] = useState<string>("Loading advices...");

  useEffect(() => {
    const data = localStorage.getItem("advices");
    if (data) {
      setAdvices(JSON.parse(data) as string);
    }
  }, [isLoading]);

  return (
    <div className="p-16">
      <div className="flex flex-col items-center pb-[32px] text-[24px] font-semibold">
        Health Advices
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : advices ? (
        <div className="whitespace-pre-line">{advices}</div>
      ) : (
        <div>Click to get advices</div>
      )}
    </div>
  );
};

export default OpenaiWidget;
