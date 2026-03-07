import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'; // TouchableOpacity
import { colors, styles } from '../styles';
interface DropDownProps {
  name?: string;
  num?:number;
  boo?:boolean;
}

export default function ThinDropedDown({name,num,boo}: DropDownProps){
  
  const [list, setList] = useState<string[]>([
  ]);
  
  const [isOpen, setIsOpen] = useState(false);
  const [viewHeight, setViewHeight] = useState(82);
  const [isActive, setActive] = useState(false);
  const [Color, setColor] = useState( "#4F4444");

  const toggleThings = (numb:number) => {
    setIsOpen(!isOpen);

    if(list.length === 0){
      setViewHeight(82+45*numb);
    }else{
       setViewHeight(viewHeight === 82? (86+45*list.length):82);
    }
  }

  const takecare = () =>{
    setViewHeight(82+45*(list.length+1));
    setAddItem(!AddItem);
    if(isOpen === false){
      toggleThings(1);
    }
  }

  const ChangeActive = () =>{
    setActive(!isActive);
    setColor(Color ===  "#4F4444"? "#FFFBF3":"#4F4444");
  }


  const[AddItem, setAddItem] = useState(false);
  const [newItem, setNewItem] = useState('');

  const removeItem = (RemoveItem:string) =>{
    const newList = list.filter(item => item !==RemoveItem);
    setList(newList);
    setViewHeight(86+45*(list.length-1));
  }

  const itemManagement = (newItem:string) => {
    setViewHeight(82+45*(list.length+1));
    if(newItem.trim()){
    setList([...list, newItem]);
    }
    setNewItem('');
    setAddItem(false);
  };



  return(
    <View style = {[styles.UDropDownContainer , {height: viewHeight, marginBottom:0 }]}>
      
      <View style={[styles.DDLHeaderContainer, {paddingTop:10, paddingBottom:10, flexDirection: "row", alignItems:"center", gap:num}]}>
          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}   onPress={() => toggleThings(0)}>
            <Text onPress={() => toggleThings(0)} style={{color:"#FFFBF3", fontFamily: "Brico-Bold", fontWeight: 600, fontSize: 14, width:240, paddingLeft:10}}>
              {name}
              {isOpen ? <FontAwesome5 name="chevron-up" size={16} color="#4F4444" style={{paddingLeft:10}}/> : <FontAwesome5 name="chevron-down" size={16} color="#4F4444" style={{paddingLeft:10}}/> }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}  onPress={ChangeActive}>
          {boo ?  <AntDesign onPress={ChangeActive} name="star" size={20} color={Color} /> : <AntDesign name="star" size={20} color={colors.background} />}
          </TouchableOpacity>

          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => takecare()}>
            <Entypo style={{marginLeft:-2, marginTop:-2}} name="plus" color="white" size={25} />
          </TouchableOpacity>
      </View>

      {/* <View style={[styles.ThinDropdownHeading, {flexDirection: 'row', alignItems:"center", gap:20}]}>
        <View style={{width:150, marginRight:50}}>
          <Text style= {{color: "#FFFBF3", fontFamily: "Brico-Bold", fontWeight: 600, fontSize: 14, width:200}} onPress={toggleThings}> 
          {name}{isOpen ? "▲" : "▼"}
          </Text>
        </View>
        <FontAwesome6 onPress={() => takecare()} name="circle-plus" color="white" size={20} />
        <Ionicons name="notifications" color="white" size={20} />
      </View> */}
      
      {AddItem && (
        <View style = {[styles.textboxAI, {flexDirection: "row", alignItems:"center", gap:20, marginTop:-2, backgroundColor:colors.headersBg, borderWidth:2, borderColor: "#373737", borderRadius:0, marginLeft:32, marginRight:32, width:320}]}>
          <TextInput  selectionColor="#373737" style = {{backgroundColor: colors.headersBg, color:colors.text, fontFamily: "Brico-Regular", fontWeight: 400, fontSize: 14, height:40, width:236, paddingLeft:5}} maxLength = {40} placeholder="Add new task here:" placeholderTextColor="#373737" value = {newItem} onChangeText={setNewItem}/>
            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => itemManagement(newItem)}>
              <MaterialCommunityIcons style={{paddingLeft:30}}name="sticker-check" color="white" size={20}/>
            </TouchableOpacity>
        </View>
      )}

      {isOpen && (
          <FlatList
            style={styles.text}
            data={list} 
            scrollEnabled={false}
            renderItem={({item}) => (
              <View style={[styles.UItemContainer, {borderRadius:0, flexDirection: "row", gap:20, alignItems:"center", marginLeft:32, marginRight:32}]}>
                <View style={{width:260}}>
                  <Text style={[styles.UItem, {borderRadius:0}]}>{item}</Text>
               </View>
               <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => removeItem(item)}>
                <FontAwesome6 style={{marginLeft:-2, marginBottom:-2,}} name="xmark" color="white" size={20} onPress={() => removeItem(item)}/>
               </TouchableOpacity>
              </View>
            )}
          />
      )}
    </View>
  );
}