import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
  };

  const languageOptions = {
    ru: 'RU',
    en: 'ENG',
    tr: 'TR'
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, 'gallery')}>
            {t('gallery.title')}
          </a>
          <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, 'faq')}>
            {t('faq')}
          </a>
          <a href="#contacts" className="nav-link" onClick={(e) => handleNavClick(e, 'contacts')}>
            {t('contacts')}
          </a>
        </nav>
        <div className="header-actions">
          <div className="language-selector">
            <button 
              className="language-button"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              {languageOptions[i18n.language] || 'RU'}
              <span className={`dropdown-arrow ${showLanguageDropdown ? 'open' : ''}`}>▼</span>
            </button>
            {showLanguageDropdown && (
              <div className="language-dropdown">
                {Object.entries(languageOptions).map(([langCode, langName]) => (
                  <button
                    key={langCode}
                    className={`dropdown-item ${i18n.language === langCode ? 'active' : ''}`}
                    onClick={() => changeLanguage(langCode)}
                  >
                    {langName}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button 
            className="cta-button"
            onClick={(e) => handleNavClick(e, 'presenter')}
          >
            {t('discuss_event')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;