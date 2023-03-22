import ChatGPT from "../components/ChatGPT";
import Info from "../components/Info";
import MainLayout from "../components/layout/MainLayout";
import ToDo from "../components/ToDo";
import Welcome from "../components/Welcome";

import * as S from "../styles/pages/MainStyle";
const Main: React.FC = () => {
  return (
    <MainLayout>
      <Welcome />
      <S.SectionWrap>
        <S.LeftSection>
          <ToDo />
        </S.LeftSection>
        <S.RightSection>
          <Info />
          <ChatGPT />
        </S.RightSection>
      </S.SectionWrap>
    </MainLayout>
  );
};

export default Main;
