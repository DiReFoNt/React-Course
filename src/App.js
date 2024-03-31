import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/classCounter";

import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Javascript", body: "Description" },
        { id: 2, title: "Javascript 2", body: "Description" },
        { id: 3, title: "Javascript 3", body: "Description" },
    ]);

    const [title, setTitle] = useState("");

    const addNewPost = (e) => {
        e.preventDefault();

        console.log(title);
    };

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title post"
                />
                <MyInput type="text" placeholder="Description post" />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title="Посты JS" />
        </div>
    );
}

export default App;
