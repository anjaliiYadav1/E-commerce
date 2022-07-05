import React, { createContext, useContext, useReducer } from "react";

//for the datalayer
export const StateContext = createContext();


//provides the datalayer inside every component of the app 
//wraps the app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

//pull the information from the data layer
export const useStateValue = () => useContext(StateContext);