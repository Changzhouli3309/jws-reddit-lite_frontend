import { useState } from "react"
import PostService from "../../service/PostService";

export const NewPost = ({ user, getUppdate }) => {

    const [post, setPost] = useState({
        senderId: 0,
        sender:"",
        title: "",
        content: ""
    })

    const changeInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const createPost = async () => {
        post.senderId = user.id;
        post.sender = user.username;
        const res = await PostService.newPost(user.token, post);
        if (res) {
            getUppdate();
        } else {
            alert("failed to create post");
        }
    }

    return (
        <>
            <h2>New Post</h2>
            <form>
                <label htmlFor="title">title:</label>
                <br />
                <input type="text" id="title" name="title" onChange={changeInput} />
                <br />
                <label htmlFor="content">content:</label>
                <br />
                <input type="text" id="content" name="content" onChange={changeInput} />
                <br />
                <input type="button" value="Send" onClick={createPost} />
            </form>
        </>
    )
} 