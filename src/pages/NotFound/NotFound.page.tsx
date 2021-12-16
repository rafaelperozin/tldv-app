import React from 'react'
import { useTranslate } from '../../i18n/translate.hook';

export const NotFoundPage = () => {
  const { translate } = useTranslate();
  
  return (
    <main className="not-found">
      <div className="theme__container not-found__container">
        <h1>{translate('notFound.title')}</h1>
      </div>
    </main>
  )
}
