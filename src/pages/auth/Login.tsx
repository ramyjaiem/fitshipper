import LoginForm from "../../components/forms/LoginForm";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <AuthContainer title="Login" form={<LoginForm />} />
    </AuthLayout>
  );
};

export default Login;
