import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles';
interface myHeaderProps {
    text: string;
    name: string;
    endText: string;
}

export const HeaderText: React.FC<myHeaderProps> = ({text, name, endText}) => {
    return (
        <Text style={[styles.header, {paddingLeft:70, paddingRight:70, marginTop:40}]}>{text} <Text style={styles.boldtext}>{name}</Text> {endText}</Text>
    )
}