import DroppedDown from "@/components/DropDownList";
import { ScrollView, Text, View } from "react-native";
import { HeaderText } from '../../components/HeaderText';
import { styles } from "../../styles";
export default function Index() {

  const quoteList:string[] = [
    "Keep going! Your future is worth the effort!", 
    "Keep moving and grooving, college awaits you.",
    "Don't give up! You'll thank yourself later.",
    "Take it a day at at a time. One step forward is all that is needed!"
  ]

  const rand: number = Math.floor(Math.random()*(4)) + 0;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <HeaderText text="Welcome to" name="MinPlan." endText ="Jump right in."></HeaderText>
        <Text style={styles.quote}>{quoteList[rand]}</Text>
        <DroppedDown name="⏳ Weekly Goals  " note={true} plus={true}/>
        <DroppedDown name="❤️ Favorited Colleges  " note={false} plus={false}/>
        {/* <Text style={[styles.quote, {paddingTop:65, paddingBottom:65, fontFamily:"Brico-Bold", fontWeight:600, backgroundColor:"#0D0D0D"}]}>        PlanningCO *2025       </Text> */}
      </View>
      </ScrollView>
    </View>
  )
}

//</ScrollView>  );