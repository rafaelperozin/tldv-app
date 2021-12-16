import React from 'react'
import { useTranslate } from '../../i18n/translate.hook';
import { UniversitiesDto } from '../../stores/universities.store'
import { CustomModalProps } from '../Modal/modal.model'
import { Modal } from '../Modal/Modals'

export type itemInfo = Pick<UniversitiesDto, "country" | "web_pages" | "name">;

interface UniversityModalProps extends CustomModalProps {
  info: itemInfo;
}

export const UniversityModal = ({ open, onClose, info }: UniversityModalProps) => {
  const { country, web_pages, name } = info;
  const { translate } = useTranslate();

  return (
    <Modal open={open} onClose={() => onClose()}>
      <h1>{name}</h1>
      <p>{country}</p>
      <p>{translate('universities.pages')}</p>
      <ul>
        {web_pages.map((pageLink: string, index: number) => (
          // The KEY prop should be a uniqueId or the item ID, but to save time I'm using index for now.
          <li key={index}>
            <a href={pageLink} title={`${name}'s page`} target="_blank" rel="noreferrer">{pageLink}</a>
          </li>
        ))}
      </ul>
    </Modal>
  )
}
