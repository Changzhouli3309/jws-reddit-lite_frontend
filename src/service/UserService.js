const UserService = {
    register: async (user) => {
        try {
            const res = await fetch("http://localhost:8080/user/register", {
                method: "post",
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json" },
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
    login: async (user) => {
        try {
            const res = await fetch("http://localhost:8080/user/login", {
                method: "post",
                headers: { "username": user.username, "password": user.password },
            });
            if (res.status === 200) {
                const data = await res.json();
                return data;
            } else {
                return "error";
            }
        } catch (error) {
            return "error";
        }
    },
    logout: async (token) => {
        try {
            const res = await fetch("http://localhost:8080/user/logout", {
                method: "delete",
                headers: { "token": token },
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

export default UserService;