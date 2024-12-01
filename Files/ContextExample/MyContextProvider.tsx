import React, {createContext, useState} from 'react';

interface MyContextType {
  value: string;
  setValue: (value: string) => void;
}

// Create the context with a default value
const defaultContext: MyContextType = {
  value: 'Default Value',
  setValue: () => {}, // No-op function for default
};

// Create a Context
export const MyContext = createContext<MyContextType>(defaultContext);

// Provider Component
export const MyProvider = ({children}) => {
  const [value, setValue] = useState('Initial Value');

  return (
    <MyContext.Provider value={{value, setValue}}>
      {children}
    </MyContext.Provider>
  );
};
