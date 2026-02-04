const ContactMap: React.FC = () => {
  return (
    <div className="w-full bg-[#e8e4e0] dark:bg-[#382d22] aspect-video rounded-3xl overflow-hidden relative group">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAaSy0sBRNKmjCrhcK5bcrrrVovVJ_zuZTNKF8gbMwzDwL9Flb8IYPZIKE4JwK3JewbffFVaH2IcGBPU0a-84_2j4UwyiKTSk7gURquApxSyHUbjK1VCMUuZoq_VYY2Zz4CmWVcnodRfO8MItopG5VB6hiEYTNQsjv9y0H_GHba-NjfR7ipRe2PDve_ccEk6xPX8ZP0LNRHmA8mXEhpvfKJ5AJLWiajBYCZGHQB7z7-ZhrrpUeIfX3xV2cQCkZEZ0u_Z0icP11ttk')" }}
      />
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 dark:bg-background-dark/90 px-6 py-3 rounded-full shadow-xl flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">explore</span>
          <span className="font-bold text-sm">View on Google Maps</span>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
