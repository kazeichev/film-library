const { useReducer, createContext } = require("react");
const { reducer, initialState } = require("./reducers");

export const Context = createContext(initialState);

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default Store;