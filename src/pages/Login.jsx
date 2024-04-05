import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <MyInput type="text" placeholder="Name" />
                <MyInput type="password" placeholder="Password"/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;
