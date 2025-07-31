import { Text, View } from "react-native";
import { colors, styles } from "../../styles";
import {Calendar} from 'react-native-calendars';
export default function CalenderFunc() {
    return (
        <View style={styles.container}>
          <Text style={[styles.header, {paddingLeft:80, paddingRight:80}]}> Use the calendar 📅 to schedule future goals and objectives</Text>
          <View style={[styles.calendar, {paddingBottom:10, backgroundColor:  "#141414", borderWidth:2, borderRadius:10, borderColor:"#313030"}]}>
            <Calendar theme={{textDisabledColor:"#303030", arrowColor: colors.text, selectedDayBackgroundColor:"#141414", todayTextColor: "#8C94E1", dayTextColor:"#FFFBF3", textDayFontSize: 20, textMonthFontSize:16, monthTextColor:"#FFFBF3", calendarBackground: "#141414", textDayHeaderFontFamily:"Brico-Regular", textMonthFontFamily: "Brico-Bold", textDayFontFamily: "Brico-Regular"}}/>
          </View>
        </View>
      );
}