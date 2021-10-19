import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: "Context API + Hooks",
};

const AppContenxt = React.createContext(initialState);

const Store = (props) => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    
    setState({
      ...state,
    });
  }

  return (
    <AppContenxt.Provider
      value={{
        number: state.number,
        text: state.text,
      }}
    >
      <div>{props.children}</div>
    </AppContenxt.Provider>
  );
};

export default Store;
