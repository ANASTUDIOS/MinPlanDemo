import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { ReactNode, useEffect } from "react";
import { Text } from 'react-native';

interface Components {
    children: ReactNode
}

const UserOnly = ({children}:Components) => {
    const {user, authChecked} = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user === null){
            router.replace("/(auth)/login")
        }else{
            router.replace("/(tabs)")
        }
    }, [user, authChecked])

    if(!authChecked || !user){
        return (
            <Text>Loading</Text>
        )
    }

    return children
}

export default UserOnly