"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import { useLanguage } from "@/lib/hooks/useLanguage";
import Link from "next/link";
import FormSection from "@/components/FormSection/FormSection";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const LoginComponent = () => {
  const router = useRouter();
  const { login, isLoading, error: authError } = useAuth();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: "user@example.com",
    password: "password123",
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    try {
      await login(formData);
      router.push("/");
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : t("auth.login.invalidCredentials")
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F1F5F9] dark:bg-background-dark font-display text-[#181411] dark:text-[#f8f7f6]">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-warm-brown dark:text-[#a8998a] hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            {t("common.backToHome")}
          </Link>
        </div>

        <div className="bg-white dark:bg-[#2d241b] rounded-2xl shadow-xl p-8 lg:p-10 border border-[#e8e4e0] dark:border-[#3a2f24]">
          <FormSection title={t("auth.login.title")} subtitle={t("auth.login.subtitle")}>
            <div className="w-full">
              {/* Error Message */}
              {(formError || authError) && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    {formError || authError}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-bold text-[#181411] dark:text-white mb-2" htmlFor="email">
                    {t("auth.login.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("auth.login.emailPlaceholder")}
                    icon="mail"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-[#181411] dark:text-white" htmlFor="password">
                      {t("auth.login.password")}
                    </label>
                    <a className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors" href="#">
                      {t("auth.login.forgotPassword")}
                    </a>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={t("auth.login.passwordPlaceholder")}
                    icon="lock"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                {/* Demo Credentials Info */}
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 mb-2">{t("auth.login.demoCredentials")}</p>
                  <ul className="text-xs text-blue-800 dark:text-blue-300 space-y-1">
                    <li><strong>Email:</strong> user@example.com</li>
                    <li><strong>{t("auth.login.password")}:</strong> password123</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <Button type="submit" icon="login" disabled={isLoading}>
                  {isLoading ? t("auth.login.loggingIn") : t("auth.login.loginButton")}
                </Button>
              </form>
            </div>
          </FormSection>

          <div className="mt-10 pt-6 border-t border-[#e8e4e0] dark:border-[#3a2f24] text-center">
            <p className="text-xs text-warm-brown dark:text-[#a8998a]">
              {t("common.tagline")}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-warm-brown/60 dark:text-[#a8998a]/40">
            {t("common.copyright")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
