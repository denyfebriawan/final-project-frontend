import styled from "styled-components";
import Carousel, { Controller } from "@jjunyjjuny/react-carousel";

const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 480px;
`;
const Item = styled.div`
  background: #dbe4ff;
  text-align: center;
  font-size: 2rem;
  line-height: 145px;
  height: 150px;
  border-radius: 10px;
`;
const ControllerBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const sampleArray = [1, 2, 3, 4, 6, 7, 8];
const CarouselSample = () => {
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Sample customMode</h2>
      <Carousel itemCountPerPanel={3} customMode carouselId={"jjunyjjuny"}>
        {sampleArray.map((el) => (
          <Item>{el}</Item>
        ))}
      </Carousel>
      <ControllerBox>
        <Controller prev carouselId={"jjunyjjuny"} />
        <Controller next carouselId={"jjunyjjuny"} />
      </ControllerBox>
    </Container>
  );
};

export default CarouselSample;