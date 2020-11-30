const Header = (props) => {
    return (
        <header style={{
            width: '100%',
            height: 'auto',
            padding: '2rem 1rem',
            backgroundColor: '#FFAB73',
            textAlign: "center",
        }}>{props.children}</header>
    );
};

export default Header;