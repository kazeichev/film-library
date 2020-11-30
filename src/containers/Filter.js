import React, { useContext } from "react";
import Header from "../components/Header";

import { SEARCH_HOST, SEARCH_HOST_API_KEY, SEARCH_MOVIES_FAILURE, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS } from "../constances";
import { Context } from "../store";

const Filter = () => {
    const [state, dispatch] = useContext(Context);

    const onChange = (e) => {
        const q = e.target.value;

        if (q.length < 3) {
            return;
        }

        dispatch({
            type: SEARCH_MOVIES_REQUEST
        });

        fetch(`${SEARCH_HOST}?apiKey=${SEARCH_HOST_API_KEY}&s=${q}`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === 'True') {
                    dispatch({
                        type: SEARCH_MOVIES_SUCCESS,
                        payload: jsonResponse.Search,
                    })
                } else {
                    dispatch({
                        type: SEARCH_MOVIES_FAILURE,
                        payload: jsonResponse.Error,
                    })
                }
            });
    };

    return (
        <Header>
            <input
                type="text"
                defaultValue={state.query}
                onChange={onChange}
                placeholder="Введите название фильма..."
                style={{
                    width: '400px',
                    height: '2rem',
                    padding: '5px 10px',
                    border: 0,
                    outline: 'none',
                }}
            />
        </Header>
    );
};

export default Filter;