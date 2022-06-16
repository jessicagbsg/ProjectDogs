import React from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LoginCreate from "./LoginCreate";
import LoginForgotPassword from "./LoginForgotPassword";
import LoginForm from "./LoginForm";
import LoginResetPassword from "./LoginResetPassword";
import styles from "./Login.module.css";
import NotFound from "../Helper/NotFound";
import Head from "../Helper/Head";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;

  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="forgot" element={<LoginForgotPassword />} />
          <Route path="reset" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
