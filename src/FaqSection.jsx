import React from 'react';
import { useTranslation } from 'react-i18next';
import './FaqSection.css';

const FaqSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="faq-section" id="faq">
      <h2 className="faq-title">{t('faqSection.title')}</h2>
      <div className="faq-items">
        {t('faqSection.items', { returnObjects: true }).map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;