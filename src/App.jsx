import React from 'react';
import './App.css';
import Header from './Header';
import PresenterCard from './PresenterCard';
import GalleryCards from './GalleryCards';
import FaqSection from './FaqSection';
import ContactsSection from './ContactsSection';

function App() {
  return (
    <div className="app-container">
      <Header />
      <section id="presenter" className="page-section">
        <div className="section-container">
          <PresenterCard />
        </div>
      </section>
      
      <section id="gallery" className="page-section">
        <div className="section-container">
          <GalleryCards />
        </div>
      </section>
      
      <section id="faq" className="page-section">
        <div className="section-container">
          <FaqSection />
        </div>
      </section>
      
      <section id="contacts" className="page-section">
        <div className="section-container">
          <ContactsSection />
        </div>
      </section>
    </div>
  );
}

export default App;