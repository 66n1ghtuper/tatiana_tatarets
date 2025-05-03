
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactsSection.css';

const ContactsSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="contacts-section" id="contacts">
      <h2 className="contacts-title">{t('contactsSection.title')}</h2>
      
      <div className="contacts-content">
        <div className="contacts-info">
          <div className="contact-item">
            <span className="contact-label">{t('contactsSection.call')}</span>
            <a href="tel:+79284145085" className="contact-value">+7 928 41 45 085</a>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">{t('contactsSection.write')}</span>
            <a href="mailto:tatarec.tatyana2001@gmail.com" className="contact-value">tatarec.tatyana2001@gmail.com</a>
          </div>
          
          <div className="contact-item">
            <span className="contact-label">{t('contactsSection.social')}</span>
            <div className="social-links">
              <a href="#" className="social-link">{t('contactsSection.instagram')}</a>
              <a href="#" className="social-link">{t('contactsSection.vk')}</a>
              <a href="https://t.me/ttanya01" className="social-link">
  {t('contactsSection.telegram')}
</a>
            </div>
          </div>
          
          <a href="/portfolio.pdf" download className="download-btn">
            {t('contactsSection.downloadPortfolio')}
          </a>
        </div>
        
        <div className="contacts-quote">
          <p className="quote-text">
            {t('contactsSection.quote')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;