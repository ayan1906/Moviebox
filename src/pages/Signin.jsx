import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { googleSignIn, loginWithEmail, signUpWithEmail } = useAuth();
  const navigate = useNavigate();

  // ফর্ম সাবমিট (Login / Sign Up)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isSignUp) {
        await signUpWithEmail(name, email, password);
      } else {
        await loginWithEmail(email, password);
      }
      navigate("/"); 
    } catch (err) {
      setError(err.message.replace("Firebase: " , ""));
    }
  };

  // গুগল লগইন হ্যান্ডলার
  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError("Google Sign-In failed. Try again.");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-[#1c1d21]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
        
        <h2 className="text-3xl font-extrabold text-center mb-2">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-400 text-center text-sm mb-6">
          {isSignUp ? "Join FlowFlix to stream free movies" : "Sign in to access your watchlist"}
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0"/>
            <span>{error}</span>
          </div>
        )}

        {/* Google Login Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-200 transition cursor-pointer mb-6"
        >
          <img src="[https://www.svgrepo.com/show/475656/google-color.svg](https://www.svgrepo.com/show/475656/google-color.svg)" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">Or with email</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-3"/>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#121316] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-white/40"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3"/>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#121316] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-white/40"
            />
          </div>

          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3"/>
            <input
              type="password"
              placeholder="Password (min 6 characters)"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#121316] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-white/40"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e5a00d] hover:bg-[#c98c0a] text-black font-bold py-2.5 rounded-lg transition cursor-pointer"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle Sign In / Sign Up */}
        <p className="text-center text-sm text-gray-400 mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>

      </div>
    </div>
  );
};

export default Signin;