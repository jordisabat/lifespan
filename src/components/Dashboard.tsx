import { Link } from "react-router-dom";
import { UserType } from "../data/types";

const DashBoard = (props: { user: UserType }) => {
  const { user } = props;

  return (
    <div className="p-16">
      {user.id === 0 ? (
        <div>
          <div className="font-silka pb-8 text-[48px] font-semibold md:text-[64px] lg:text-[72px]">
            Optimise your healthspan
          </div>
          <Link
            to="/profile"
            className="inline-flex flex-row flex-nowrap items-center rounded-full bg-black px-[32px] py-[12px] text-[16px] text-white"
          >
            <div className="pr-[5px]">Start Journey</div>
            <img src="assets/arrow.svg" alt="arrow" className="h-[16px]" />
          </Link>
        </div>
      ) : (
        <div>
          <div>{user.name}</div>
          <h2>{user.lifestyleScore}</h2>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
