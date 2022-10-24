import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const Wrapper = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const NewComment = styled.div`
  flex: 1;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: transparent;
  margin: 10px 0;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  outline: none;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const ButtonCencel = styled.button`
  width: max-content;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const ButtonComment = styled.button`
  width: max-content;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 30px;
`;

const Comments = () => {
  return (
    <Container>
      <Wrapper>
        <Avatar src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
        <NewComment>
          <Input placeholder="Add a comment..." />
          <Buttons>
            <ButtonCencel>Cancel</ButtonCencel>
            <ButtonComment>Comment</ButtonComment>
          </Buttons>
        </NewComment>
      </Wrapper>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
