import styled from "styled-components";

export const List = styled.ul`
  list-style: none;

  & li {
    float: ${props => props?.itemAlign === 'row' ? 'left' : undefined};
  }

  & li:not(:last-child) {
    margin-inline-end: ${props => props?.itemAlign === 'row' ? `${props.marginEnd}` : undefined};
    margin-block-end: ${props => props?.itemAlign === 'col' ? `${props.marginEnd}` : undefined};
  }
`