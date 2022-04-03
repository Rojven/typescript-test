import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(res.data);

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <List 
            items={todos}
            renderItems={(todo: ITodo) => 
                <TodoItem 
                    todo={todo} 
                    key={todo.id}
                />
            }
        />
    )
}

export default TodosPage;