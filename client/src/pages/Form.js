import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './Form.module.css'
import axios from "axios";

const Form = () => {
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const users = useSelector(state => state.formReducer)
    const dispatch = useDispatch()
    function getValueImage(e) {
        setImageUrl(e.target.value)
    }
    function getNameValue(e) {
        setName(e.target.value)
    }
    function getUsername(e) {
        setUsername(e.target.value)
    }
    function addUser () {
        const user = {
            fullName: name,
            username: username,
            avatarUrl: imageUrl
        }
        axios.post('http://localhost:4000/addNewUser', user)
            .then(response => console.log(response.data))

        dispatch({type:'ADD_USER',payload:user})
        setName('')
        setImageUrl('')
        setUsername('')
    }
    function onSubmitHandler (event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmitHandler}>
        <div className={classes.formContainer}>
            <label>Name</label>
            <input type="text"
                   onChange={getNameValue}
                   value={name}
            />
            <label>Username</label>
            <input type="text"
                    onChange={getUsername}
                   value={username}
            />
            <label>Введіть посилання на зображення аватара:</label>
            <input
                placeholder='Введіть посилання на зображення аватара:'
                onChange={getValueImage}
                value={imageUrl}
            />
            <button className={classes.btn} onClick={addUser}>Add user</button>
        </div>
        </form>
    );
}

export default Form;