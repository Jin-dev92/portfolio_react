import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding-inline-start: 10px;

  & > li:not(:last-child) {
    margin-inline-end: 10px;
  }
`