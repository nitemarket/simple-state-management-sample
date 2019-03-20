
// create a context provider to store all states in one place

import React, { createContext, useContext, useReducer } from 'react';

const StateContext = createContext();

// for consumer
export const useStore = () => {
  const { state, dispatch } = useContext(StateContext);
  return [state, dispatch];
};

// store initialization
export const StoreProvider = ({ initialState, reducers = [], children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    return reducers.reduce((accStates, reducer) => {
      return reducer(accStates, action) || accStates;
    }, state);
  }, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
