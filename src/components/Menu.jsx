import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgMenu};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
  }
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  gap: 24px;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  margin: 15px 0;
  height: 38px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 40px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  margin-left: 14px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
`;

const ChannelImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;


const Menu = () => {
  const user = true;

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <HomeIcon />
              Home
            </ItemBox>
          </Item>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <ExploreIcon />
              Explore
            </ItemBox>
          </Item>
        </Link>
        <Link to="/subscribe" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <SubscriptionsIcon />
              Subscriptions
            </ItemBox>
          </Item>
        </Link>
        <Hr />
        <Link to="/library" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <VideoLibraryIcon />
              Library
            </ItemBox>
          </Item>
        </Link>
        <Link to="/history" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <HistoryIcon />
              History
            </ItemBox>
          </Item>
        </Link>
        <Link to="/videoliked" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <ThumbUpIcon />
              Videos Liked
            </ItemBox>
          </Item>
        </Link>
        <Hr />
        <Title>SUBCSRIBE CHANNEL</Title>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <ChannelImage src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              Lama Dev
            </ItemBox>
          </Item>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <ChannelImage src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              Lama Dev
            </ItemBox>
          </Item>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <ChannelImage src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
              Lama Dev
            </ItemBox>
          </Item>
        </Link>
        {user ? (
          ""
        ) : (
          <Login>
            <Hr />
            Sign in to like videos, comment, and subscribe.
            <Button>
              <AccountCircleIcon />
              Sign In
            </Button>
          </Login>
        )}
        <Hr />
        <Title>BEST OF YOUTUBE</Title>
        <Link to="/popular" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <WhatshotIcon />
              Popular
            </ItemBox>
          </Item>
        </Link>
        <Link to="/music" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <LibraryMusicIcon />
              Music
            </ItemBox>
          </Item>
        </Link>
        <Link to="/game" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <SportsEsportsIcon />
              Game
            </ItemBox>
          </Item>
        </Link>
        <Link to="/news" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <ArticleIcon />
              News
            </ItemBox>
          </Item>
        </Link>
        <Link to="/sports" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <EmojiEventsIcon />
              Sports
            </ItemBox>
          </Item>
        </Link>
        <Link to="/movie" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <MovieIcon />
              Movie
            </ItemBox>
          </Item>
        </Link>
        <Link to="/live" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <LiveTvIcon />
              Live
            </ItemBox>
          </Item>
        </Link>
        <Hr />
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <SettingsIcon />
              Settings
            </ItemBox>
          </Item>
        </Link>
        <Link to="/report" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <FlagIcon />
              Report
            </ItemBox>
          </Item>
        </Link>
        <Link to="/help" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <HelpOutlineIcon />
              Help
            </ItemBox>
          </Item>
        </Link>
        <Link to="/send" style={{ textDecoration: "none" }}>
          <Item>
            <ItemBox>
              <FeedbackIcon />
              Send Feedback
            </ItemBox>
          </Item>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Menu;
