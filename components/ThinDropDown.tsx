import React, {useState} from 'react';
import { colors, styles } from '../styles';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

interface DropDownProps {
  name?: string;
}

export default function ThinDropedDown({name}: DropDownProps){
  
  const [list, setList] = useState<string[]>([
  ]);
  
  const [isOpen, setIsOpen] = useState(false);
  const [viewHeight, setViewHeight] = useState(79);

  const toggleThings = () => {
    setIsOpen(!isOpen);

    if(list.length === 0){
      setViewHeight(viewHeight === 79? (83+40*1):79);
    }else{
       setViewHeight(viewHeight === 79? (83+40*list.length):79);
    }
  }

  const takecare = () =>{
    setAddItem(!AddItem);
    if(isOpen === false){
      toggleThings();
    }
  }


  const[AddItem, setAddItem] = useState(false);
  const [newItem, setNewItem] = useState('');

  const itemManagement = (newItem:string) => {

    if(newItem.trim()){
    setList([...list, newItem]);
    }
    setNewItem('');
    setAddItem(false);
    toggleThings();
  };

  return(
    // marginBottom:MarginBottom
    <View style = {[styles.dropContainer , {height: viewHeight, marginBottom:0 }]}>
      
      <View style={[styles.ThinDropdownHeading, {flexDirection: 'row', alignItems:"center", gap:20}]}>
        <View style={{width:150, marginRight:50}}>
          <Text style= {{color: "#FFFBF3", fontFamily: "Brico-Bold", fontWeight: 600, fontSize: 14, width:200}} onPress={toggleThings}> 
          {name}{isOpen ? "▲" : "▼"}
          </Text>
        </View>
        <AntDesign onPress={() => takecare()} name="pluscircleo" color="white" size={20} />
        <AntDesign onPress={() => takecare()} name="pluscircleo" color="white" size={20} />
      </View>
      
      {AddItem && (
        <View style = {[styles.textboxAI, {flexDirection: "row", alignItems:"center", gap:20, marginTop:-2, backgroundColor: colors.headersBg, borderWidth:2, borderColor: "#373737", borderRadius:0, padding:0}]}>
          <View style={{width:255}}>
            <TextInput style = {{backgroundColor: colors.headersBg, color:colors.text, fontFamily: "Brico-Regular", fontWeight: 400, fontSize: 14}} placeholder="add new task" placeholderTextColor="#373737" value = {newItem} onChangeText={setNewItem}/>
          </View>
          <AntDesign name="pluscircleo" color="white" size={20} onPress={() => itemManagement(newItem)}/>
        </View>
      )}

      {isOpen && (
          <FlatList
            style={styles.text}
            data={list} 
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