import { useRef, useState } from "react";
import * as S from "../styles/components/LoginStyle";
import { useNavigate } from "react-router-dom";

interface IProps {
  isLogin: boolean;
  setIsLogin: (boolean: boolean) => void;
}

function Login(props: IProps) {
  const { isLogin, setIsLogin } = props;

  const [userName, setUserName] = useState<string>("");

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onClick = () => {
    if (userName !== "") {
      setIsLogin(true);
      navigate("/main");
    } else {
      alert("이름을 입력해주세요.");
      return;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <S.LoginContainer>
        <S.Circle />
        <S.Circle />
        <S.Circle />
        <S.Form onSubmit={handleLogin}>
          <S.Input
            ref={inputRef}
            type="text"
            placeholder="이름을 입력해주세요."
            value={userName}
            onChange={handleChange}
          />
          <S.Button onClick={onClick}>확인</S.Button>
        </S.Form>
      </S.LoginContainer>
    </>
  );
}
export default Login;
