const NumberItem = ({number, numberState, setNumberState, setCount, count}) => {
    const itemStyle = {
        display: 'grid',
        width: 100,
        height: 100,
        backgroundColor: 'green',
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
        cursor: 'pointer',
    }

    const puzzleSize = 3
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    const clickHandler = (event) => {
        const {innerHTML} = event.target
        if(innerHTML === '') return
        const blockInfo = canMoveBlock(parseInt(innerHTML))
        if (blockInfo) {
            moveBlock(blockInfo[0], blockInfo[1])
            increaseCounter()
        } else {
            console.log('움직일 수 없습니다.')
        }
    }
    const moveBlock = (idx, nullIdx) => {
        setNumberState((state) => {
            const copy = state[nullIdx[0]][nullIdx[1]]
            state[nullIdx[0]][nullIdx[1]] = state[idx[0]][idx[1]]
            state[idx[0]][idx[1]] = copy
            return [...state]
        })
    }
    const increaseCounter = () => {
        setCount((prevCount)=>{
            return prevCount + 1
        })
    }
    const canMoveBlock = (number) => {
        let idx;
        let nullIdx;
        for (let i = 0; i < numberState.length; i++) {
            const arr = numberState[i]
            if (arr.findIndex(x => x === number) > -1) {
                idx = [i, arr.findIndex(x => x === number)]
            }
        }
        for (let i = 0; i < 4; i++) {
            if (idx[0] + dx[i] < puzzleSize && idx[1] + dy[i] < puzzleSize && idx[0] + dx[i] > -1 && idx[1] + dy[i] > -1) {
                if (numberState[idx[0] + dx[i]][idx[1] + dy[i]] === null) {
                    nullIdx = [idx[0] + dx[i], idx[1] + dy[i]]
                }
            }
        }
        return nullIdx ? [idx, nullIdx] : false
    }

    return (
        <div style={number ? itemStyle : {...itemStyle, backgroundColor:'inherit', cursor:"auto", color:'red', fontSize: 16}} onClick={clickHandler}>
            {number ? number : `${count}`}
        </div>
    )
}

export default NumberItem