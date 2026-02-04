import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e8e4e0] dark:border-[#3a2f24] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-10 py-4 lg:px-40">
      <div className="flex items-center gap-3">
        <div className="size-8 text-primary">
          <span className="material-symbols-outlined text-4xl">
            coffee_maker
          </span>
        </div>
        <h2 className="text-[#181411] dark:text-white text-xl font-black leading-tight tracking-tight">
          Industrias Jaber
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-[#181411] dark:text-[#f8f7f6] text-sm font-semibold hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[#181411] dark:text-[#f8f7f6] text-sm font-semibold hover:text-primary transition-colors"
            href="/#processes"
          >
            Processes
          </Link>
          <Link
            className="text-[#181411] dark:text-[#f8f7f6] text-sm font-semibold hover:text-primary transition-colors"
            href="/machinery"
          >
            Machinery
          </Link>
          <Link
            className="text-[#181411] dark:text-[#f8f7f6] text-sm font-semibold hover:text-primary transition-colors"
            href="/#about"
          >
            About Us
          </Link>
        </nav>
        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-[#b8630f] transition-all">
          <span>Get a Quote</span>
        </button>
      </div>
    </header>
  );
}
