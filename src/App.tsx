import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import { NavLink } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/todos'>Todos</NavLink>
            </div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/users' element={<UserPage/>}/>
                <Route path='/todos' element={<TodosPage/>}/>
                <Route path='/users/:id' element={<UserItemPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;