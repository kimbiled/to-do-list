import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState: {
        todoArr: []
    },
    reducers: {
        addTodo(state, action) {
            state.todoArr.push({
                id: Math.random().toFixed(10)+1,
                text: action.payload,
                completed:false,
            });
        },
        deleteTodo(state, action) {
            state.todoArr = state.todoArr.filter(item=>item.id !== action.payload.id)
        },
        editTodo(state, action) {
            const {id, newText} = action.payload;
            const todo = state.todoArr.find(item=> item.id === id);
            if(todo){
                todo.text = newText;
            }
        },
        updateOrderTodo(state, action) {
            state.todoArr = action.payload
        },
        taskDoneTodo(state, action) {
            const isTaskDone = state.todoArr.find(todo=> todo.id === action.payload.id);
            isTaskDone.completed = !isTaskDone.completed
        }
    },
});

export const {addTodo, deleteTodo, editTodo, updateOrderTodo, taskDoneTodo} = todoSlice.actions;
export default todoSlice.reducer;