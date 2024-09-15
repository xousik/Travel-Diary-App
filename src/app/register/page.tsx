import { LoginPageWrapper } from "@/src/components/atoms/loginPage/loginPageWrapper";
import BackgroundImgLayout from "@/src/components/layouts/backgroundImgLayout/backgroundImgLayout";
import MainTitle from "@/src/components/atoms/mainTitle";
import RegisterForm from "@/src/components/organisms/registerForm";
import LoginPageSentence from "@/src/components/atoms/loginPage/loginPageSentence";

export default function Register() {
  return (
    <BackgroundImgLayout>
      <LoginPageWrapper>
        <MainTitle />
        <LoginPageSentence />
        <RegisterForm />
      </LoginPageWrapper>
    </BackgroundImgLayout>
  );
}
