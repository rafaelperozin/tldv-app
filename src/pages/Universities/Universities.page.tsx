import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { itemInfo, UniversityModal } from '../../components/University/UniversityModal';
import { useStore } from '../../context/store.context';
import { useTranslate } from '../../i18n/translate.hook';
import { UniversitiesDto } from '../../stores/universities.store';

export const UniversitiesPage = observer(() => {
  const { translate } = useTranslate();
  const [universityDetails, setUniversityDetails] = useState<itemInfo | undefined>();

  const { 
    universities: { universitiesList, fetchUniversities }
  } = useStore();

  useEffect(() => {
    fetchUniversities();
  }, [fetchUniversities]);

  return (
    <>
      <main className="universities">
        <div className="theme__container universities__container">
          <h1 className="theme__title universities__title">{translate('universities.title')}</h1>
          <ul className="universities__list">
            {universitiesList?.map((university: UniversitiesDto, index: number) => (
              /* The KEY prop should be a uniqueId or the item ID, but to save time I'm using index for now. */
              <li className="universities__item" key={index} onClick={() => setUniversityDetails(university)}>{university.name}</li>

              /* As this API don't have an endpoint to get university by id, 
                instead of opening the university page, it's opening a modal with University details
                and you can click on link to see the website. */
            ))}
          </ul>
        </div>
      </main>
      {universityDetails && <UniversityModal open={universityDetails ? true : false} onClose={() => setUniversityDetails(undefined)} info={universityDetails} />}
    </>
  );
})
