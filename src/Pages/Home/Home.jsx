import { useContext } from "react";
import { userContext } from "../../Auth_Context/Auth_Context";

const Home = () => {
    const {user} = useContext(userContext);
    return (
        <div>
            <h1>This Is Home</h1>
        </div>
    );
};

export default Home;