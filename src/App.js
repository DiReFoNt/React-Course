import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "aa", body: "Description" },
        { id: 2, title: "dd 2", body: "Description" },
        { id: 3, title: "aa 3", body: "Description" },
    ]);

    const [selectedSort, setSelectedSort] = useState("");

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        console.log(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    };

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: "15px 0" }} />
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sort by"
                    options={[
                        { value: "title", name: "For name" },
                        { value: "body", name: "For description" },
                    ]}
                />
            </div>
            {posts.length !== 0 ? (
                <PostList remove={removePost} posts={posts} title="Posts JS" />
            ) : (
                <h1 style={{ textAlign: "center" }}>Posts not fiend</h1>
            )}
        </div>
    );
}

export default App;
