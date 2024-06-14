import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../lib/api/auth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

const SignIn = ({ setUser }) => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
    });

    setUser({ userId, nickname, avatar });
  };

  return (
    <Container>
      <Form>
        <Input
          type="text"
          onChange={(e) => {
            setID(e.target.value);
          }}
          placeholder="아이디"
        />
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호"
        />
        <Button onClick={handleSignIn}>로그인</Button>
        <SignUpButton
          onClick={() => {
            navigate("/register");
          }}
        >
          회원가입
        </SignUpButton>
      </Form>
    </Container>
  );
};

export default SignIn;
