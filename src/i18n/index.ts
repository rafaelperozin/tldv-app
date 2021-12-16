import I18n from 'i18n-js';
import { LanguageModel } from './language.model';

import {en} from './locales/en';
import {pt} from './locales/pt';

I18n.fallbacks = true;
I18n.translations = { en, pt };

export const availableLanguages: LanguageModel[] = [
	{
		code: 'en',
		name: 'English',
	},
	{
		code: 'pt',
		name: 'Português',
	},
];

export default I18n;
