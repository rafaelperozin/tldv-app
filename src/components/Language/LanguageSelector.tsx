import {observer} from 'mobx-react-lite';
import React, {useMemo} from 'react';
import Select from 'react-select';
import { useStore } from '../../context/store.context';
import { AvailableLanguages, LanguageModel } from '../../i18n/language.model';

interface LanguageOptions {
	value: string;
	label: string;
}

export const LanguageSelector = observer(() => {
	const {
		language: {currentLanguage, languages, setCurrentLanguage},
	} = useStore();

	const languageOptions: LanguageOptions[] = useMemo(
		() =>
			languages.map(({code, name}: LanguageModel) => ({
				value: code,
				label: name,
			})),
		[languages],
	);

	return (
		<div className="language-selector" data-testid="select-language">
			<Select
				name="languageSelector"
				className="language-selector__dropdown"
				options={languageOptions}
				defaultValue={languageOptions.find(({value}) => value === currentLanguage)}
				onChange={(newValue) =>
					setCurrentLanguage(AvailableLanguages[newValue?.value as keyof typeof AvailableLanguages])
				}
				isDisabled={false}
				isLoading={false}
				isClearable={false}
				isRtl={false}
				isSearchable={false}
			/>
		</div>
	);
});
