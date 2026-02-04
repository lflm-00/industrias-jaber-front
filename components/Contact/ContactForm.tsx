const ContactForm: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#382d22] p-8 lg:p-12 rounded-[2rem] shadow-2xl border border-[#e8e4e0]/50 dark:border-white/5">
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">
              Your Name
            </label>
            <input className="h-12 px-4 w-full focus:outline-none" placeholder="John Doe" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">
              Company Name
            </label>
            <input className="h-12 px-4 w-full focus:outline-none" placeholder="Roasters Co." type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">Work Email</label>
          <input className="h-12 px-4 w-full focus:outline-none" placeholder="john@company.com" type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">How can we help?</label>
          <select className="h-12 px-4 w-full bg-white dark:bg-[#2d241b] border-[#e8e4e0] dark:border-[#3a2f24] rounded-lg focus:ring-primary focus:border-primary text-[#181411] dark:text-white">
            <option>Machinery Inquiry</option>
            <option>Maintenance Support</option>
            <option>Custom Engineering</option>
            <option>Partnership</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">Message</label>
          <textarea
            className="p-4 w-full focus:outline-none"
            placeholder="Tell us about your project or specific machinery needs..."
            rows={5}
          />
        </div>

        <button
          className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:bg-[#b8630f] hover:scale-[1.02] active:scale-95"
          type="submit"
        >
          <span className="material-symbols-outlined mr-2">send</span>
          Send Message
        </button>

        <p className="text-center text-xs text-[#897561] dark:text-[#a8998a]">
          We typically respond within 1 business day.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
