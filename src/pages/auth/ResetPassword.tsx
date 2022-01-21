import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";

const ResetPassword = () => {
  return (
    <AuthLayout>
      <AuthContainer title="Reset Password" form={<ResetPasswordForm />} />
    </AuthLayout>
  );
};

export default ResetPassword;
