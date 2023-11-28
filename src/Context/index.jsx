import { createContext } from 'react';

const CreateContex = createContext();

function ContextProvider({children}) {
    return(
        <CreateContex.Provider>
            {children}
        </CreateContex.Provider>
    )
}

export {CreateContex, ContextProvider}