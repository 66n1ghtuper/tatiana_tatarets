import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './PresenterCard.css';
import presenterMainImage from './q2.jpg';
import presenterImage1 from './q3.jpg';
import presenterImage2 from './q4.jpg';
import presenterImage3 from './q5.jpg';

const PresenterCard = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const slides = [
    {
      image: presenterMainImage,
      title: t('presenter.greeting'),
      features: [t('presenter.description')],
      isMainSlide: true
    },
    {
      image: presenterImage1,
      title: t('presenter.whyChooseMe'),
      features: [
        t('presenter.features.engagement'),
        t('presenter.features.individual'),
        t('presenter.features.stress'),
        t('presenter.features.enjoy')
      ]
    },
    {
      image: presenterImage2,
      title: t('presenter.iOrganize'),
      features: [
        t('presenter.events.weddings'),
        t('presenter.events.corporate'),
        t('presenter.events.children'),
        t('presenter.events.creative'),
        t('presenter.events.official')
      ]
    },
    {
      image: presenterImage3,
      title: t('presenter.advantages'),
      features: [
        t('presenter.benefits.flexibility'),
        t('presenter.benefits.experience'),
        t('presenter.benefits.control'),
        t('presenter.benefits.modern'),
        t('presenter.benefits.transparency')
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const botToken = '7814642594:AAGsOQ6r8yRxUqYRNWynxEWfkuQhfZebLh8'; 
    const chatId = '963689086';   
    
    const message = `Новая заявка на мероприятие:\n\nИмя: ${formData.name}\nТелеграм: ${formData.telegram}\nОписание: ${formData.description}`;
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });
      
      const data = await response.json();
      
      if (data.ok) {
        alert(t('presenter.form.success'));
        setIsModalOpen(false);
        setFormData({ name: '', telegram: '', description: '' });
      } else {
        throw new Error(data.description || t('presenter.form.error'));
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert(`${t('presenter.form.errorOccurred')}: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [slides.length, t]);

  return (
    <div className="presenter-container">
      <div className="info-container">
        <div className="text-content">
          {slides[currentSlide].isMainSlide ? (
            <div className="main-slide-content">
              <h2>
                <span className="greeting">{slides[currentSlide].title}</span>
                <span className="name">{t('presenter.name')}</span>
              </h2>
              <div className="main-description">
                {slides[currentSlide].features[0]}
              </div>
            </div>
          ) : (
            <>
              <h2>
                <span className="greeting">{t('presenter.greeting')}</span>
                <span className="name">{t('presenter.name')}</span>
              </h2>
              <div className="slider-content">
                <h3 className="slide-title">{slides[currentSlide].title}</h3>
                <ul className="features-list">
                  {slides[currentSlide].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
          
          <div className="ctar-section">
            <p className="ctar-text">
              {t('presenter.bookConsultation')}
            </p>
            <p className="quote">
              {t('presenter.quote')}
            </p>
            <button 
              className="ctar-button"
              onClick={() => setIsModalOpen(true)}
            >
              {t('discuss_event')}
            </button>
          </div>
        </div>
        
        <div className="presenter-image-container">
          <div className="image-frame"></div>
          <img 
            src={slides[currentSlide].image} 
            alt={t('presenter.imageAlt')}
            className="presenter-image"
          />
          <div className="image-glow"></div>
          
          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={t('presenter.goToSlide', { number: index + 1 })}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
              disabled={isSubmitting}
            >
              &times;
            </button>
            
            <h3>{t('presenter.requestTitle')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('presenter.nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="telegram">{t('presenter.telegramLabel')}</label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  required
                  placeholder="@username"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">{t('presenter.eventLabel')}</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  disabled={isSubmitting}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('presenter.sending') : t('presenter.submitButton')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresenterCard;