import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-brand-dark px-10">
      {/* Background with parallax effect or overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=100" 
          alt="background" 
          className="w-full h-full object-cover opacity-50 scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark" />
      </div>

      <div className="relative z-10 max-w-[650px] w-full flex flex-col items-center text-center animate-in fade-in zoom-in duration-700">
        <div className="text-6xl font-black text-white mb-10 tracking-tighter">
          ✺ Disney+ <span className="text-yellow-500">hotstar</span>
        </div>
        
        <div className="w-full space-y-4">
          <button
            onClick={() => navigate("/home")}
            className="w-full py-4 text-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 tracking-widest"
          >
            GET ALL THERE
          </button>
          
          <p className="text-[11px] text-white/60 leading-relaxed tracking-widest">
            Get Premier Access to Raya and the Last Dragon for an additional fee with
            a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney
            Bundle will increase by $1.
          </p>

          <div className="py-10">
            <img
              src="https://picsum.photos/600/100?random=101"
              alt="logos"
              className="w-full opacity-80"
            />
          </div>
          
          <p className="text-white/40 text-xs uppercase tracking-[3px] font-bold">
            Streaming Now on all your favorite devices
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
