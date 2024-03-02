import * as Style from "./style/NumberItem.style";
import React from "react";

interface INumberItemProps {
  number: number | null;
  numberState: (number | null)[][];
  setNumberState: React.Dispatch<React.SetStateAction<(number | null)[][]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const NumberItem = (props: INumberItemProps) => {
  const { number, numberState, setNumberState, setCount, count } = props;
  const puzzleSize = 3;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const clickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    console.log(event);
    // const innerHTML = event.target;
    const innerHTML = "1"; //@todo event 확인 후 , 수정해야됨. 현재 해당 함수 동작안함.ㅁ
    // if (innerHTML === "") return;
    const blockInfo = canMoveBlock(parseInt(innerHTML));
    if (blockInfo) {
      moveBlock(blockInfo[0], blockInfo[1]);
      increaseCounter();
    } else {
      console.log("움직일 수 없습니다.");
    }
  };
  const moveBlock = (idx: number[], nullIdx: number[]) => {
    // 블록 움직이는 함수
    if (!idx || !nullIdx) {
      return;
    }
    setNumberState((state) => {
      const copy = state[nullIdx[0]][nullIdx[1]];
      state[nullIdx[0]][nullIdx[1]] = state[idx[0]][idx[1]];
      state[idx[0]][idx[1]] = copy;
      return [...state];
    });
  };
  const increaseCounter = () => {
    // 시행 횟수 카운터
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const canMoveBlock = (number: number) => {
    // 블록을 움직일 수 있는지 확인하는 함수
    let idx: number[] = [];
    let nullIdx;
    for (let i = 0; i < numberState.length; i++) {
      const arr = numberState[i];
      if (arr.findIndex((x) => x === number) > -1) {
        idx = [i, arr.findIndex((x) => x === number)];
      }
    }
    for (let i = 0; i < 4; i++) {
      // 클릭한 블록의 상하좌우에 빈칸(null)이 있는 경우에 이동 할 수 있다.
      if (
        idx[0] + dx[i] < puzzleSize &&
        idx[1] + dy[i] < puzzleSize &&
        idx[0] + dx[i] > -1 &&
        idx[1] + dy[i] > -1
      ) {
        if (numberState[idx[0] + dx[i]][idx[1] + dy[i]] === null) {
          nullIdx = [idx[0] + dx[i], idx[1] + dy[i]];
        }
      }
    }
    return nullIdx ? [idx, nullIdx] : false; // 클릭한 블록의 상하좌우에 빈칸(null)이 있는 경우에 해당 좌표를 리턴, 없는 경우 false 반환
  };

  return (
    <Style.NumberWrapper onClick={clickHandler}>{number}</Style.NumberWrapper>
  );
};
