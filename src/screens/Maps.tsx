import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMaps, IMap } from "../apis/map";

const Container = styled.main`
  max-width: ${(props) => props.theme.basicWidth};
  margin: 0px auto;
`;

const Maps = () => {
  const { isLoading, data, error, isError } = useQuery<IMap[]>("maps", getMaps);
  if (isError) {
    return <Container>Error: {error}</Container>;
  }
  if (isLoading) {
    return <Container>loading...</Container>;
  }
  console.log(data);
  return <Container>Maps</Container>;
};

export default Maps;
