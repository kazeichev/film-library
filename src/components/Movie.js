const Movie = ({ Poster, Title, Year }) => {
    return (
        <div style={{
            display: 'inline-flex',
            flex: '33.3%',
            textAlign: 'center',
            flexDirection: 'column',
            paddingLeft: '15px',
            paddingRight: '15px',
        }}>
            <h2>{Title}</h2>
            <img src={Poster} alt="Плакат фильма" style={{
                marginBottom: '15px',
                maxWidth: '100%',
                maxHeight: '420px',
                objectFit: 'contain',
            }} />
            <p style={{
                margin: 0,
            }}>({Year})</p>
        </div>
    );
};

export default Movie;