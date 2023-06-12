import { ReportType } from "../../data/types";
import AgeWidget from "./AgeWidget";

const ChronoWidget = (props: { report: ReportType }) => {
  const { report } = props;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 pb-32">
      <AgeWidget title="Chronological Age" value={report.chronologicalAge} />
      <AgeWidget title="Biological Age" value={report.biologicalAge} />
      <AgeWidget title="Blood Age" value={report.bloodAge} />
      <AgeWidget title="Epigenetic Age" value={report.epigeneticAge} />
      <AgeWidget title="Microbiome Age" value={report.microbiomeAge} />
    </div>
  );
};

export default ChronoWidget;
