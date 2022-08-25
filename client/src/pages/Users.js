import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BoxContainer, CircleBox, ImageContainer, UserContainer, UsernameStyle} from "./UsersStyled";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/getUsers')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <BoxContainer>
            <strong>Added users ⬇️</strong>
            {users.map((item, index) => (
                <UserContainer key={index}>
                    <UsernameStyle>
                    {item.username}
                    </UsernameStyle>
                    <CircleBox>
                        <ImageContainer  src={item.avatarUrl} alt="hhh"/>
                    </CircleBox>
                </UserContainer>

            ))}

        </BoxContainer>
    );
}

export default Users;