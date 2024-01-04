import { useContext } from "react";
import { userContext } from "../../Auth_Context/Auth_Context";

const Profile = () => {
    const {user} = useContext(userContext);
    console.log(user);
    return (
        <div>
            <h1>This is Profile Page</h1>
            
        </div>
    );
};

export default Profile;