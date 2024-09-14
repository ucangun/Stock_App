import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isChecked, setIsChecked] = useState(i18n.language === "en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setIsChecked(savedLanguage === "en");
    }
  }, [i18n]);

  const handleCheckboxChange = () => {
    const newLanguage = isChecked ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    setIsChecked(!isChecked);
  };

  const languages = ["en", "de"];

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer select-none themeSwitcherThree">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="shadow-card flex h-[28px] w-[64px] items-center justify-between rounded-md bg-white p-1">
          {languages.map((lang) => (
            <span
              key={lang}
              className={`flex h-6 w-6 text-[12px] items-center justify-center rounded ${
                (isChecked && lang === "en") || (!isChecked && lang === "de")
                  ? "text-white bg-teal-600 dark:bg-slate-950"
                  : "text-gray-800"
              }`}
            >
              {lang.toUpperCase()}
            </span>
          ))}
        </div>
      </label>
    </div>
  );
};

export default LanguageSwitcher;
