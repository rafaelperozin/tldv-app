import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { useStore } from '../context/store.context';
import { useTranslate } from '../i18n/translate.hook'
import { UniversitiesDto } from '../stores/universities.store';

export const UniversitiesPage = observer(() => {
  const { translate } = useTranslate();

  const { 
    universities: { universitiesList, fetchUniversities }
  } = useStore();

  useEffect(() => {
    fetchUniversities();
  }, [fetchUniversities]);

  return (
    <div>
      <h1>{translate('universities.title')}</h1>
      <ul>
        {universitiesList?.map(({ name, web_pages }: UniversitiesDto, index: number) => (
          // The KEY prop should be a uniqueId or the item ID, but to save time I'm using index for now.
          <li key={index}><a href={web_pages[0]} title={name} target="_blank" rel="noreferrer">{name}</a></li>

          // As this API don't have an endpoint to get university by id, 
          // instead of opening the university page, it's opening a modal with University details
          // and you can click on link to see the website.
        ))}
      </ul>
    </div>
  );
})
