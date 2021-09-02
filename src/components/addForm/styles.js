import { StyleSheet } from "react-native";
import { COLOR_CONT } from "../../constants/colors";

export const ADD_FORM_STYLES = StyleSheet.create({
  titleText:{ fontWeight: "bold", marginTop: 20,color:COLOR_CONT.WHITE },
  container: {
    padding: 45,
    width:'100%',
    backgroundColor:COLOR_CONT.BLACK
  },
  formSubmit: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 25,
    padding: 5,
    color:COLOR_CONT.WHITE,
    backgroundColor:COLOR_CONT.GREEN,
    width:'50%',
    textAlign:'center'
  },
});
