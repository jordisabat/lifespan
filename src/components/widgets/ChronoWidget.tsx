import { ReportType } from "../../data/types";
import AgeWidget from "./AgeWidget";

const ChronoWidget = (props: { report: ReportType }) => {
  const { report } = props;

  return (
    <>
      <div className="flex flex-col items-center pb-[48px] text-[24px] font-semibold">
        Biomarkers
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-8 pb-32">
        <AgeWidget title="Chronological" value={report.chronologicalAge} />
        <AgeWidget title="Biological" value={report.biologicalAge} />
        <AgeWidget title="Blood" value={report.bloodAge} />
        <AgeWidget title="Epigenetic" value={report.epigeneticAge} />
        <AgeWidget title="Microbiome" value={report.microbiomeAge} />
      </div>
    </>
  );
};

export default ChronoWidget;
