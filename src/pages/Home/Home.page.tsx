import { observer } from 'mobx-react-lite';
import React from 'react'
import { useTranslate } from '../../i18n/translate.hook';

export const HomePage = observer(() => {
  const { translate } = useTranslate();

  return (
    <main className="home">
      <div className="theme__container home__container">
        <h1>{translate('home.title')}</h1>
      </div>
    </main>
  )
})
