import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './GalleryCards.css';
import image1 from './G1.PNG';
import image2 from './G2.jpg';
import image3 from './G3.jpg';
import image4 from './G4.PNG';
import image5 from './G5.PNG';
import image6 from './G6.jpg';
import image7 from './G7.jpg';
import image8 from './G8.jpg';

const GalleryCards = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null);
  const [direction, setDirection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cards = [
    { 
      id: 1, 
      title: t('gallery.weddings'), 
      images: [image1, image2],
      comments: [
        { name: "Анна", text: "Прекрасная организация свадьбы!" },
        { name: "Иван", text: "Очень красивые фотографии получились." }
      ]
    },
    { 
      id: 2, 
      title: t('gallery.corporate'), 
      images: [image4, image3],
      comments: [
        { name: "Ольга", text: "Отличный корпоратив, всем понравилось!" },
        { name: "Дмитрий", text: "Профессиональная работа фотографа." }
      ]
    },
    { 
      id: 3, 
      title: t('gallery.children'), 
      images: [image5, image6],
      comments: [
        { name: "Елена", text: "Дети были в восторге!" },
        { name: "Сергей", text: "Очень атмосферные фотографии." }
      ]
    },
    { 
      id: 4, 
      title: t('gallery.official'), 
      images: [image7, image8],
      comments: [
        { name: "Алексей", text: "Все прошло на высшем уровне." },
        { name: "Мария", text: "Отличная организация мероприятия." }
      ]
    }
  ];

  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.classList.remove('modal-open');
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.classList.remove('modal-open');
    };
  }, [activeCard]);

  const handleCardClick = (id) => {
    setDirection('right');
    setActiveCard(id);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setDirection('left');
    setTimeout(() => setActiveCard(null), 500);
  };

  const nextImage = () => {
    setDirection('right');
    const currentCard = cards.find(card => card.id === activeCard);
    setCurrentImageIndex((prev) => 
      (prev + 1) % currentCard.images.length
    );
  };

  const prevImage = () => {
    setDirection('left');
    const currentCard = cards.find(card => card.id === activeCard);
    setCurrentImageIndex((prev) => 
      (prev - 1 + currentCard.images.length) % currentCard.images.length
    );
  };

  return (
    <div className="gallery-section">
      <h2 className="gallery-main-title">{t('gallery.title')}</h2>
      <div className="gallery-container">
        {!activeCard ? (
          <div className="cards-grid">
            {cards.map(card => (
              <div 
                key={card.id}
                className="card"
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-content">
                  <h3>{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`card-expanded ${direction}`}>
            <div className="expanded-content-wrapper">
              <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={handleClose}>{t('gallery.closeBtn')}</button>
                
                <div className="image-navigation">
                  <button className="nav-btn prev" onClick={prevImage}>{t('gallery.prevBtn')}</button>
                  
                  <div className="image-container">
                    <img 
                      src={cards.find(card => card.id === activeCard).images[currentImageIndex]} 
                      alt={cards.find(card => card.id === activeCard).title}
                      className={`expanded-image ${direction}`}
                    />
                  </div>
                  
                  <button className="nav-btn next" onClick={nextImage}>{t('gallery.nextBtn')}</button>
                </div>
                
                <div className="image-info">
                  <h2>{cards.find(card => card.id === activeCard).title}</h2>
                  <p>
                    {t('gallery.photoCounter', {
                      current: currentImageIndex + 1,
                      total: cards.find(card => card.id === activeCard).images.length
                    })}
                  </p>
                  
                  <div className="comment-section">
                    <h3>{t('gallery.comments')}</h3>
                    {cards.find(card => card.id === activeCard).comments.map((comment, index) => (
                      <div key={index} className="comment">
                        <p className="comment-name">{comment.name}</p>
                        <p className="comment-text">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCards;