import { account } from "@/lib/appwrite";
import { ID } from "appwrite";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserContextTypes{
    user: any
    login: (email: any, password:any) => Promise<void>;
    register: (email:any, password:any, name:any) => Promise<void>;
    logout: () => Promise<void>
    authChecked: any
}

interface Components {
    children: ReactNode
}

export const UserContext = createContext<UserContextTypes | null>(null);
export function UserProvider({children}:Components){
    const [user, setUser] = useState<any>(null);
    const [authChecked, setAuthChecked] = useState(false);

    async function login (email: any, password: any){
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        } catch (error:any){
            throw Error(error.message)
        }
    }

    async function register (email: any, password:any, name:any){
        try {
            await account.create(ID.unique(), email, password, name)
            await login(email, password)
        } catch (error:any){
            throw Error(error.message)
        }
    }

    async function logout(){
        await account.deleteSession("current");
        setUser(null)
    }

    async function getIntitialUserValue(){
        try {
            const response = await account.get()
            setUser(response)
        } catch (error){
            setUser(null)
        } finally {
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        getIntitialUserValue()
    }, [])


    return (
        <UserContext.Provider value = {{user, login, register, logout, authChecked}}>
            {children}
        </UserContext.Provider>
    )
}