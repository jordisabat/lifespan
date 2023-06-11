import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <header>
      <div className="flex justify-between p-6">
        <div>
          <img src="assets/logo.svg" alt="logo NU" className="h-[30px]" />
        </div>
        <div className="flex justify-end gap-6">
          <div>
            <Link
              to="/"
              className={`cool-link ${
                currentPage === "/" ? "font-medium" : ""
              }`}
            >
              DashBoard
            </Link>
          </div>
          <div>
            <Link
              to="/profile"
              className={`cool-link ${
                currentPage === "/profile" ? "font-medium" : ""
              }`}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
