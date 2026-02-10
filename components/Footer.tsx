import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-40 py-12 border-t border-[#e8e4e0] dark:border-[#3a2f24] bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-2xl">
                coffee_maker
              </span>
            </div>
            <h2 className="text-[#181411] dark:text-white text-lg font-bold">
              Industrias Jaber
            </h2>
          </div>
          <p className="text-sm text-[#897561] dark:text-[#a8998a] leading-relaxed">
            Precision engineering for the global coffee industry. Sustainable,
            efficient, and built to last.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[#181411] dark:text-white mb-6">
            Products
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[#897561] dark:text-[#a8998a]">
            <li>
              <Link className="hover:text-primary" href="#">
                Roasters
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                Dryers
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                Grinders
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                Cleaning Systems
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#181411] dark:text-white mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[#897561] dark:text-[#a8998a]">
            <li>
              <Link className="hover:text-primary" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                Process
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                Sustainability
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#181411] dark:text-white mb-6">
            Headquarters
          </h4>
          <p className="text-sm text-[#897561] dark:text-[#a8998a] leading-relaxed">
            123 Coffee Way, Industrial District
            <br />
            Armenia - Quindío, Colombia
            <br />
            <span className="block mt-4 font-bold text-primary">
              +57 (316) 660-5222
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-[#e8e4e0] dark:border-[#3a2f24] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#897561] dark:text-[#a8998a]">
          © 2024 Industrias Jaber S.A. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-[#897561] dark:text-[#a8998a]">
          <Link className="hover:text-primary" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:text-primary" href="#">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
