import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/Menu";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  margin: 56px 0px 0px;
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Main = styled.div`
  flex: 6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: sticky;
  background-color: #00000000;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const ChannelHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChannelName = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  line-height: 18px;
`;

const ChannelMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

const Content = styled.div`
  padding: 20px;
  background-color: black;
`;

const ListVideo = styled.div`
  width: 70%;
`;

const Game = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <ChannelHeader>
          <Icon src="https://www.youtube.com/img/trending/avatar/trending_avatar.png" />
          <ChannelName>Game</ChannelName>
        </ChannelHeader>
        <ChannelMenu>
          <Link to="/trend">
            <Button>Latest</Button>
          </Link>
          <Link to="/trend">
            <Button>Music</Button>
          </Link>
          <Link to="/trend">
            <Button>Game</Button>
          </Link>
          <Link to="/trend">
            <Button>Movie</Button>
          </Link>
        </ChannelMenu>
        <Content>
          <ListVideo>
            <Card type="medium" />
            <Card type="medium" />
            <Card type="medium" />
            <Card type="medium" />
            <Card type="medium" />
            <Card type="medium" />
            <Card type="medium" />
            <Card type="medium" />
            <Card type="medium" />
          </ListVideo>
        </Content>
      </Main>
    </Container>
  );
};

export default Game;
