import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Premium() {
  const plans = [
    { name: "Mobile", price: "₹299", quality: "HD (720p)", devices: "1", ads: "With Ads" },
    { name: "Super", price: "₹899", quality: "Full HD (1080p)", devices: "2", ads: "Ad-free (Except Sports)" },
    { name: "Premium", price: "₹1499", quality: "4K (2160p) + HDR", devices: "4", ads: "Completely Ad-free" },
  ];

  return (
    <div className="bg-brand-dark min-h-screen relative font-body page-transition">
      <Header />
      <main className="pt-32 pb-20 px-[4%] max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-4 text-center">Subscribe to Hotstar</h1>
        <p className="text-text-gray text-xl text-center mb-16 font-bold">Choose the plan that's right for you</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-10 rounded-[32px] border-2 transition-all hover:scale-105 flex flex-col items-center ${
                plan.name === 'Premium' ? 'bg-brand-purple/10 border-brand-purple shadow-2xl shadow-brand-purple/20' : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.name === 'Premium' && (
                <span className="bg-brand-purple text-white text-[10px] font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">Best Experience</span>
              )}
              <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-black text-brand-purple mb-8">{plan.price}<span className="text-sm text-text-gray font-bold">/Year</span></div>
              
              <ul className="w-full space-y-6 mb-12 text-center">
                <li className="text-white font-bold">{plan.quality}</li>
                <li className="text-white/60 font-medium">Log in to {plan.devices} device{plan.devices > 1 ? 's' : ''}</li>
                <li className="text-white/60 font-medium">{plan.ads}</li>
              </ul>

              <button className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
                plan.name === 'Premium' ? 'bg-brand-purple text-white shadow-xl' : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                SELECT {plan.name.toUpperCase()}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white/5 rounded-[40px] p-10 border border-white/10 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-xl font-black text-white">Features</th>
                <th className="py-6 text-center text-text-gray font-bold">Mobile</th>
                <th className="py-6 text-center text-text-gray font-bold">Super</th>
                <th className="py-6 text-center text-white font-black">Premium</th>
              </tr>
            </thead>
            <tbody className="text-white/80 font-medium">
              <tr className="border-b border-white/5">
                <td className="py-6">All Content (Movies, TV, Live Sports)</td>
                <td className="py-6 text-center">✔</td>
                <td className="py-6 text-center">✔</td>
                <td className="py-6 text-center text-brand-purple">✔</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-6">Watch on TV & Laptop</td>
                <td className="py-6 text-center">✖</td>
                <td className="py-6 text-center">✔</td>
                <td className="py-6 text-center text-brand-purple">✔</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-6">Ad-free (Except Sports)</td>
                <td className="py-6 text-center">✖</td>
                <td className="py-6 text-center">✔</td>
                <td className="py-6 text-center text-brand-purple">✔</td>
              </tr>
              <tr>
                <td className="py-6">Max Video Quality</td>
                <td className="py-6 text-center">HD</td>
                <td className="py-6 text-center">Full HD</td>
                <td className="py-6 text-center text-brand-purple font-black">4K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Premium;
