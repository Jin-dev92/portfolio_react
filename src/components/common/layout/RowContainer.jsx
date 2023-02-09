const RowContainer = ({children}) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
    }
    return (
        <div style={containerStyle}>
            {children}
        </div>
    )
}

export default RowContainer