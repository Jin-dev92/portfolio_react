import React from 'react';
import NumberItem from "./NumberItem";

const NumberPuzzle = () => {
    const puzzleContainerStyle = {
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(3, minmax(auto, 1fr))',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 320,
        height: 320,
        margin: '0 auto'
    }
    const labelStyle = {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'red',
        marginTop: 8,
    }
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
        <div>
            <div style={puzzleContainerStyle}>
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
            </div>
            <div style={labelStyle}>{count}</div>
        </div>
    )
}

export default NumberPuzzle