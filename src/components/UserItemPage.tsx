import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';

// interface UserItemPageParams {
//     id: string;
// }

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);

    const navigate = useNavigate();
    const {id} = useParams<string>()

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(res.data);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <button
                onClick={() => navigate('/users')}
            >
                Back
            </button>
            <h1>Страница пользователя: {user?.name}</h1>
            <div>
                Проживает в городе {user?.address.city} на улице {user?.address.street}
            </div>
        </div>
    )
}

export default UserItemPage;