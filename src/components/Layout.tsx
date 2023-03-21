import { useEffect, useRef } from "react";
import * as S from "../styles/components/LayoutStyle";

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
  const layoutRef = useRef<any>(null);

  useEffect(() => {
    layoutRef.current.classList.remove("on");
    layoutRef.current.classList.add("on");
  });

  return (
    <S.Section className="" ref={layoutRef}>
      {props.children}
    </S.Section>
  );
};

export default Layout;
