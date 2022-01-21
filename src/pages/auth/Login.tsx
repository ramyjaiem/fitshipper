import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";

interface Props {}

const Login = (props: Props) => {
  return (
    <AuthLayout>
      <AuthContainer title="Login" form={<LoginForm />} />
    </AuthLayout>
  );
};

export default Login;
