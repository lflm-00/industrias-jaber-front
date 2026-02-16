"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/hooks/useLanguage";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-4 lg:px-40 py-12 border-t border-[#e8e4e0] dark:border-[#3a2f24] bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Logo width={32} height={32} className="text-primary" />
            <h2 className="text-[#181411] dark:text-white text-lg font-bold">
              Industrias Jaber
            </h2>
          </div>
          <p className="text-sm text-[#897561] dark:text-[#a8998a] leading-relaxed">
            {t("footer.precision")}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[#181411] dark:text-white mb-6">
            {t("footer.products")}
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[#897561] dark:text-[#a8998a]">
            <li>
              <Link className="hover:text-primary" href="#">
                {t("footer.roasters")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                {t("footer.dryers")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                {t("footer.grinders")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                {t("footer.cleaningSystems")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#181411] dark:text-white mb-6">
            {t("footer.company")}
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[#897561] dark:text-[#a8998a]">
            <li>
              <Link className="hover:text-primary" href="/about">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                {t("footer.process")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="#">
                {t("footer.sustainability")}
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="/contact">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#181411] dark:text-white mb-6">
            {t("footer.headquarters")}
          </h4>
          <p className="text-sm text-[#897561] dark:text-[#a8998a] leading-relaxed">
            {t("footer.address")}
            <br />
            {t("footer.city")}
            <br />
            <span className="block mt-4 font-bold text-primary">
              {t("footer.phone")}
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-[#e8e4e0] dark:border-[#3a2f24] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#897561] dark:text-[#a8998a]">
          {t("footer.allRightsReserved")}
        </p>
        <div className="flex gap-6 text-xs text-[#897561] dark:text-[#a8998a]">
          <Link className="hover:text-primary" href="#">
            {t("footer.privacyPolicy")}
          </Link>
          <Link className="hover:text-primary" href="#">
            {t("footer.termsOfService")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
