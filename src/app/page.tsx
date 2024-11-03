import MainTitle from "../components/atoms/mainTitle";
import BackgroundImgLayout from "../components/layouts/backgroundImgLayout/backgroundImgLayout";
import LoginForm from "../components/organisms/loginForm";
import LoginPageSentence from "../components/atoms/loginPage/loginPageSentence";
import { LoginPageWrapper } from "../components/atoms/loginPage/loginPageWrapper";

export default function Home() {
  return (
    <BackgroundImgLayout>
      <LoginPageWrapper>
        <MainTitle />
        <LoginPageSentence />
        <LoginForm />
      </LoginPageWrapper>
    </BackgroundImgLayout>
  );
}
