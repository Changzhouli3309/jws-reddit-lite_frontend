const PostService = {
    newPost: async (token, post) => {
        try {
            const res = await fetch("http://localhost:8080/api/posts", {
                method: "post",
                body: JSON.stringify(post),
                headers: { "Content-Type": "application/json", "token": token },
            });
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    getAllPost: async (token) => {
        try {
            const res = await fetch("http://localhost:8080/api/posts", {
                method: "get",
                headers: { "Content-Type": "application/json", "token": token },
            });
            if (res.status === 200) {
                const data = await res.json();
                return data;
            } else {
                return [];
            }
        } catch (error) {
            return [];
        }
    },
    updatePost: async (token, id, post) => {
        try {
            const res = await fetch("http://localhost:8080/api/posts/" + id, {
                method: "put",
                body: JSON.stringify(post),
                headers: { "Content-Type": "application/json", "token": token },
            });
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
    deletePost: async (token, id) => {
        try {
            const res = await fetch("http://localhost:8080/api/posts/" + id, {
                method: "delete",
                headers: { "Content-Type": "application/json", "token": token },
            });
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
}

export default PostService;