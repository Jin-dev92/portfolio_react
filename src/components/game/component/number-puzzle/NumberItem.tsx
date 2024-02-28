import styled from "styled-components";

const NumberWrapper = styled.div`
  width: 6vw;
  height: 6vw;
  line-height: 6vw;
  background-color: ${(props) => (props.children ? "orange" : "transparent")};
  margin: 0 auto;
  text-align: center;
  font-size: 2vw;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.children ? "10px 10px 5px 0 rgba(0,0,0,0.75)" : undefined};
`;
const NumberItem = ({
  number,
  numberState,
  setNumberState,
  setCount,
  count,
}) => {
  const puzzleSize = 3;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const clickHandler = (event) => {
    const { innerHTML } = event.target;
    if (innerHTML === "") return;
    const blockInfo = canMoveBlock(parseInt(innerHTML));
    if (blockInfo) {
      moveBlock(blockInfo[0], blockInfo[1]);
      increaseCounter();
    } else {
      console.log("움직일 수 없습니다.");
    }
  };
  const moveBlock = (idx, nullIdx) => {
    // 블록 움직이는 함수
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
  const canMoveBlock = (number) => {
    // 블록을 움직일 수 있는지 확인하는 함수
    let idx;
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

  return <NumberWrapper onClick={clickHandler}>{number}</NumberWrapper>;
};

export default NumberItem;
