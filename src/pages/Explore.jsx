import styled from "styled-components";
import Card from "./Card";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin: 56px 0px 0px;
  display: flex;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Main = styled.div`
  flex: 6;
  padding: 0px 50px;
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

const MenuExplore = styled.div`
  width: 100%;
  margin: 12px 0px;
  display: flex;
`;

const Button = styled.button`
  width: 210px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgButton};
  font-size: 18px;
  margin: 12px 12px 12px 0;
  padding: 25px;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgHoverButton};
  }
`;

const Image = styled.img`
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
`;

const ContentExplore = styled.div`
  width: 70%;
`;

const Title = styled.h3`
font-size: 16px;
line-height: 16px;
  color: ${({ theme }) => theme.text};
  margin: 30px 0;
`

const Explore = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <MenuExplore>
          <Link to="/popular" style={{textDecoration: "none"}}>
            <Button>
              <Image src="https://www.youtube.com/img/explore/destinations/icons/trending_color_64.png" />
              Popular
            </Button>
          </Link>
          <Link to="/music" style={{textDecoration: "none"}}>
            <Button>
              <Image src="https://www.youtube.com/img/explore/destinations/icons/music_color_64.png" />
              Music
            </Button>
          </Link>
          <Link to="/game" style={{textDecoration: "none"}}>
            <Button>
              <Image src="https://www.youtube.com/img/explore/destinations/icons/gaming_color_64.png" />
              Game
            </Button>
          </Link>
          <Link to="/news" style={{textDecoration: "none"}}>
            <Button>
              <Image src="https://www.youtube.com/img/explore/destinations/icons/news_color_64.png" />
              News
            </Button>
          </Link>
          <Link to="/sport" style={{textDecoration: "none"}}>
            <Button>
              <Image src="https://www.youtube.com/img/explore/destinations/icons/sports_color_64.png" />
              Sport
            </Button>
          </Link>
        </MenuExplore>
        <ContentExplore>
          <Title>Trending videos</Title>
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
          <Card type="medium" />
        </ContentExplore>
      </Main>
    </Container>
  );
};

export default Explore;
