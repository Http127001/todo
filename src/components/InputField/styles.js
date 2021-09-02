import { StyleSheet } from "react-native";
import { COLOR_CONT } from "../../constants/colors"

export const INPUT_STYLES = StyleSheet.create({
  input: {
    padding: 5,
    color: COLOR_CONT.WHITE,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: COLOR_CONT.GRAY,
    marginTop: 20,
  },
  valid: {
    borderColor: COLOR_CONT.GREEN,
  },
  invalid: {
    borderColor: COLOR_CONT.RED,
  },
  error: {
    color: COLOR_CONT.RED,
  },
});
