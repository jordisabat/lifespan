import { UserType } from "../data/types";

const DashBoard = (props: { user: UserType }) => {
  const { user } = props;
  return (
    <div>
      <h1>Dashboard</h1>
      <div>{user.name}</div>
      <h2>{user.lifestyleScore}</h2>
    </div>
  );
};

export default DashBoard;
