import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-blue-200">
            <img className="w-full h-auto" src="../../public/assets/404-status-code.png" alt="" />

            <Link className="btn btn-primary absolute  bottom-4" to='/'>Back</Link>
        </div>
    );
};

export default ErrorPage;