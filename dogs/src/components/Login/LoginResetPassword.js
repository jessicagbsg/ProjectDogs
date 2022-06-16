import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const LoginResetPassword = () => {
  const { login, setLogin } = React.useState("");
  const { key, setKey } = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  });

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }
  return (
    <section className="animationLeft">
      <Head title="Reset your password" />
      <h1 className="title">Reset your password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="New Password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disables>Reseting...</Button>
        ) : (
          <Button>Reset</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginResetPassword;
