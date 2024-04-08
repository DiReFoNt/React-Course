import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getCommentById(id);
        setComments(response.data);
    });
    console.log(comments);

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>You open page with ID = {params.id}</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="post">
                    {post.id}. {post.title}
                    {post.body}
                </div>
            )}
            <h1>Comments</h1>
            {isComLoading ? (
                <Loader />
            ) : (
                <div>
                    {comments.map((com) => {
                        return (
                            <div key={com.id} style={{marginTop: 15}}>
                                <h5>{com.email}</h5>
                                <div>{com.body}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;
