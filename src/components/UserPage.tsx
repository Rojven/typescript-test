import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
        
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(res.data);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <List 
            items={users}
            renderItems={(user: IUser) => 
                <UserItem 
                    onClick={(user) => navigate(`/users/${user.id}`)} 
                    user={user} 
                    key={user.id}
                />
            }
        />
    )
}

export default UserPage;