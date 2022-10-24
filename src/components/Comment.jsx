import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 18px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://drscdn.500px.org/photo/1054027535/q%3D80_m%3D2000_k%3D1/v2?sig=3a5b117896fe75d7b3f13c4379a3856ad451c9e4cbc751aa8c4d2f60e235bfa3" />
      <Details>
        <Name>
          Baba Yaga <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;