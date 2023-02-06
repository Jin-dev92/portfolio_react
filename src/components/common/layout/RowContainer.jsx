const RowContainer = ({content}) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
    }
    return (
        <div style={containerStyle}>
            {content}
        </div>
    )
}

export default RowContainer