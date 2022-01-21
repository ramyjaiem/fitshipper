import RegisterForm from "../../components/forms/RegisterForm";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <AuthContainer title="Create Account" form={<RegisterForm />} />
    </AuthLayout>
  );
};

export default Register;
