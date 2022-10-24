import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 6;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Navbar;
