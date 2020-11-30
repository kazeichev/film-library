const Error = ({message}) => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '40px',
            backgroundColor: '#A64300',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF',
            fontSize: '20px',
        }}>
            {message}
        </div>
    );
}

export default Error;