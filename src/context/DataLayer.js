import { createContext, useReducer, useContext } from "react";

// creating the data layer
export const StateContext = createContext();

// Building a provider to wrap up our entire app
export const DataLayer = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is use to pull data from the datalayer and also push into it.
export const useStateValue = () => useContext(StateContext);
