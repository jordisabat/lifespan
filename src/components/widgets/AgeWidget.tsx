interface WidgetProps {
  title: string;
  value: number;
}

const AgeWidget = (props: WidgetProps) => {
  const { title, value } = props;

  return (
    <div className="flex w-[120px] flex-col items-center gap-4">
      <div
        className="radial-progress text-[20px] font-semibold"
        style={{
          "--value": value,
        }}
      >
        {value}
      </div>
      <div className="text-[16px]">{title}</div>
    </div>
  );
};

export default AgeWidget;
