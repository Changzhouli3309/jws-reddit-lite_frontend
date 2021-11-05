import { useState } from 'react'
import { Account } from './Account';
import { PostView } from './PostView';


export const Home = () => {

    const [user, setUser] = useState({
        id: "",
        username: "",
        token: ""
    });

    const [isLogin, setisLogin] = useState(false);

    return (<>
        <h1>Redit-lite</h1>
        {
            !isLogin ?
                <Account setUser={setUser} setisLogin={setisLogin} />
                : <PostView user={user} setisLogin={setisLogin} />
        }
    </>);
}