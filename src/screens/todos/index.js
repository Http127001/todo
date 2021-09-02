import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  CheckBox,
  Platform,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../../actions/index';
import { TODOS_STYLES } from './styles';
import { COLOR_CONT } from '../../constants/colors';
import { TODOS_CONST } from './constant';
import DateTimePicker from '@react-native-community/datetimepicker';

const TodoList = (props) => {
  const { todos, toggleTodo, addTodo, editTodo, deleteTodo } = props;
  const [cate, setCate] = useState('all');
  const [priority, setPriority] = useState('heigh');
  const [isModalVisible, toggleModal] = useState(false);
  const [showPicker, setPicker] = useState(false);
  const [title, settitle] = useState('');
  const [date, setDate] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');

  function submit() {
    if (isModalVisible) {
      if (isEdit) {
        editTodo(id, title, priority, date);
        setIsEdit(false);
      } else {
        if (title && date) {
          addTodo(title, priority, date);
        }
      }
      toggleModal(!isModalVisible);
      settitle(null);
      setDate(null);
      setPriority('heigh');
      setId(null);
      return;
    } else {
      toggleModal(!isModalVisible);
      return;
    }
  }
  const todoData =
    cate == 'all'
      ? todos
      : cate == 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setPicker(false);
    setDate(currentDate);
  };
  const ListItems = (item, index) => {
    const completedTodo = item.item.completed;
    const idTodo = item.item.id;
    const titleTodo = item.item.title;
    const priorityTodo = item.item.priority;
    const dateTodo = item.item.date;

    let fullPriority;
    if (priorityTodo === 'heigh') {
      fullPriority = 'Heigh';
    }
    if (priorityTodo === 'medium') {
      fullPriority = 'Medium';
    }
    if (priorityTodo === 'low') {
      fullPriority = 'Low';
    }
    if (priorityTodo === 'vlow') {
      fullPriority = 'Very Low';
    }

    return (
      <View key={index} style={TODOS_STYLES.itemContainer} key={index}>
        <View style={TODOS_STYLES.checkBoxContsiner}>
          <CheckBox value={completedTodo} onChange={() => toggleTodo(idTodo)} />
        </View>
        <View style={TODOS_STYLES.textView}>
          <Text
            numberOfLines={2}
            style={[
              TODOS_STYLES.titleText,
              completedTodo ? { textDecorationLine: 'line-through' } : {},
            ]}
          >
            {titleTodo}
          </Text>
          <Text numberOfLines={1} style={TODOS_STYLES.priorityText}>
            {fullPriority}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsEdit(true);
            setId(idTodo);
            settitle(titleTodo);
            setDate(dateTodo);
            setPriority(priorityTodo);
            toggleModal(true);
          }}
          style={TODOS_STYLES.editBotttonConatiner}
        >
          <Text>{TODOS_CONST.EDIT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteTodo(idTodo)}
          style={TODOS_STYLES.deleteBottonContaainer}
        >
          <Text>{TODOS_CONST.DELETE}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const TabBar = () => {
    return (
      <View style={TODOS_STYLES.tabContainer}>
        <TouchableOpacity
          onPress={() => setCate('all')}
          style={TODOS_STYLES.tab}
        >
          <Text
            style={[
              { alignSelf: 'center' },
              cate == 'all'
                ? {
                    color: COLOR_CONT.UI_BLUE,
                    textDecorationLine: 'underline',
                  }
                : {},
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCate('completed')}
          style={TODOS_STYLES.tab}
        >
          <Text
            style={[
              { alignSelf: 'center' },
              cate == 'completed'
                ? {
                    color: COLOR_CONT.UI_BLUE,
                    textDecorationLine: 'underline',
                  }
                : {},
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCate('incomplete')}
          style={TODOS_STYLES.tab}
        >
          <Text
            style={[
              { alignSelf: 'center' },
              cate == 'incomplete'
                ? {
                    color: COLOR_CONT.UI_BLUE,
                    textDecorationLine: 'underline',
                  }
                : {},
            ]}
          >
            Incomplete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Model = () => {
    return (
      <View style={TODOS_STYLES.ModelContainer}>
        <View style={TODOS_STYLES.inputContainer}>
          <TextInput
            style={TODOS_STYLES.textinput}
            placeholderTextColor={COLOR_CONT.WHITE}
            name='title'
            value={title}
            onChangeText={(text) => settitle(text)}
            placeholder='title'
          />
          <TextInput
            style={TODOS_STYLES.textinput}
            placeholderTextColor={COLOR_CONT.WHITE}
            name='date'
            value={date}
            onChangeText={setDate}
            placeholder='Date'
          />
          {/* <TouchableOpacity
            onPress={() => setPicker(true)}
            style={TODOS_STYLES.dateButton}
          >
            <Text>{date ?? "Select Date"}</Text>
          </TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )} */}
        </View>
        <View style={TODOS_STYLES.priorityContainer}>
          <TouchableOpacity
            onPress={() => setPriority('heigh')}
            style={[
              TODOS_STYLES.priorityButton,
              {
                backgroundColor:
                  priority == 'heigh'
                    ? COLOR_CONT.WHITE
                    : COLOR_CONT.TRANSPARENT,
              },
            ]}
          >
            <Text
              style={{
                alignSelf: 'center',
                color:
                  priority == 'heigh' ? COLOR_CONT.UI_BLUE : COLOR_CONT.WHITE,
                fontSize: 15,
              }}
            >
              High
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPriority('medium')}
            style={[
              TODOS_STYLES.priorityButton,
              {
                backgroundColor:
                  priority == 'medium'
                    ? COLOR_CONT.WHITE
                    : COLOR_CONT.TRANSPARENT,
              },
            ]}
          >
            <Text
              style={{
                alignSelf: 'center',
                color:
                  priority == 'medium' ? COLOR_CONT.UI_BLUE : COLOR_CONT.WHITE,
                fontSize: 15,
              }}
            >
              Medium
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPriority('low')}
            style={[
              TODOS_STYLES.priorityButton,
              {
                backgroundColor:
                  priority == 'low' ? COLOR_CONT.WHITE : COLOR_CONT.TRANSPARENT,
              },
            ]}
          >
            <Text
              style={{
                alignSelf: 'center',
                color:
                  priority == 'low' ? COLOR_CONT.UI_BLUE : COLOR_CONT.WHITE,
                fontSize: 15,
              }}
            >
              Low
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPriority('vlow')}
            style={[
              TODOS_STYLES.priorityButton,
              {
                backgroundColor:
                  priority == 'vlow'
                    ? COLOR_CONT.WHITE
                    : COLOR_CONT.TRANSPARENT,
              },
            ]}
          >
            <Text
              style={{
                alignSelf: 'center',
                color:
                  priority == 'vlow' ? COLOR_CONT.UI_BLUE : COLOR_CONT.WHITE,
                fontSize: 15,
              }}
            >
              Very Low
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={TODOS_STYLES.container}>
      <View style={{ flex: 0.25, justifyContent: 'center', width: '100%' }}>
        <Text style={{ fontSize: 25 }}> My Day</Text>
      </View>
      <TabBar />
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={TODOS_STYLES.scrollView}
      >
        {todoData.length > 0 ? (
          <FlatList
            style={TODOS_STYLES.flatlist}
            data={todoData}
            renderItem={ListItems}
          />
        ) : (
          <Text>No task found</Text>
        )}
      </ScrollView>
      {isModalVisible && <Model />}
      <View style={TODOS_STYLES.addNewView}>
        <TouchableOpacity
          onPress={() => {
            submit();
          }}
          style={{
            backgroundColor: isModalVisible
              ? COLOR_CONT.WHITE
              : COLOR_CONT.UI_BLUE,
            width: '100%',
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: isModalVisible ? COLOR_CONT.UI_BLUE : COLOR_CONT.WHITE,
              alignSelf: 'center',
              fontSize: 24,
            }}
          >
            {isEdit ? 'Update Task' : TODOS_CONST.ADD_NEW_TASK}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(action.toggleTodo(id)),
  addTodo: (title, priority, date) =>
    dispatch(action.addTodo(title, priority, date)),
  editTodo: (id, title, priority, date) =>
    dispatch(action.editTodo(id, title, priority, date)),
  deleteTodo: (id) => dispatch(action.deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
