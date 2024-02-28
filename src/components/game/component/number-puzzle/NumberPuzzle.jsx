import React from 'react';
import NumberItem from "./NumberItem";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    height: 20vw;
    flex-wrap: wrap;
    margin: 0 auto;
    cursor: pointer;
`
const NumberPuzzle = () => {
    const [numberState, setNumberState] = React.useState(() => {
            let ar = [1, 2, 3, 4, 5, 6, 7, 8, null]
            ar.sort(() => Math.random() - 0.5)
            return [
                ar.slice(0, 3),
                ar.slice(3, 6),
                ar.slice(6, 9),
            ]
        }
    )
    const [count, setCount] = React.useState(0)
    return (
        <Wrapper>
            {
                numberState.map((numberRow) => {
                    return (
                        numberRow.map((number, idx) =>
                            <NumberItem number={number} numberState={numberState}
                                        key={'numberItem_' + idx}
                                        setCount={setCount}
                                        count={count}
                                        setNumberState={setNumberState}/>
                        )
                    )
                })
            }
        </Wrapper>
    )
}

export default NumberPuzzle