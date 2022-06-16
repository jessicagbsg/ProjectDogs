import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animationLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Login</Button>
        )}
        <Error error={error && "Invalid username or password."} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Forgot password?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}> Register</h2>
        <p>Don't have and account? Register on website.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/create">
        Register
      </Link>
    </section>
  );
};

export default LoginForm;
