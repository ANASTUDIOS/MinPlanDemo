import { StyleSheet } from "react-native";
import { colors } from "./color";

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
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 6,
    paddingBottom: 6,
    width: 320,
  },

  header: {
    color: "#FFFBF3",
    fontFamily: "Brico-Regular",
    fontWeight: 400,
    fontSize: 20,
    textAlign: "center",
    // backgroundColor: "#5da4d7ff",
    marginTop: 32,
    paddingLeft: 70,
    paddingRight: 70,
  },

  authHeader: {
    color: "#FFFBF3",
    fontWeight: 600,
    fontSize: 22,
    textAlign: "center",
    // backgroundColor: "#5da4d7ff",
    marginTop: 30,
    paddingLeft: 70,
    paddingRight: 70,
  },

  divider: {
    width: 400,
    color: "#FFFBF3",
    backgroundColor: "#373737",
    height: 1,
    margin: 30,
  },

  quote: {
    color: colors.accent,
    fontFamily: "Brico-Bold",
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.accent,

    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,

    marginTop: 32,
    marginLeft: 32,
    marginRight: 32,
    borderRadius: 10,
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
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: "Brico-Regular",
    color: "#FFFBF3",
  },

  DDLHeaderContainer: {
    color: "#FFFBF3",
    fontFamily: "Brico-Bold",
    fontWeight: 600,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: colors.headersBg,
    borderWidth: 2,
    borderColor: "#373737",

    width: 320,
    paddingLeft: 6,

    marginTop: 32,
    marginLeft: 32,
    marginRight: 32,

    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  IconPad: {
    paddingTop: 30,
  },

  ThinDropdownHeading: {
    textAlign: "left",
    backgroundColor: colors.headersBg,
    borderWidth: 2,
    borderColor: "#373737",

    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,

    marginTop: 32,
    marginLeft: 32,
    marginRight: 32,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  AuthTextBox: {
    textAlign: "left",
    backgroundColor: colors.headersBg,
    borderWidth: 1,
    borderColor: "#373737",
    marginLeft: 32,
    marginRight: 32,
    marginBottom:30,
    width:300,
    color: colors.text,
    fontFamily: "Brico-Regular",
    fontWeight: 400,
    fontSize: 16,
    borderRadius:6,
    paddingLeft:9,
  },

  textboxAI: {
    textAlign: "left",
    backgroundColor: colors.headersBg,
    borderWidth: 2,
    borderColor:"#373737",
    marginLeft:32,
    marginRight:32,
  },

  button:{
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: colors.accent,
    borderWidth: 1,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:9,
    paddingBottom:9,
    borderRadius:30,

  },

  UItem: {
    color: "#FFFBF3",
    fontFamily: "FGrotesk-Medium",
    fontWeight: 400,
    fontSize: 14,
    backgroundColor: colors.background,
  },

  UDropDownContainer: {
    backgroundColor: colors.background, //"#246adaff",
    fontFamily: "Brico-Regular",
    marginBottom: 0,
    height:85
  },

  textbox: {
    marginLeft: 32,
    marginRight: 32,
    display: "flex",
  },

  UItemContainer: {
    backgroundColor: colors.background,
    fontFamily: "Brico-Regular",
    paddingLeft: 10,
    paddingTop: 12,
    paddingBottom: 12,
    width: 320,

    marginTop: -5,
    marginLeft: 32,
    marginRight: 32,
    borderWidth: 2,
    borderColor: "#373737",
    fontSize: 16,
  },
});
