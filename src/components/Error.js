const Error = ({message}) => {
    return (
        <div style={{
            width: '100%',
            height: '40px',
            backgroundColor: '#A64300',
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: '20px',
        }}>
            {message}
        </div>
    );
}

export default Error;