import ToDoList from "./component/ToDoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  // state, prop
  const [toDoList, setToDoList] = useState([]); // Biến thứ nhất dùng để lưu trữ, biến thứ hai dùng để cập nhật
  const [textInput, setTextInput] = useState('');
  const TO_DO_LIST = 'TODO_APP';
  
  useEffect(() => {
    const storeToDoList = (localStorage.getItem(TO_DO_LIST));
    if (storeToDoList) {
      setToDoList(JSON.parse(storeToDoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TO_DO_LIST, JSON.stringify(toDoList));
  }, [toDoList]);

  const onTextInputChange = useCallback((e) => { // useCallback dùng để gọi lại giá trị sau mỗi lần re-render
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback((e) => {
    // them text input vao danh sach todo list
    setToDoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...toDoList
    ]);

    setTextInput("");
  }, [textInput, toDoList]);

  const onCheckButtonClick = useCallback((id) => {
    setToDoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, [])
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm"
        elemAfterInput={
          <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>Thêm</Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      >

      </Textfield>
      <ToDoList toDoList={toDoList} onCheckButtonClick={onCheckButtonClick} />
    </>
  );
}

export default App;
