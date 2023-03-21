import ChatGPT from "../components/ChatGPT";
import Info from "../components/Info";
import Layout from "../components/Layout";
import ToDo from "../components/ToDo";
import Welcome from "../components/Welcome";

import * as S from "../styles/pages/MainStyle";
const Main: React.FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Main;
