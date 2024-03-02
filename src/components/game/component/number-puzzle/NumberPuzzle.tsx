import React from "react";
import * as Style from "./style/NumberPuzzle.style";
import { NumberItem } from "./NumberItem.tsx";

export const NumberPuzzle = () => {
  const randomNumberArr = [1, 2, 3, 4, 5, 6, 7, 8, null].sort(
    () => Math.random() - 0.5,
  );
  const initNumberArr = [
    randomNumberArr.slice(0, 3),
    randomNumberArr.slice(3, 6),
    randomNumberArr.slice(6, 9),
  ];

  const [numberState, setNumberState] =
    React.useState<(number | null)[][]>(initNumberArr);

  const [count, setCount] = React.useState(0);
  return (
    <Style.Wrapper>
      {numberState.map((numberRow) => {
        return numberRow.map((number, idx) => (
          <NumberItem
            number={number}
            numberState={numberState}
            key={"numberItem_" + idx}
            setCount={setCount}
            count={count}
            setNumberState={setNumberState}
          />
        ));
      })}
    </Style.Wrapper>
  );
};
