import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Comments from "../components/Comments";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 56px 0 0;
  padding: 16px 26px;
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  gap: 26px;
`;

const Content = styled.div`
  flex: 5;
  height: 100vh;
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

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgButton};
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgHoverButton};
  }
`;

const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const ChannelCounter = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
  background-color: ${({ theme }) => theme.bgButton};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 30px;
  height: max-content;
  margin-left: 20px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgHoverButton};
  }
`;

const Description = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgHover};
  color: ${({ theme }) => theme.text};
  height: min-content;
`;

const DescriptionBox = styled.div`
  padding: 12px;
`;

const DescriptionText = styled.p`
  margin-top: 12px;
  font-size: 12px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Recommendation = styled.div`
  flex: 2;
  height: 100vh;
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

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="580"
            src="https://www.youtube.com/embed/rm2W7IOWm80"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Nh???t Th??n - Masew x Khoi Vu</Title>
        <Details>
          <ChannelInfo>
            <Image src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
            <ChannelDetail>
              <ChannelName>Baba Yaga</ChannelName>
              <ChannelCounter>1,3 million subscribers</ChannelCounter>
            </ChannelDetail>
            <Subscribe>Register</Subscribe>
          </ChannelInfo>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              1009
            </Button>
            <Button>
              <ThumbDownIcon />
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <ContentCutIcon />
              Create a video
            </Button>
            <Button>
              <PlaylistAddIcon />
              Save
            </Button>
            <Button style={{ padding: "5px", borderRadius: "50%" }}>
              <MoreHorizIcon />
            </Button>
          </Buttons>
        </Details>
        <Description>
          <DescriptionBox>
            <Info>13,540,678 views ??? 1 day ago</Info>
            <Title style={{ fontSize: "14px" }}>
              Nh???t Th??n - Masew x Khoi Vu
            </Title>
            <DescriptionText>
              [LYRICS] Gi?? ????a qua ?????i, n??t tan r???i Nh???ng m???ng m?? ng??y m??nh c??
              ????i Ch???ng ph???i anh t???i, em kh??ng t???i ????i b??? m??i l???nh l??ng th??? th??i
              ??i! Ng?????i th????ng ta ch???c chi ???? l?? Ng?????i ta th????ng ????ng kh??ng?
              Ng?????i ??em hoa n???ng mang theo c??? M???t chi???u m??a b??o gi??ng Th??n t??i
              ki???p n??y ch???ng k??? n??o ng?? nghi??ng T??m tr?? ?????a ????y v?? ?????i ng?????i
              to??n x??? xi??n ????i m???t hao g???y t?????ng r???ng m??nh s??? h??a ??i??n Nh??ng
              th??i ch???c l?? ph???n m??nh ch???ng c?? duy??n v???i ai! ??? trong m??n t???i, t??m
              kh??ng ???????c l???i Nh??n gian t???a nh?? ch??? c??n c?? t??i V??i ba l???i ca ng??n
              vang g???n xa Kh??ng gian gi?????ng nh?? ch???ng c??n ch??ng ta Ng?????i ta
              th????ng ch???c chi ???? l?? Ng?????i th????ng ta ????ng kh??ng? Ng?????i ta trao
              h???t t????ng t?? gi??? Th??? tr??i theo su???i s??ng Ng?????i m??nh y??u ????u c?? y??u
              m??nh Ng?????i y??u m??nh m??nh ????u c?? y??u Ng?????i xung quanh nh??ng v???n m???t
              m??nh M???t m??nh v?? b??n m??nh ????u c?? ng?????i
            </DescriptionText>
          </DescriptionBox>
        </Description>
        <Comments></Comments>
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
