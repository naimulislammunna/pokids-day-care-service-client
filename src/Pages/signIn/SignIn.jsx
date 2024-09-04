import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
    const {handleSignIn, googleLogIn} = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(() => {
            toast.success('Sign In Successfully');
            navigate(location.state);
        })
        .catch(()=> toast.warn('warning'))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

        handleSignIn(email, password)
        .then((res) => {
            console.log(res);
            
            toast.success('Sign In Successfully');
            navigate(location.state);
            form.reset();
            
        })
        .catch((err)=> {
            const errMsg = err.message.split('/');
            setError(errMsg[1])
            toast.warn(error)
        }
        )
    }

     
    return (
        <div className="my-5">
            <ToastContainer/>
            <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                <h1 className="text-3xl font-semibold text-cyan-600">Sign In</h1>
                
                <form onSubmit={handleSubmit}  className="space-y-6">
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="username_2"  className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <input type="submit" value='Submit' className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer"/>
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Don&apos;t have an account?
                    <Link to='/register'>
                        <a className="ml-3 font-semibold underline">
                        Register
                        </a>
                    </Link>
                </p>
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                {/* Social icons */}
                <div className="flex justify-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">
                
                    <button onClick={handleGoogleLogIn}  aria-label="Log in with Google" className="rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;