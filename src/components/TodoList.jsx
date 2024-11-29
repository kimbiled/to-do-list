import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { Reorder } from 'framer-motion';
import { updateOrderTodo } from '../store/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todo.todoArr); 
    const dispatch = useDispatch();

    const handleReorder = (newOrderedTodo) => {
        dispatch(updateOrderTodo(newOrderedTodo));
    };

    return (
        <Reorder.Group 
            axis="y" 
            values={todos.map(todo => todo.id)}
            onReorder={(ids) => {
            
                const newOrderedTodo = ids.map(id => todos.find(todo => todo.id === id));
                handleReorder(newOrderedTodo);
            }}
        >
            <ul className="flex flex-col gap-2">
                {todos.map((item) => (
                    <Reorder.Item 
                        key={item.id} 
                        value={item.id}
                        className="flex flex-row justify-between w-64"
                    >
                        <TodoItem {...item} />
                    </Reorder.Item>
                ))}
            </ul>
        </Reorder.Group>
    );
};

export default TodoList;
