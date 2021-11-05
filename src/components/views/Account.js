import { useState } from 'react'
import UserService from '../../service/UserService';

export const Account = ({ setUser, setisLogin }) => {

    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const changeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const login = async () => {
        const data = await UserService.login(input);
        
        if (data === "error") {
            alert("login failed");
        } else {
            setUser({
                id: data.id,
                username: data.username,
                token: data.token
            });
            setisLogin(true);
        }
    };

    const register = async () => {
        const res = await UserService.register(input);

        if (res) {
            login();
        } else {
            alert("register failed");
        }
    };

    return (
        <>
            <h2>Account</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <br />
                <input type="text" id="username" name="username" onChange={changeInput} />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" id="password" name="password" onChange={changeInput} />
                <br />
                <input type="button" value="Login" onClick={login} />
                <input style={{ marginLeft: "3.5rem" }} type="button" value="Register" onClick={register} />
            </form>
        </>
    )
}