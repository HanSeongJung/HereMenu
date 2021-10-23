import styled from "styled-components";
import Line from "./Line";
const Title = styled.div`
  font-size: 20px;
`;

const Price = styled.div`
  font-size: 20px;
`;

// thumbnail
const FoodImg = styled.div`
  width: 130px;
  height: 130px;
  background-size: 130px 130px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("${(props) => props.src}");
  padding: 10px 15px 10px 0;
  background-origin: content-box;
`;

const ItemWrap = styled.li`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;

const Infomation = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding-left: 20px;
`;

const MenuItem = (props) => {
  return (
    <>
      <ItemWrap>
        <Infomation>
          <Title>{props.name}</Title>
          <Price>{props.price}</Price>
        </Infomation>
        <FoodImg src={props.imgSrc} />
      </ItemWrap>
      <Line />
    </>
  );
};

export default MenuItem;
