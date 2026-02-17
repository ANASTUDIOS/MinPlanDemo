import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { ReactNode, useEffect } from "react";
import { Text } from 'react-native';

interface Components {
    children: ReactNode
}

const GuestOnly = ({children}:Components) => {
    const {user, authChecked} = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user !== null){
            router.replace("/(tabs)")
        }else{
            router.replace("/(auth)/login")
        }
    }, [user, authChecked])

    if(!authChecked || user){
        return (
            <Text>Loading</Text>
        )
    }

    return children
}

export default GuestOnly