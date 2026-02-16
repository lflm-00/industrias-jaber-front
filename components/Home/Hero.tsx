import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 lg:px-40 py-12 lg:py-24">
      <div className="@container max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row items-center">
          <div className="flex flex-col gap-8 flex-1 @[480px]:min-w-[400px]">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full">
                Innovative Engineering
              </span>
              <h1 className="text-[#181411] dark:text-white text-5xl font-black leading-[1.1] tracking-[-0.04em] lg:text-6xl">
                Excellence in Coffee Processing Machinery
              </h1>
              <p className="text-[#4a3f35] dark:text-[#cbbab0] text-lg font-normal leading-relaxed max-w-[500px]">
                Industrias Jaber provides premium solutions for every stage of
                your production, from harvesting the cherry to the perfect final
                grind.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/machinery">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-buttons text-white text-base font-bold transition-transform hover:scale-105">
                  Explore Machinery
                </button>
              </Link>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 border-2 border-[#181411] dark:border-white text-[#181411] dark:text-white text-base font-bold hover:bg-[#181411] hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-all">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="w-full flex-1 relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl shadow-2xl"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjBb7O4AbJOghUWQioEesOsR0GLtiPsjCXSSc9FD1pnfuR7chFPcQqe31_fwd3Z6pawOVxGqVeN6seajRDwOyHbYQ4jnWggsjFogNbX6oopiA1Q40sfTXGiPzdQP035Uxs2hIJnpDq4umOpP2zirKwZ5YigZ5Gr1rXLo4kHi2zM-YwhjIdBht_Xmf0H4w066g8nFmXMSOHunmrebhAxGTP3EgKSvMAPpwbfKQAJUP8EHu0ayhR8ETXbpXoS4C9el46U7xuiCm3PxE")',
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-coffee-green p-6 rounded-xl shadow-xl text-white hidden @[864px]:block">
              <p className="text-3xl font-black">25+</p>
              <p className="text-xs font-medium uppercase tracking-tighter opacity-80">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
