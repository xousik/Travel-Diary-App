import { LoginPageWrapper } from "@/src/components/atoms/loginPage/loginPageWrapper";
import BackgroundImgLayout from "@/src/components/layouts/backgroundImgLayout";
import MainTitle from "@/src/components/atoms/mainTitle";
import RegisterForm from "@/src/components/organisms/registerForm";

export default function Register() {
  return (
    <BackgroundImgLayout>
      <LoginPageWrapper>
        <MainTitle />
        <RegisterForm />
      </LoginPageWrapper>
    </BackgroundImgLayout>
  );
}
