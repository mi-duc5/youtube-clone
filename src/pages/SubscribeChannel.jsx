import React from "react";
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
  padding: 0px 26px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: sticky;

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

const Item = styled.div``;

const ItemBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ChannelName = styled.h3`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const SubscribeChannel = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <Item>
          <ItemBox>
            <Info>
              <Image src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              <ChannelName>Baba Yaga</ChannelName>
            </Info>
            <Card type="medium" />
          </ItemBox>
          <Hr />
        </Item>
        <Item>
          <ItemBox>
            <Info>
              <Image src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              <ChannelName>Baba Yaga</ChannelName>
            </Info>
            <Card type="medium" />
          </ItemBox>
          <Hr />
        </Item>
        <Item>
          <ItemBox>
            <Info>
              <Image src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              <ChannelName>Baba Yaga</ChannelName>
            </Info>
            <Card type="medium" />
          </ItemBox>
          <Hr />
        </Item>
        <Item>
          <ItemBox>
            <Info>
              <Image src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              <ChannelName>Baba Yaga</ChannelName>
            </Info>
            <Card type="medium" />
          </ItemBox>
          <Hr />
        </Item>
        <Item>
          <ItemBox>
            <Info>
              <Image src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              <ChannelName>Baba Yaga</ChannelName>
            </Info>
            <Card type="medium" />
          </ItemBox>
          <Hr />
        </Item>
        <Item>
          <ItemBox>
            <Info>
              <Image src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              <ChannelName>Baba Yaga</ChannelName>
            </Info>
            <Card type="medium" />
          </ItemBox>
          <Hr />
        </Item>
      </Main>
    </Container>
  );
};

export default SubscribeChannel;
