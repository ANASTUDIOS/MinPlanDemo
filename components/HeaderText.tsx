import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles';

interface myHeaderProps {
    text: string;
    name: string;
}

export const HeaderText: React.FC<myHeaderProps> = ({text, name}) => {
    return (
        <Text style={[styles.header, {paddingLeft:40, paddingRight:40, marginTop:40}]}>{text}<Text style={styles.boldtext}>{name}</Text></Text>
    )
}