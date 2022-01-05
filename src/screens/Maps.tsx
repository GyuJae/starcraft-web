import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMaps, IMap } from "../apis/map";
import Loader from "../components/Loader";

const Container = styled.main`
  max-width: ${(props) => props.theme.basicWidth};
  margin: 0px auto;
`;

const Title = styled.div`
  padding: 15px 10px;
  font-size: 20px;
  font-weight: 700;
`;

const ContentContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const SLink = styled.a`
  all: unset;
  cursor: pointer;
`;

const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MapImage = styled.img`
  width: 230px;
  height: 300;
`;

const MapTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;
`;

const MapDate = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
`;

const Maps = () => {
  const { isLoading, data, error, isError } = useQuery<IMap[]>("maps", getMaps);
  if (isError) {
    return <Container>Error: {error}</Container>;
  }
  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  return (
    <Container>
      <Title>Maps</Title>
      <ContentContainer>
        {data
          ?.sort((a, b) => parseInt(b.id) - parseInt(a.id))
          .map((item) => (
            <SLink href={item.url} key={item.id} target="_blank">
              <Map>
                <MapImage src={item.image} />
                <MapTitle>{item.title}</MapTitle>
                <MapDate>{item.date}</MapDate>
              </Map>
            </SLink>
          ))}
      </ContentContainer>
    </Container>
  );
};

export default Maps;
