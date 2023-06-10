import { UserType } from "../data/userType";

const DashBoard = (props: { user: UserType | null }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {props.user !== null ? <div>{props.user.name}</div> : <div>N/A</div>}
    </div>
  );
};

export default DashBoard;
