import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setIsChecked(true);
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
      setIsChecked(true);
    }
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="shadow-card flex h-[28px] w-[64px] items-center justify-between rounded-md bg-white p-1">
        <span
          onClick={() => handleLanguageChange("en")}
          className={`flex h-6 w-6 text-[12px] items-center justify-center rounded cursor-pointer ${
            isChecked
              ? "text-white bg-teal-600 dark:bg-slate-950"
              : "text-gray-800"
          }`}
        >
          EN
        </span>
        <span
          onClick={() => handleLanguageChange("de")}
          className={`flex h-6 w-6 text-[12px] items-center justify-center rounded cursor-pointer ${
            !isChecked
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
