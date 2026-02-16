"use client";

import { useLanguage } from "@/lib/hooks/useLanguage";

const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-[#382d22] p-8 lg:p-12 rounded-[2rem] shadow-2xl border border-[#e8e4e0]/50 dark:border-white/5">
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">
              {t("contact.form.nameLabel")}
            </label>
            <input className="h-12 px-4 w-full focus:outline-none" placeholder={t("contact.form.namePlaceholder")} type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">
              {t("contact.form.companyLabel")}
            </label>
            <input className="h-12 px-4 w-full focus:outline-none" placeholder={t("contact.form.companyPlaceholder")} type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">{t("contact.form.emailLabel")}</label>
          <input className="h-12 px-4 w-full focus:outline-none" placeholder={t("contact.form.emailPlaceholder")} type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">{t("contact.form.helpLabel")}</label>
          <select className="h-12 px-4 w-full bg-white dark:bg-[#2d241b] border-[#e8e4e0] dark:border-[#3a2f24] rounded-lg focus:ring-primary focus:border-primary text-[#181411] dark:text-white">
            <option>{t("contact.form.option1")}</option>
            <option>{t("contact.form.option2")}</option>
            <option>{t("contact.form.option3")}</option>
            <option>{t("contact.form.option4")}</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#635548] dark:text-[#a8998a]">{t("contact.form.messageLabel")}</label>
          <textarea
            className="p-4 w-full focus:outline-none"
            placeholder={t("contact.form.messagePlaceholder")}
            rows={5}
          />
        </div>

        <button
          className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-buttons text-white text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:bg-[#b8630f] hover:scale-[1.02] active:scale-95"
          type="submit"
        >
          <span className="material-symbols-outlined mr-2">send</span>
          {t("contact.form.submitButton")}
        </button>

        <p className="text-center text-xs text-[#897561] dark:text-[#a8998a]">
          {t("contact.form.responseTime")}
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
