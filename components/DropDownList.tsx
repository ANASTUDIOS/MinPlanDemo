import React, {useState} from 'react';
import { styles } from '../styles';
import {View, Text, FlatList} from 'react-native';


interface DropDownProps {
  name?: string;

}

const info:string[] = [
];

export default function DropedDown({name}: DropDownProps){
  const [isOpen, setIsOpen] = useState(false);
  const [viewHeight, setViewHeight] = useState(90);
  // const [task, setTasks] = useState("");

  const toggleThings = () => {
    setIsOpen(!isOpen);
    setViewHeight(viewHeight === 90 ? (90+50*(info.length+1)):90);
    // setTasks(task ==="" ? "hello":"hello");
  }

  // info[0] = task;

  return(
    <View style = {[styles.dropContainer , {height: viewHeight }]}>
      <Text onPress={toggleThings} style={styles.dropdownHeading}> {name}{isOpen ? "▲" : "▼"} </Text>
      {isOpen && (
          <FlatList
            style={styles.text}
            data={info} 
            scrollEnabled={false}
            renderItem={({item}) => (
              <View style={styles.dropSubCont}>
                <Text style={styles.dropdownitem}>{item}</Text>
              </View>
              
            )}
            
          />
      )}
    </View>
  );
}