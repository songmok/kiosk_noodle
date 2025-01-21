import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      mainHead: "화면을 터치하여 메뉴를 선택해 주세요",
      welcome: "Welcome",
      description: "This is an example.",
    },
  },
  ko: {
    translation: {
      mainHead: "화면을 터치하여 메뉴를 선택해 주세요",
      welcome: "환영합니다",
      description: "이것은 예제입니다.",
    },
  },
  ja: {
    translation: {
      mainHead: "화면을 터치하여 메뉴를 선택해 주세요",
      welcome: "ようこそ",
      description: "これは例です。",
    },
  },
  zh: {
    translation: {
      mainHead: "화면을 터치하여 메뉴를 선택해 주세요",
      welcome: "欢迎",
      description: "这是一个例子。",
    },
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
