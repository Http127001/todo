import React from "react";
import { TextInput, View, Text } from "react-native";
import { INPUT_STYLES } from "./styles";
import { COLOR_CONT } from "../../constants/colors";

export default function InputField(props) {
  const { input, meta, ...inputProps } = props;
  const validationStyles =
    meta.touched && !meta.active
      ? meta.valid
        ? INPUT_STYLES.valid
        : INPUT_STYLES.invalid
      : null;

  console.log(meta.error);
  return (
    <View>
      <View style={[INPUT_STYLES.inputContainer, validationStyles]}>
        <TextInput
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          style={INPUT_STYLES.input}
        />
      </View>
      <Text style={INPUT_STYLES.error}>{meta.error}</Text>
    </View>
  );
}

// InputField.propTypes = {
//   input: React.PropTypes.shape({
//     onBlur: React.PropTypes.func.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     onFocus: React.PropTypes.func.isRequired,
//     value: React.PropTypes.any.isRequired,
//   }).isRequired,
//   meta: React.PropTypes.shape({
//     active: React.PropTypes.bool.isRequired,
//     error: React.PropTypes.string,
//     invalid: React.PropTypes.bool.isRequired,
//     pristine: React.PropTypes.bool.isRequired,
//     visited: React.PropTypes.bool.isRequired,
//   }).isRequired,
// };
