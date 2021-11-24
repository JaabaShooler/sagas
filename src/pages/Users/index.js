import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { LOAD_USERS } from "../../redux/reducers/Users/actions";
import { selectUsers } from "../../redux/reducers/Users/selectors";

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    React.useEffect(() => {
        dispatch({ type: LOAD_USERS })
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {
                users.loading ? <div>Loading...</div> :
                users.data?.map( u => (
                    <div key={u.email}>
                        <br/>
                        <p>{u.name}</p>
                        <p>{u.username}</p>
                        <p>{u.email}</p>
                        <p>{u.phone}</p>
                        <br/>
                    </div>
                ) )
            }
        </div>
    )
}