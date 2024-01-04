import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Auth_Context/Auth_Context";
import toast from 'react-hot-toast';

const Login = () => {
    const { singInUser } = useContext(userContext);
    const navigate = useNavigate();

    // Toast
    const success = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    // Handle Login Form
    const handleLogin = event => {
        const loading = toast.loading('Loading...');
        () => loading;
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Auth SingInUser
        singInUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.dismiss(loading);
            if(result.user.emailVerified === true){
                navigate('/')
                success('Login SuccessFull')
            }
            else{
                error('Places Verify Your Email Address')
            }
        })
        .catch(e => {
            toast.dismiss(loading)
            error(e.message.substr(10))
        })
    }
    return (
        <div className="h-[68vh] flex justify-center items-center">
            <div className="w-full max-w-96">
                <form onSubmit={handleLogin} className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow text-slate-300 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 btn border-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-base hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <p className="mt-4 text-black">Create a New Account <Link className="text-red-600 font-medium" to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;