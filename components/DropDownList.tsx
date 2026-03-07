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
  note?: boolean;
  plus?: boolean;
}

export default function DroppedDown({name, note, plus}: DropDownProps){
  
  const [list, setList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [viewHeight, setViewHeight] = useState(87);
  const [isActive, setActive] = useState(false);
  const [Color, setColor] = useState( "#4F4444");

  const ChangeActive = () =>{
    setActive(!isActive);
    setColor(Color ===  "#4F4444"? "#FFFBF3":"#4F4444");
  }

  const toggleThings = (num:number) => {
    setIsOpen(!isOpen);

    if(list.length === 0){
      setViewHeight(87+45*num);
    }else{
       setViewHeight(viewHeight === 87? (87+45*list.length):87);
    }
  }

  const takecare = () =>{
    setViewHeight(87+45*(list.length+1));
    setAddItem(!AddItem);
    if(isOpen === false){
      toggleThings(1);
    }
  }


  const[AddItem, setAddItem] = useState(false);
  const [newItem, setNewItem] = useState('');

  const removeItem = (RemoveItem:string) =>{
    const newList = list.filter(item => item !==RemoveItem);
    setList(newList);
    setViewHeight(87+45*(list.length-1));
  }

  const itemManagement = (newItem:string) => {
    setViewHeight(87+45*(list.length+1));
    if(newItem.trim()){
    setList([...list, newItem]);
    }
    setNewItem('');
    setAddItem(false);
  };


  return(
    <View style = {[styles.UDropDownContainer , {height: viewHeight}]}>
      
      <View style={[styles.DDLHeaderContainer, {paddingTop:10, paddingBottom:10, flexDirection: "row", alignItems:"center", gap:10}]}>
          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => toggleThings(0)}>
            <Text onPress={() => toggleThings(0)} style={{color:"#FFFBF3", fontFamily: "Brico-Bold", fontWeight: 600, fontSize: 19, width:235, flexDirection: 'row'}}>
              {name}
              {isOpen ? <FontAwesome5 name="chevron-up" size={20} color="#4F4444" style={{padding:10}} /> : <FontAwesome5 name="chevron-down" size={20} color= "#4F4444" /> }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}  onPress={ChangeActive} >
            {note ? <AntDesign style = {{padding:4, margin:-4,}} onPress={ChangeActive} name="star" size={20} color={Color} /> : <AntDesign name="star" size={20} color={colors.background} /> }
          </TouchableOpacity>
          
          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => takecare()}>
            {plus ? <Entypo style = {{margin:-3, padding:4}} name="plus" color="white" size={25} /> : <Entypo name="plus" color={colors.background} size={25} /> }
          </TouchableOpacity>

      </View>
      
      {AddItem && (
        <View style = {[styles.textboxAI, {flexDirection: "row", alignItems:"center", gap:20, marginTop:-2, backgroundColor: colors.headersBg, borderWidth:2, borderColor: "#373737", borderRadius:0, padding:0}]}>
          <View style={{width:263}}>
            <TextInput  selectionColor="#373737" style = {{backgroundColor: colors.headersBg, color:colors.text, fontFamily: "Brico-Regular", fontWeight: 400, fontSize: 14, height:40, paddingLeft:5}} placeholder="Add new note here:" placeholderTextColor="#373737" value = {newItem} onChangeText={setNewItem}/>
          </View>
          
          <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}  onPress={() => itemManagement(newItem)}>
            <MaterialCommunityIcons name="sticker-check" color="white" size={20} onPress={() => itemManagement(newItem)}/>
          </TouchableOpacity>
        </View>
      )}

      {isOpen && (
          <FlatList
            style={styles.text}
            data={list} 
            scrollEnabled={false}
            renderItem={({item}) => (
              <View style={[styles.UItemContainer, {flexDirection: "row", gap:20, alignItems:"center", marginLeft:32, marginRight:32}]}>
                  <Text style={[styles.UItem, {/*backgroundColor:"#1af60aff"*/ width:255}]}>{item}</Text>
                  <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}  onPress={() => removeItem(item)}>
                    <FontAwesome6 name="xmark" color="white" size={20}/>
                  </TouchableOpacity>
              </View>
            )}
          />
      )}
    </View>
  );
}



// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useState } from 'react';
// import { FlatList, Text, View } from 'react-native';
// import { styles } from '../styles';


// interface DropDownProps {
//   name?: string;
// }

// const info:string[] = [
//   "hello",
//   "This"
// ];

// export default function DropedDown({name}: DropDownProps){
//   const [isOpen, setIsOpen] = useState(false);
//   const [viewHeight, setViewHeight] = useState(90);
//   // const [task, setTasks] = useState("");

//   const toggleThings = () => {
//     setIsOpen(!isOpen);
//     setViewHeight(viewHeight === 90 ? (90+30*(info.length+1)):90);
//     // setTasks(task ==="" ? "hello":"hello");
//   }

//   return(
//     <View style = {[styles.UDropDownContainer , {height: viewHeight }]}>
//       <Text onPress={toggleThings} style={styles.DDLHeaderContainer}> {name}{isOpen ? <AntDesign name="caretup" size={20} color="#FFFBF3" style={[styles.IconPad, {padding:30}]} />: <AntDesign name="caretdown" size={20} color="#FFFBF3" style={[styles.IconPad, {padding:30}]} />} </Text>
//       {isOpen && (
//           <FlatList
//             style={styles.text}
//             data={info} 
//             scrollEnabled={false}
//             renderItem={({item}) => (
//               <View style={styles.UItemContainer}>
//                 <Text style={styles.UItem}>{item}</Text>
//               </View>
              
//             )}
            
//           />
//       )}
//     </View>
//   );
// }