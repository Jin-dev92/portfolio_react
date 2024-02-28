import styled from "styled-components";
import { FlexContainer } from "../common/layout/FlexContainer";
import { MovieListComponent } from "./components/MovieListComponent";
import React from "react";
import AutoPlayVideoComponents from "./components/AutoPlayVideoComponents";
import { useQuery } from "react-query";
import { getPopularMovieList } from "../../api/api";

const NetflixBodyContainer = styled(FlexContainer)`
  & > .video-container {
    margin-block-end: 5vh;
  }
  margin-block-end: 5vh;
`;
const NetflixBody = () => {
  const [page, setPage] = React.useState(1);
  const config = {
    params: {
      page: page,
      region: "KR",
    },
  };

  const { data } = useQuery("getPopularMovieList", () =>
    getPopularMovieList(config),
  );
  const movieListSortedByPopular = data.data.results.sort(
    (a, b) => b.popularity - a.popularity,
  );
  // const banner = movieListSortedByPopular.sort(() => Math.random() - 0.5)[0]

  return (
    <NetflixBodyContainer>
      <FlexContainer className={"video-container"}>
        <AutoPlayVideoComponents banner={movieListSortedByPopular[0]} />
      </FlexContainer>
      <MovieListComponent
        dataList={movieListSortedByPopular}
        title={"인기 순 추천"}
        index={1}
      />
    </NetflixBodyContainer>
  );
};

export default NetflixBody;
