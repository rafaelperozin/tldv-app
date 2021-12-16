import I18n from 'i18n-js';
import { cast, Instance, types } from "mobx-state-tree";
import { availableLanguages } from '../i18n';
import { AvailableLanguages, LanguageModel } from '../i18n/language.model';

export const LanguageStore = types
	.model("LanguageStore", {
		languages: types.array(types.frozen<LanguageModel>()),
    currentLanguage: types.enumeration<AvailableLanguages>(Object.values(AvailableLanguages)),
	})
	.actions(self => ({
    setCurrentLanguage: (languageCode: AvailableLanguages) => {
      I18n.locale = languageCode;
      self.currentLanguage = AvailableLanguages[languageCode];
    },
    setLanguages: (languesList: LanguageModel[]) => (self.languages = cast(languesList)),
  }));

export const languageStore = LanguageStore.create({
	languages: availableLanguages,
	currentLanguage: process.env.REACT_APP_DEFAULT_LANGUAGE as AvailableLanguages,
});

export type LanguageStoreType = Instance<typeof LanguageStore>;
