import { useContext } from "react";
import { userContext } from "../../Auth_Context/Auth_Context";
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, logOut } = useContext(userContext);

    // Toast 
    const success = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    // Logout
    const singout = () => {
        logOut()
        .then(() => {
            success('Logout SuccessFull!!!')
        })
        .catch(e => {
            error(e.message.substr(10))
        })
    }
    return (
        <div className="py-10">
            <div className="card w-96 bg-white shadow-xl mx-auto">
                <figure><img className="w-full h-64" src={user && user.photoURL} alt="Shoes" /></figure>
                <div className="card-body text-base-200 font-medium">
                    <h2 className="card-title text-black">Name: {user.displayName}</h2>
                    <h4 className="">Email: {user.email}</h4>
                    <h6 className="t">Email Verified: {user.emailVerified.toString()}</h6>
                    <h6 className="t">Creation Time: {user.metadata.creationTime}</h6>
                    <h6 className="t">Last SignIn Time: {user.metadata.lastSignInTime}</h6>
                    <p>Uid: {user.uid}</p>
                    <div className="card-actions justify-center mt-6">
                        <button onClick={singout} className="btn btn-primary text-white">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;