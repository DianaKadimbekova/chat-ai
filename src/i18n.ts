import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          signature: "Fresh look. Fine answers",
          ask:" Ask anything...",
          chat_roll_up: "new",
          settings_roll_up: "settings",
          chat_roll_out: "New chat",
          settings_roll_out: "Settings",
          history: "History",
          name_of_chat: "Name of chat",
          settings_title: "Settings",
          theme: "Theme",
          language: "Language",
          system: "System",
          dark: "Dark",
          model: "Model",
          choose_here: "Choose here",
          back: "Back",
          light: "Light",
          english: "English",
          ukraine: "Ukraine"
        }
      },
      uk: {
        translation: {
          signature: "Свіжий погляд. Вдалі відповіді",
          ask:"Спитайте про що завгодно...",
          chat_roll_up: "новий",
          settings_roll_up: "устрій",
          chat_roll_out: "Новий чат",
          settings_roll_out: "Налаштування",
          history: "Історія",
          name_of_chat: "Назва чату",
          settings_title: "Налаштування",
          theme: "Тема",
          language: "Мова",
          system: "Система",
          dark: "Темна",
          light: "Світла",
          model: "Модель",
          choose_here: "Обери тут",
          back: "Назад",
          english: "Англійська",
          ukraine: "Українська"
        }
      }
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
