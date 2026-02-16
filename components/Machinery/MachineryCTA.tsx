import Link from "next/link";

export default function MachineryCTA() {
  return (
    <section className="px-4 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto rounded-3xl bg-[#181411] text-white p-10 lg:p-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 size-64 bg-coffee-green/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4 max-w-[720px]">
            <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Need a custom machinery solution?
            </h2>
            <p className="text-[#cbbab0] text-lg font-normal leading-relaxed">
              Our engineering team specializes in custom production line design.
              Lets discuss how we can optimize your facilitys efficiency.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/Contact">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-buttons text-white text-base font-bold shadow-xl shadow-primary/30 transition-all hover:scale-105">
                <span className="material-symbols-outlined mr-2">mail</span>
                Request Consultation
              </button>
            </Link>
            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white/10 text-white text-base font-bold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
