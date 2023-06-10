import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link to="/">DashBoard</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
