import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { userContext } from "../../Auth_Context/Auth_Context";
import toast from 'react-hot-toast';

const Register = () => {
    const [check, setCheck] = useState(false);
    const {createAccount, nameUpdate, emailVerification, googleSingUp, githubSingUp} = useContext(userContext);
    const navigete = useNavigate();

    // Toast 
    const success = (success) => toast.success(success);
    const error = (error) => toast.error(error);

    // Handle Register Form
    const handleRegister = event => {
        const loading = toast.loading('Loading...');
        () => loading;
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Auth Create New Account
        createAccount(email, password)
        .then(() => {
            nameUpdate(name);

            toast.dismiss(loading);
            emailVerification()
            .then(() => {
                success('Email Verification Sent!')
                navigete('/login')
            })
            success('Register SuccessFull!');
        })
        .catch(e => {
            toast.dismiss(loading)
            error(e.message.substr(10))
        })

    }

    // Handle CheckBox
    const handleCheck = event => {
        setCheck(event.target.checked);
    }

    // Handle Google Provider
    const handleGoogle = () => {
        const loading = toast.loading('Loading...');
        () => loading;
        googleSingUp()
        .then(() => {
            toast.dismiss(loading);
            navigete('/')
            success('Register SuccessFull!');
        })
        .catch(e => {
            toast.dismiss(loading);
            error(e.message.substr(10))
        })
    }

    // Handle Github Provider
    const handleGithub = () => {
        const loading = toast.loading('Loading...');
        () => loading;
        githubSingUp()
        .then(() => {
            toast.dismiss(loading);
            navigete('/')
            success('Register SuccessFull!');
        })
        .catch(e => {
            toast.dismiss(loading);
            error(e.message.substr(10))
        })
    }
    return (
        <div className="py-10">
            <div className="w-full max-w-96 mx-auto">
                <form onSubmit={handleRegister} className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow text-slate-300 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow text-slate-300 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" required />
                    </div>
                    <div className="mb-6 flex items-center gap-3">
                        <input onClick={handleCheck} className="" id="checkbox" type="checkbox" name="checkbox" required />
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="checkbox">
                            Accept Term & Conditions
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button disabled={!check} className="bg-blue-500 btn border-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 pt-4">
                        <p className="text-gray-600 font-medium">Recommended by</p>
                        <button onClick={handleGoogle} type="button" className="flex items-center w-full gap-5 bg-primary btn border-none">
                            <FaGoogle />
                            Sing Up With Google
                        </button>
                        <button onClick={handleGithub} type="button" className="flex items-center gap-5 w-full bg-secondary btn border-none">
                            <FaGithub />
                            Sing Up With Github
                        </button>
                    </div>
                    <p className="mt-4 text-black">Already Have a Account? <Link className="text-red-600 font-medium" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;