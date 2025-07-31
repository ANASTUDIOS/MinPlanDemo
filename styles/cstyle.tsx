import { StyleSheet } from 'react-native';
import { colors } from './color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.background,
    fontFamily: "Brico-Regular",
    paddingTop: 6,
  },

   calendar: {
    justifyContent: "center",
    backgroundColor: colors.background,
    fontFamily: "Brico-Regular",
    marginTop:30,
    marginBottom:30,
    paddingTop:6,
    paddingBottom:6,
    width:320,
  },

  header: {
    color: "#FFFBF3",
    fontFamily: "Brico-Regular",
    fontWeight: 400,
    fontSize: 20,
    textAlign: "center",
    // backgroundColor: "#5da4d7ff",
    marginTop: 32,
    paddingLeft:70,
    paddingRight:70,
  },

  quote: {
    color: colors.background,
    fontFamily: "Brico-Bold",
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: colors.accent,
    // borderWidth: 2,
    // borderColor:"#373737",

    paddingTop: 10,
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:10,

    marginTop:32,
    marginLeft:32,
    marginRight:32,
    borderRadius:5,
  },

  text: {
    color: "#FFFBF3",
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Brico-Regular",
    textAlign: "center",
    backgroundColor: colors.background,
  },


  boldtext: {
    color: "#FFFBF3",
    fontWeight: 600,
    fontSize: 20,
    fontFamily: "Brico-Bold",
    textAlign: "center",
  },

  link: {
    fontSize : 20,
    textDecorationLine: "underline",
    fontFamily: "Brico-Regular",
    color: "#FFFBF3",
  },

  dropdownHeading: {
    color: "#FFFBF3",
    fontFamily: "Brico-Bold",
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: colors.headersBg,
    borderWidth: 2,
    borderColor:"#373737",

    width:320,
    paddingTop:10,
    paddingBottom:10,

    marginTop:32,
    marginLeft:32,
    marginRight:32,
    borderRadius:5,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
  },

    ThinDropdownHeading: {
    textAlign: "left",
    backgroundColor: colors.headersBg,
    borderWidth: 2,
    borderColor:"#373737",

    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,

    marginTop:32,
    marginLeft:32,
    marginRight:32,
    borderRadius:10,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
  },

  textboxAI: {
    textAlign: "left",
    backgroundColor: colors.headersBg,
    borderWidth: 2,
    borderColor:"#373737",
    marginLeft:32,
    marginRight:32,
    width:"auto"
  },


  dropdownitem: {
    color: "#FFFBF3",
    fontFamily: "FGrotesk-Medium",
    fontWeight: 400,
    fontSize: 14,
    backgroundColor: colors.background,
  },

  dropContainer: {
    backgroundColor: colors.background, //"#246adaff",
    fontFamily: "Brico-Regular",
    marginBottom:0,
  },

  textbox:{
    marginLeft:32,
    marginRight:32,
    display: "flex",
  },

  dropSubCont: {
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.background,
    fontFamily: "Brico-Regular",
    paddingLeft:10,
    paddingTop: 12,
    paddingBottom:12,
    width:320,

    marginTop:-5,
    marginLeft:32,
    marginRight:32,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderWidth:2,
    borderColor:"#373737",
    fontSize: 16,
  },

});