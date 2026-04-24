import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" 
          alt="bg" 
          className="w-full h-full object-cover opacity-30 scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-brand-navy/40" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-10 bg-brand-navy/60 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-2xl animate-modal-up">
        <div className="flex flex-col items-center mb-10">
          <span className="text-[#ffcc00] text-4xl mb-2">★</span>
          <h1 className="text-4xl font-extrabold text-white tracking-tighter">hotstar</h1>
        </div>

        <h2 className="text-2xl font-extrabold text-white mb-8 text-center uppercase tracking-widest">Welcome Back</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-extrabold text-text-gray uppercase tracking-widest ml-1">Email or Mobile Number</label>
            <input 
              type="text" 
              placeholder="Enter your email or mobile"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-brand-purple transition-all"
            />
          </div>
          
          <button 
            onClick={() => navigate("/home")}
            className="w-full bg-brand-purple hover:scale-[1.02] text-white py-4 rounded-xl font-extrabold text-lg transition-all shadow-lg shadow-brand-purple/20 mt-4"
          >
            LOG IN
          </button>
        </div>

        <p className="mt-8 text-center text-text-gray text-sm font-medium">
          New to Hotstar? <span className="text-brand-purple cursor-pointer font-bold">Subscribe Now</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
