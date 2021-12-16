
import { observer } from 'mobx-react-lite';
import { ReactNode, useEffect } from 'react';
import {useTranslate} from './translate.hook';

interface LanguagesControllerProps {
  children: ReactNode;
}

const LanguageController = observer(({children}: LanguagesControllerProps) => {
  const {setLanguage, currentLanguage} = useTranslate();

  useEffect(() => {
    setLanguage(currentLanguage);
  }, [currentLanguage, setLanguage]);

  return <>{children}</>;
});

export default LanguageController;
