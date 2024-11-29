import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion"; // Для управления анимацией выхода
import { addTodo } from "./store/todoSlice";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import AlertMessage from "./components/AlertMessage";

function App() {
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const addTask = () => {
    if (text.trim() === "") {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Уведомление исчезает через 3 секунды
      return;
    }

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-8">
      <AnimatePresence>
        {showAlert && (
          <AlertMessage
            message="There should be text!"
            onClose={() => setShowAlert(false)}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row gap-4 w-auto">
        <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      </div>
      <div className="flex flex-col gap-4 p-4 text-black">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
