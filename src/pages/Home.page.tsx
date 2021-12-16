import { observer } from 'mobx-react-lite';
import React from 'react'
import { useTranslate } from '../i18n/translate.hook';

export const HomePage = observer(() => {
  const { translate } = useTranslate();

  return (
    <div>
      {translate('home.title')}
    </div>
  )
})
