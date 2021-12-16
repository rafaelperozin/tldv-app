import React from 'react'
import { LanguageSelector } from '../../Language/LanguageSelector'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="theme__container footer__container">
        <LanguageSelector />
        <div className="footer__share">Share buttons</div>
      </div>
    </footer>
  )
}
