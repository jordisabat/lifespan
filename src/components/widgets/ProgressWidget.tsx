const ProgressWidget = ({
  value,
  max,
  label,
}: {
  value: number;
  max: number;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <progress className="progress w-56" value={value} max={max}></progress>
      <div className="text-[16px]">{label}</div>
    </div>
  );
};

export default ProgressWidget;
