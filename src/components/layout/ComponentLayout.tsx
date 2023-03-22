import * as S from "./ComponentLayoutStyle";

interface IComponentLayoutType {
  children: React.ReactNode;
  width: string;
  height: string;
  padding: string;
}

function ComponentLayout(props: IComponentLayoutType) {
  const { width, height, padding, children } = props;

  return (
    <S.Container width={width} height={height} padding={padding}>
      {children}
    </S.Container>
  );
}

export default ComponentLayout;
