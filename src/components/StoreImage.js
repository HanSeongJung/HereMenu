import styled from "styled-components";

const StoreImageDiv = styled.div`
  width: 100%;
  height: 163px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("${(props) => props.src}");
`;

const StoreImage = () => {
  return (
    <StoreImageDiv src={"/image/storeImage/store_logo.png"}></StoreImageDiv>
  );
};

export default StoreImage;
