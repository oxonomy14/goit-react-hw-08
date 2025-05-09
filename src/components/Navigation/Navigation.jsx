import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const activeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav>
      <NavLink className={activeLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={activeLinkClass} to="/contacts">
          My Contacts
        </NavLink>
      )}
    </nav>
  );
};
