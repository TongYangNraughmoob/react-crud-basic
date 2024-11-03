import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import entranslation from '../helper/en/translation.json';
import laotranslation from '../helper/lao/translation.json';

const resources = {
    en: {
        translation: entranslation
    },
    lao: {
        translation: laotranslation
    }
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
