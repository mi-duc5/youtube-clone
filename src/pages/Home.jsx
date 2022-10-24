import styled from "styled-components";
import Card from "./Card";
import Menu from "../components/Menu";

const Container = styled.div`
  width: 100%;
  margin: 56px 0 0;
  display: flex;
`;

const Main = styled.div`
  flex: 6;
  height: 100%;
  background-color: ${({ theme }) => theme.bgLighter};
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

const MenuHome = styled.div`
  position: fixed;
  width: -webkit-fill-available; /* Đọc tài liệu tìm hiểu thêm */ 
  background-color: ${({ theme }) => theme.bgMenu};
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 12px;
  line-height: 14px;
  border-top: 1px solid #323132;
  border-bottom: 1px solid #323132;
  z-index: 9;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.bgButton};
  color: ${({ theme }) => theme.text};
  padding: 5px 10px;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgHoverButton};
  }
`;

const Content = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.bgLighter};
  top: 60px;
  height: 100vh;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Container>
      <Menu/>
      <Main>
        <MenuHome>
          <Button>All</Button>
          <Button>Cartoon</Button>
          <Button>Combination list</Button>
          <Button>Situation comedy</Button>
          <Button>Music</Button>
          <Button>Football</Button>
          <Button>Recently uploaded</Button>
          <Button>Watched</Button>
          <Button>New Proposal</Button>
        </MenuHome>
        <Content>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Content>
      </Main>
    </Container>
  );
};

export default Home;
