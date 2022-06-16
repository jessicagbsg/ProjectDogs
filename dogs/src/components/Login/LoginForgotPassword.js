import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginForgotPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("forgot", "reset"),
      });
      const { json } = await request(url, options);
    }
  }
  return (
    <section className="animationLeft">
      <Head title="Forgot your password?" />
      <h1 className="title">Forgot your password?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="E-mail or Username"
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button disabled>Loading...</Button>
          ) : (
            <Button>Send e-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginForgotPassword;
