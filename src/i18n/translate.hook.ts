import I18n from 'i18n-js';
import { useStore } from '../context/store.context';
import { AvailableLanguages, LanguageModel } from './language.model';

export interface UseTranslate {
  translate: (content: string) => string;
  setLanguage: (languageCode: AvailableLanguages) => void;
  languages: LanguageModel[];
  currentLanguage: AvailableLanguages;
}

export const useTranslate = (): UseTranslate => {
  const {
    language: {languages, currentLanguage, setCurrentLanguage},
  } = useStore();

  const translate = (content: string) =>
    I18n.t(content, { locale: currentLanguage });
  
  const setLanguage = (languageCode: AvailableLanguages): void =>
    setCurrentLanguage(languageCode);

  return {
    translate,
    setLanguage,
    languages,
    currentLanguage,
  };
};
