import { useContext } from 'react';
import { UserContext } from '../contexts/UserContexts';

export function useUser(){
    const context = useContext(UserContext);

    if(!context){
        throw new Error("useUser must be used within a UserProvider Comp");
    }

    return context
}