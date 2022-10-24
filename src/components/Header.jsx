import React from "react";
import styled from "styled-components";
import Youtube from "../img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.bgMenu};
  z-index: 9999;
`;

const Wrapper = styled.div`
  margin: 0 10px;
  line-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
`;

const Left = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
`;

const ButtonMenu = styled.button`
  margin-left: 8px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgSearch};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const Img = styled.img`
  height: 25px;
  margin-left: 15px;
`;

const Center = styled.div`
  width: 40%;
  height: 38px;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Search = styled.div`
  width: 90%;
  color: #f1f1f1;
  background-color: ${({ theme }) => theme.bgSearchVoice};
  line-height: 40px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 40px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  margin-left: 15px;
  background-color: transparent;
  border: none;
  outline: none;

  &:focus-within {
    color: ${({ theme }) => theme.text};
  }
`;

const Keyboard = styled.span`
  width: 8%;
  height: 38px;
  color: #a0a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.bgHoverKeybroad};
  }
`;

const ButtonSearch = styled.button`
  width: 12%;
  height: 36px;
  border: none;
  border-radius: 0px 40px 40px 0px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgSearch};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
  }
`;

const KeyboardVoice = styled.div`
  width: 38px;
  height: 38px;
  margin-left: 8px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgSearchVoice};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
  }
`;

const Right = styled.div`
  height: 56px;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignIn = styled.button`
  height: 38px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 40px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Add = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
  }
`;

const Notify = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgHover};
  }
`;

const Avatar = styled.img`
  margin-left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Header = ({ darkMode, setDarkMode }) => {
  const user = true;

  return (
    <Container>
      <Wrapper>
        <Left>
          <ButtonMenu>
            <MenuIcon />
          </ButtonMenu>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Img src={Youtube} />
              YouTube
            </Logo>
          </Link>
        </Left>

        <Center>
          <Search>
            <Input placeholder="Search" />
            <Keyboard>
              <KeyboardIcon />
            </Keyboard>
            <ButtonSearch>
              <SearchIcon />
            </ButtonSearch>
          </Search>
          <KeyboardVoice>
            <KeyboardVoiceIcon />
          </KeyboardVoice>
        </Center>
        <Right>
          {user ? (
            <>
              <SettingsBrightnessIcon onClick = {() => setDarkMode(!darkMode)} />
              <Add>
                <AddCircleIcon />
              </Add>
              <Notify>
                <NotificationsNoneIcon />
              </Notify>
              <Avatar src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
            </>
          ) : (
            <SignIn>
              <AccountCircleIcon />
              Sign In
            </SignIn>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
