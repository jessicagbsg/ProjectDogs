import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Statistics } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";
import { useLocation } from "react-router-dom";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <MyPhotos />
          {mobile && "My photos"}
        </NavLink>
        <NavLink to="/account/statistics">
          <Statistics />
          {mobile && "Statistics"}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhoto />
          {mobile && "Add Photo"}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && "Logout"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
