import { useState, useEffect } from "react";
import PostService from "../../service/PostService";
import UserService from "../../service/UserService";
import { NewPost } from "../Items/NewPost";
import { Post } from "../Items/Post";

export const PostView = ({ user, setisLogin }) => {

    const [postList, setPostList] = useState([])
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        const getList = async () => {
            const data = await PostService.getAllPost(user.token)
            setPostList(data);
        }
        getList();
    }, [isUpdate, user])



    const getUppdate = () => {
        setIsUpdate(!isUpdate);
    }

    const logout = async () => {
        const res = await UserService.logout(user.token);
        if (res) {
            setisLogin(false);
        } else {
            alert("logout failed");
        }
    }

    return (<>
        <h2>Welcome {user.username} </h2>
        <input type="button" value="Logout" onClick={logout} />
        <NewPost user={user} getUppdate={getUppdate} />
        <div>
            {postList.map((post) => (<Post post={post} user={user} getUppdate={getUppdate} />))}
        </div>
    </>)
}