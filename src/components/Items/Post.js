import PostService from "../../service/PostService"

export const Post = ({ post, user, getUppdate }) => {

    const deletePost = async () => {
        const re = await PostService.deletePost(user.token, post.id);

        if (re) {
            getUppdate();
        } else {
            alert("failed to create delete");
        }
    }

    const removeItem = (arr, item) => {
        const index = arr.indexOf(item)
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    const likePost = async () => {

        if (post.downVoters.includes(user.id)) {
            post.downVoters = removeItem(post.downVoters, user.id)
        }

        if (post.upVoters.includes(user.id)) {
            post.upVoters = removeItem(post.upVoters, user.id)
        } else {
            post.upVoters.push(user.id)
        }

        const re = await PostService.updatePost(user.token, post.id, post)

        if (re) {
            getUppdate();
        } else {
            alert("failed to like post");
        }
    }

    const dislikePost = async () => {

        if (post.upVoters.includes(user.id)) {
            post.upVoters = removeItem(post.upVoters, user.id)
        }

        if (post.downVoters.includes(user.id)) {
            post.downVoters = removeItem(post.downVoters, user.id)
        } else {
            post.downVoters.push(user.id)
        }

        const re = await PostService.updatePost(user.token, post.id, post)

        if (re) {
            getUppdate();
        } else {
            alert("failed to dislike post");
        }
    }


    return (<div key="{post.id}" style={{
        borderBottom: "1px solid #e1e1e1",
        maxWidth: "25%",
        padding: "10px 0px",
    }} >
        <p style={{ fontWeight: "bold" }}>Title: {post.title}</p>
        <p>Content: {post.content}</p>
        <p>By {post.sender}</p>
        <br />
        {post.senderId === user.id ?
            <input type="button" value="delete" onClick={deletePost} /> :
            <></>
        }
        <br />
        <lable style={{ cursor: "pointer" }} onClick={likePost}>Likes : {post.upVoters.length}</lable>
        <lable style={{ marginLeft: "3.5rem", cursor: "pointer" }} onClick={dislikePost}>Dislikes : {post.downVoters.length}</lable>
    </div>)
}