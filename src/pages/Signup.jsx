import { useState, useEffect } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyDI1dTpKXBM-4WQ7PY_qxgs0nzyf_DNnbU",
    authDomain: "project-9406e.firebaseapp.com",
    projectId: "project-9406e",
    storageBucket: "project-9406e.firebasestorage.app",
    messagingSenderId: "220771945",
    appId: "1:220771945:web:e562f056c5a5ddcea914f8",
    measurementId: "G-VY3YRCPVZR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) navigate("/game");
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("User signed in: ", result.user);
            navigate("/game");
        } catch (error) {
            console.error("Google Sign-In Error: ", error);
        }
    };

    const handleEmailAuth = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login successful!");
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Sign-up successful!");
            }
            navigate("/game");
        } catch (error) {
            console.error("Auth Error: ", error);
            alert(error.message);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <form onSubmit={handleEmailAuth} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>
                <button
                    onClick={handleGoogleSignIn}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                >
                    Sign in with Google
                </button>
                <p
                    className="text-center text-sm text-gray-500 mt-4 cursor-pointer"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                </p>
            </div>
        </div>
    );
}
