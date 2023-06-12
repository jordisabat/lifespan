import { UserType } from "../data/types";
import { formatDateString } from "../utils/helpers";

const Greatings = (props: { user: UserType }) => {
  const { user } = props;
  return (
    <div className="flex flex-col">
      <div className="text-[48px] font-semibold md:text-[64px] lg:text-[72px]">
        Hi {user.name}
      </div>
      <div className="pb-32 text-[18px]">
        {`Started 10th June 2021 | Last updated ${formatDateString(
          user.updatedAt
        )}`}
      </div>
    </div>
  );
};

export default Greatings;
