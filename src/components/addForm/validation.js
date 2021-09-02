import { ADD_FORM_CONST } from "./constant";

export const validate = (values) => {
  const error = {};
  error.title = "";
  error.priority = "";

  var titleValue = values.title;
  var priorityValue = values.priority;

  if (values.title === undefined) {
    titleValue = "";
  }
  if (values.priority === undefined) {
    priorityValue = "";
  }

  if (titleValue.length < 1) {
    error.title = ADD_FORM_CONST.REQ_ERROR_TITLE;
  }
  if (priorityValue.length < 1) {
    error.priority = ADD_FORM_CONST.REQ_ERROR_PRIORITY;
  }
  return error;
};
