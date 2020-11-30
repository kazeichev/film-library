import { useContext } from "react";
import { Context } from "../store";
import Movie from "../components/Movie";
import Spinner from "../components/Spinner";

const Movies = () => {
    const [state] = useContext(Context)
    const { loading, movies, errorMessage } = state;

    return (
        <div style={{
            width: '100%',
            padding: '2rem 1rem',
            textAlign: 'center',
        }}>
            {loading
                ? <Spinner />
                : (errorMessage
                    ? <Error message={errorMessage} />
                    : movies.map((movie) => <Movie {...movie} key={movie.imdbID} />)
                )
            }
        </div>
    );
};

export default Movies;