import React, { useState } from "react";
import { deleteTodo, editTodo, taskDoneTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const TodoItem = ({ id, text, completed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(""); // Пустое поле изначально

    const dispatch = useDispatch();

    const handleEditing = () => {
        setNewText(text); // Устанавливаем текущий текст задачи
        setIsEditing(true); // Включаем режим редактирования
    };

    const handleSave = () => {
        if (newText.trim() === "") {
            alert("Text cannot be empty!");
            return;
        }
        dispatch(editTodo({ id, newText })); // Сохраняем изменённый текст
        setIsEditing(false); // Выходим из режима редактирования
    };

    const handleCancel = () => {
        setIsEditing(false); // Просто закрываем режим редактирования
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {isEditing ? (
                    <motion.div
                        className="flex flex-row gap-2 items-center justify-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <input
                            type="text"
                            className="border p-2 rounded-xl"
                            value={newText} // Связано с состоянием `newText`
                            onChange={(e) => setNewText(e.target.value)} // Обновляем текст
                        />
                        <button onClick={handleSave} className="w-20 h-8 bg-yellow-300 rounded-2xl">
                            Save
                        </button>
                        <button onClick={handleCancel} className="w-20 h-8 bg-red-300 rounded-2xl">
                            Cancel
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        className="flex flex-row gap-2 items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => dispatch(taskDoneTodo({ id }))}
                            className="w-4 h-4 border-blue-200"
                        />
                        <span
                            className={`${
                                completed ? "line-through text-gray-400" : ""
                            }`}
                        >
                            {text}
                        </span>
                        <button
                            className="w-20 h-8 bg-red-300 rounded-2xl"
                            onClick={() => dispatch(deleteTodo({ id }))}
                        >
                            Delete
                        </button>
                        <button className="w-20 h-8 bg-blue-300 rounded-2xl" onClick={handleEditing}>
                            Edit
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};

export default TodoItem;
