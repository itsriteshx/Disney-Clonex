import React from "react";

function Footer() {
  return (
    <footer className="mt-20 py-12 border-t border-white/10 flex flex-col items-center gap-6">
      <div className="text-3xl font-bold tracking-tighter text-white opacity-80">
        ✺ Disney+ <span className="text-yellow-500">hotstar</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
        {["Privacy Policy", "Terms of Use", "Subscriber Agreement", "Help", "Supported Devices", "Feedback"].map(link => (
          <span key={link} className="hover:text-white cursor-pointer transition-colors">{link}</span>
        ))}
      </div>
      <p className="text-[10px] text-white/40 text-center max-w-3xl leading-relaxed uppercase tracking-wider">
        © Disney. All Rights Reserved. Disney+ is a subscription service. Content is subject to availability.
        The Disney+ service is provided by Disney Entertainment.
      </p>
    </footer>
  );
}

export default Footer;
