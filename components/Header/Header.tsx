"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/hooks/useLanguage";
import Logo from "../Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import styles from "./Header.module.scss";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  // Cerrar drawer con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e4e0] dark:border-[#3a2f24] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-40">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo width={40} height={40} className="text-primary" />
          <h2 className="text-[#181411] dark:text-white text-xl font-black">
            Industrias Jaber
          </h2>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <NavLinks t={t} />
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#181411] dark:text-white"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Drawer mobile */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className={styles.overlay}
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div className={styles.drawer}>
            {/* Header del drawer: botón de cerrar + logo */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Logo width={32} height={32} className="text-primary" />
                <h2 className="text-inherit text-base font-bold">
                  Industrias Jaber
                </h2>
              </div>
              <button
                className="text-[#181411] dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            {/* Language Switcher Mobile */}
            <div className="mb-6 pb-6 border-b border-[#e8e4e0] dark:border-[#3a2f24]">
              <LanguageSwitcher />
            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-6 mt-4">
              <NavLinks t={t} onClick={() => setIsOpen(false)} />
            </nav>
          </div>
        </>
      )}

    </header>
  );
}

function NavLinks({ onClick, t }: { onClick?: () => void; t: (key: string) => string }) {
  const linkClass =
    "text-[#181411] dark:text-[#f8f7f6] text-sm font-semibold hover:text-primary transition-colors";
  return (
    <>
      <Link href="/" className={linkClass} onClick={onClick}>
        {t("header.home")}
      </Link>
      <Link href="/#processes" className={linkClass} onClick={onClick}>
        {t("header.processes")}
      </Link>
      <Link href="/machinery" className={linkClass} onClick={onClick}>
        {t("header.machinery")}
      </Link>
      <Link href="/about" className={linkClass} onClick={onClick}>
        {t("header.about")}
      </Link>
      <Link href="/contact" className={linkClass} onClick={onClick}>
        {t("header.contact")}
      </Link>
    </>
  );
}
