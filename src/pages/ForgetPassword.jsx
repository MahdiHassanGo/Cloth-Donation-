import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ForgetPassword = () => {
    useEffect(() => {
        document.title = "Forgot Password | CareHive";
        window.scrollTo(0, 0);
    }, []);

    const { sendPasswordResetEmail } = useContext(AuthContext); // Get the reset function from context
    const [email, setEmail] = useState("");

    const handleResetPassword = async () => {
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        try {
            await sendPasswordResetEmail(email);
            alert("Password reset email sent. Please check your inbox.");
            window.location.href = "https://mail.google.com";
        } catch (error) {
           
            alert("Failed to send password reset email. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
           
            <div className="card bg-base-100 w-full max-w-md p-10">
                <h2 className="text-2xl font-semibold text-center font-greatvibes text-Buttons text-5xl">
                    Reset Password
                </h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="button"
                            onClick={handleResetPassword}
                            className="btn bg-Profile w-full"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
