import React from "react";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import AuthContainer from "../../containers/AuthContainer";
import AuthLayout from "../../containers/layouts/AuthLayout";

interface Props {}

const ResetPassword = (props: Props) => {
  return (
    <AuthLayout>
      <AuthContainer title="Reset Password" form={<ResetPasswordForm />} />
    </AuthLayout>
  );
};

export default ResetPassword;
