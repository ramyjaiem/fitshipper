import React from "react";
import RegisterForm from "../../components/forms/RegisterForm";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";

interface Props {}

const Register = (props: Props) => {
  return (
    <AuthLayout>
      <AuthContainer title="Create Account" form={<RegisterForm />} />
    </AuthLayout>
  );
};

export default Register;
