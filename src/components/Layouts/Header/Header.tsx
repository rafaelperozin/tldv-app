import React from 'react'

export const Header = () => {
  return (
    <header className="header">
      <div className="theme__container header__container">
        <div className="header__logo">Logo</div>
        <nav className="header__navigation navigation">
          <a className="navigation__link txt-bold txt-s" href="/">Home</a>
          <a className="navigation__link txt-bold txt-s" href="/universities">Our Universities</a>
        </nav>
      </div>
    </header>
  )
}
