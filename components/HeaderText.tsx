import React from 'react';
import { styles } from '../styles';
import { View, Text} from 'react-native';

interface myHeaderProps {
    text: string;
}

export const HeaderText: React.FC<myHeaderProps> = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{text}</Text>
        </View>
    )
}
