import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  width: ${(props) =>
    props.type === "sm" ? "100%" : props.type === "medium" ? "100%" : "285px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "8px" : props.type === "medium" ? "20px" : "45px")};
  cursor: pointer;
  display: ${(props) =>
    props.type === "sm" ? "flex" : props.type === "medium" && "flex"};
  gap: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) =>
    props.type === "sm"
      ? "100px"
      : props.type === "medium"
      ? "140px"
      : "160px"};
  border-radius: 8px;
  object-fit: cover;
  flex: 1;
`;

const Details = styled.div`
  flex: ${(props) => (props.type === "medium" ? "3" : "1")};
  display: flex;
  margin-top: ${(props) =>
    props.type !== "sm" && props.type !== "medium" && "16px"};
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  display: ${(props) =>
    props.type === "sm" ? "none" : props.type === "medium" && "none"};
`;

const Texts = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.type === "medium" ? "18px" : "14px")};
  line-height: ${(props) => (props.type === "medium" ? "22px" : "14px")};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const ChannelName = styled.h2`
  font-size: 12px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Description = styled.p`
  margin-top: 12px;
  font-size: 12px;
  line-height: 18px;
  display: ${(props) => (props.type === "medium" ? "-webkit-box" : "none")};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Card = ({ type }) => {
  return (
    <Link to="/video" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/rm2W7IOWm80/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDmFDx-nZeGvHOtWnGBTh-JMnvCHg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3"
          />
          <Texts>
            <Title type={type}>Nhất Thân - Masew x Khoi Vu</Title>
            <ChannelName>Baba Yaga</ChannelName>
            <Info>10000000 views • 1 day ago</Info>
            <Description type={type}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              voluptatum aperiam dolore ducimus quidem ullam aliquam facere eum
              corrupti, velit dolores at aliquid. Officia quas deserunt, ipsa
              vel ipsam quia?
            </Description>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
