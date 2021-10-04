import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../index';

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [])

    return <UserContext.Provider value={user} >
        {children}
    </UserContext.Provider>
}