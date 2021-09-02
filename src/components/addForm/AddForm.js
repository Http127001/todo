import React from "react";
import { reduxForm, Field } from "redux-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import InputField from "../InputField";
import { ADD_FORM_STYLES } from "./styles";
import { ADD_FORM_CONST } from "./constant";
import { COLOR_CONT } from "../../constants/colors";
import { validate } from "./validation";

class AddForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    const { editMode, title, priority } = this.props._reduxForm.route.params;
    return (
      <ScrollView
        style={ADD_FORM_STYLES.container}
        keyboardShouldPersistTaps={"handled"}
      >
        <Text style={ADD_FORM_STYLES.titleText}>{ADD_FORM_CONST.TITLE}</Text>
        {/* <Field name={"title"} component={InputField} placeholder={"Title"} 
          defaultValue={priority}
        /> */}
        <Field
          name={ADD_FORM_CONST.TITLE_SMALL}
          component={InputField}
          placeholder={editMode ? title : ADD_FORM_CONST.TITLE}
          multiline={true}
          numberOfLines={1}
          defaultValue={title}
          placeholderTextColor={COLOR_CONT.GRAY}
        />
        <Text style={ADD_FORM_STYLES.titleText}>{ADD_FORM_CONST.PRIORITY}</Text>
        <Field
          name={ADD_FORM_CONST.PRIORITY_SMALL}
          component={InputField}
          placeholder={editMode ? priority : ADD_FORM_CONST.PRIORITY}
          multiline={true}
          numberOfLines={4}
          defaultValue={priority}
          placeholderTextColor={COLOR_CONT.GRAY}
        />
        <TouchableOpacity
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={ADD_FORM_STYLES.formSubmit}>
            {editMode ? ADD_FORM_CONST.EDIT : ADD_FORM_CONST.ADD}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default reduxForm({
  form: "signIn",
  validate,
})(AddForm);
