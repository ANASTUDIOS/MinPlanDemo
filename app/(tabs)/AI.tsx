import { Text, View } from "react-native";
import { styles } from "../../styles";

// type Dot = {
//   marked: boolean;
//   dotColor: string;
// }

export default function AIFunc() {
//     const [markedDates, setMarkedDates] = useState({});

//     const fetchNMarkEvents = async(year:any, month:any) => {
//       try{
//         const {status} = await Calendars.requestCalendarPermissionsAsync();
//         if(status !== 'granted'){
//           Alert.alert("Permissions not granted. Permisisons are needed to access this part of the app");
//           return;
//         }

//         const startDate = new Date(year, month - 1, 1);
//         const endDate = new Date(year, month, 0);
//         const calendars = await Calendars.getCalendarsAsync(Calendars.EntityTypes.EVENT);
//         const calendarIds = calendars.map(cal => cal.id);
//         const events = await Calendars.getEventsAsync(calendarIds, startDate, endDate);
//         const newMarkedDates:{[key:string]: Dot} = {};
//         events.forEach(event => {
//           const eventstartDate = new Date(event.startDate);
//           const eventYear = eventstartDate.getFullYear();
//           const eventMonth = (eventstartDate.getMonth() + 1).toString().padStart(2, '0');
//           const eventDay = eventstartDate.getDate().toString().padStart(2, '0');
//           const eventDate = `${eventYear}-${eventMonth}-${eventDay}`;
//           newMarkedDates[eventDate] = {marked: true, dotColor: 'orange'};

//         });
        
//         setMarkedDates(newMarkedDates);
//       } catch (error){
//         console.error("failed to fetch events", error);
//       }
//     };
    
//     useEffect (() => {
//         const today = new Date();
//         fetchNMarkEvents(today.getFullYear(), today.getMonth() + 1);
//       }, []);

//     const addEvent = async (day:any, titles:string, content:string, duration:number) => {
//       try{
//         const {status} = await Calendars.requestCalendarPermissionsAsync();
//         if(status !== 'granted'){
//           Alert.alert("Permissions not granted. Permisisons are needed to access this part of the app");
//           return;
//         }

//         const calendars = await Calendars.getCalendarsAsync(Calendars.EntityTypes.EVENT);
//         const defaultCalendar = calendars.find(cal => cal.isPrimary || calendars[0]);

//         if(!defaultCalendar){
//           Alert.alert("No default calendar found");
//           return;
//         }
        
//         const eventStartDay = new Date(day.year, day.month-1, day.day);
//         const eventDetails = {
//           title: titles,
//           startDate: eventStartDay,
//           endDate: new Date(day.year, day.month -1 , day.day, duration),
//           notes: content,
//         }

//         await Calendars.createEventAsync(defaultCalendar.id, eventDetails);
//         Alert.alert("New Even t added to your decivce calendar");

//         fetchNMarkEvents(day.year, day.month);
//       }catch (error){
//         console.log("failed to create event", error);
//       }
//     }

    return (
        <View style={styles.container}>
          <Text style={[styles.header, {paddingLeft:80, paddingRight:80}]}> Ask AI and get help on anything </Text>
          <View style={[styles.calendar, {paddingBottom:10, backgroundColor:  "#141414", borderWidth:2, borderRadius:10, borderColor:"#313030"}]}>
          </View>
        </View>
      );
}