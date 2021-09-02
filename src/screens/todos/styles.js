import { StyleSheet, StatusBar } from "react-native";
import { COLOR_CONT } from "../../constants/colors";
export const TODOS_STYLES = StyleSheet.create({
  checkBoxContsiner: {
    height: "100%",
    justifyContent: "center",
    alignContent: "flex-start",
  },
  editBotttonConatiner: {
    height: "100%",
    width: 35,
    justifyContent: "center",
  },
  deleteBottonContaainer: {
    height: "100%",
    width: 35,
    justifyContent: "center",
  },
  tabContainer: {
    flex: 0.1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  tab: { flex: 0.25, alignContent: "flex-start" },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLOR_CONT.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlist: { flex: 1, width: "100%" },
  scrollView: { flex: 0.9, width: "100%" },
  addNewView: {
    justifyContent: "flex-end",
    width: "50%",
    // height: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  inputContainer: { width: "100%", height: "50%", alignSelf: "flex-start" },
  textinput: {
    width: "80%",
    height: "40%",
    borderBottomColor: COLOR_CONT.WHITE,
    borderBottomWidth: 1,
    color: COLOR_CONT.WHITE,
    alignSelf: "center",
  },
  dateButton: {
    width: "80%",
    height: "40%",
    borderBottomColor: COLOR_CONT.WHITE,
    borderBottomWidth: 1,
    color: COLOR_CONT.WHITE,
    alignSelf: "center",
  },
  priorityContainer: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  priorityButton: {
    height: 30,
    width: 80,
    borderColor: COLOR_CONT.WHITE,
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 10,
  },
  ModelContainer: {
    backgroundColor: COLOR_CONT.UI_BLUE,
    justifyContent: "flex-end",
    width: "100%",
    height: "60%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  priorityText: {
    flex: 0.65,
    color: COLOR_CONT.GRAY,
    fontSize: 15,
  },
  titleText: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLOR_CONT.TRANSPARENT,
    color: COLOR_CONT.BLACK,
    fontSize: 22,
  },
  itemContainer: {
    flexDirection: "row",
    shadowColor: COLOR_CONT.BLACK,
    elevation: 3,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "center",
    height: 110,
    backgroundColor: COLOR_CONT.WHITE,
    margin: 5,
  },
  textView: { flexDirection: "column", flex: 0.8 },
});