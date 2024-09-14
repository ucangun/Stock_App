import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div>
      <div className="shadow-card flex h-[28px] w-[64px] items-center justify-between rounded-md bg-white p-1">
        <span
          onClick={() => handleLanguageChange("en")}
          className={`flex h-6 w-6 text-[12px] items-center justify-center rounded cursor-pointer ${
            language === "en"
              ? "text-white bg-teal-600 dark:bg-slate-950"
              : "text-gray-800"
          }`}
        >
          EN
        </span>
        <span
          onClick={() => handleLanguageChange("de")}
          className={`flex h-6 w-6 text-[12px] items-center justify-center rounded cursor-pointer ${
            language === "de"
              ? "text-white bg-teal-600 dark:bg-slate-950"
              : "text-gray-800"
          }`}
        >
          DE
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
