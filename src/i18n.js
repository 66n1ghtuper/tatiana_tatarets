import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Keywords: internationalization, localization, translation, multilingual support
const resources = {
  ru: {
    translation: {
      // Общие элементы
      gallery: "Галерея",
      faq: "FAQ",
      contacts: "Контакты",
      discuss_event: "Обсудить мероприятие",
      
      // Компонент PresenterCard
      presenter: {
        greeting: "Здравствуйте!",
        name: "Меня зовут Татьяна",
        description: "Я ведущий с 5 лет опыта и более 500 успешных мероприятий. Моя миссия — превратить ваш праздник в яркое шоу, где гости будут смеяться, участвовать и запомнят каждый момент или почувствуют атмосферу серьёзного торжественного события.",
        whyChooseMe: "Почему выбирают меня?",
        iOrganize: "Я провожу:",
        advantages: "Преимущества",
        
        // Особенности
        features: {
          engagement: "Максимальная вовлечённость аудитории — никаких скучных пауз!",
          individual: "Индивидуальный сценарий — под ваши цели и стиль",
          stress: "Стрессоустойчивость и гибкость — решаю неожиданности «на лету»",
          enjoy: "Главное - я кайфую, когда кайфуете вы!"
        },
        
        // Мероприятия
        events: {
          weddings: "Свадьбы — от трогательного выкупа до безумной дискотеки",
          corporate: "Корпоративы — тимбилдинги, юбилеи компании, новогодние вечера",
          children: "Детские праздники — квесты, анимация, шоу-программы",
          creative: "Творческие проекты — презентации, открытия, фестивали",
          official: "Официальные мероприятия с присутствием высокопоставленных лиц"
        },
        
        // Преимущества
        benefits: {
          flexibility: "Гибкость — адаптируюсь под ваши пожелания, даже если всё меняется в последний момент",
          experience: "Опыт — работала с аудиторией от 1 до 1000 человек",
          control: "Полный контроль — беру на себя организацию тайминга и логистики мероприятия",
          modern: "Современный формат — интерактивы, челленджи, викторины",
          transparency: "Прозрачность — фиксированная цена и договор"
        },
        
        // Форма
        bookConsultation: "Хотите идеальное мероприятие? Оставьте заявку сейчас — забронируйте дату и получите бесплатную консультацию!",
        quote: "«Не бывает скучных событий — бывают неправильные ведущие. А я знаю, как сделать правильно!»",
        requestTitle: "Оставьте заявку",
        nameLabel: "Ваше имя:",
        telegramLabel: "Ваш Telegram:",
        eventLabel: "Описание мероприятия:",
        submitButton: "Отправить заявку",
        sending: "Отправка...",
        success: "Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.",
        error: "Ошибка отправки",
        errorOccurred: "Произошла ошибка",
        imageAlt: "Татьяна - ведущий мероприятий",
        goToSlide: "Перейти к слайду {{number}}"
      },
      gallery: {
        title: "Галерея",
        weddings: "Свадьбы",
        corporate: "Корпоративы",
        children: "Детские праздники",
        official: "Официальные мероприятия",
        photoCounter: "Фото {{current}} из {{total}}",
        comments: "Комментарии",
        closeBtn: "×",
        prevBtn: "‹",
        nextBtn: "›"
      },
      faqSection: {
        title: "FAQ",
        items: [
          {
            question: "Как происходит подготовка?",
            answer: "— Обсуждаем идеи, составляем сценарий, репетируем ключевые моменты."
          },
          {
            question: "Какие цены?",
            answer: "— Стоимость зависит от формата и длительности. Минимальный пакет — от 10 000 руб."
          },
          {
            question: "Работаете ли вы в других городах?",
            answer: "— Да! Выезд по России и за рубеж."
          }
        ]
      },
      contactsSection: {
        title: "Контакты",
        call: "Звоните:",
        write: "Пишите:",
        social: "Соцсети:",
        instagram: "Instagram",
        vk: "VK",
        telegram: "Telegram",
        downloadPortfolio: "Скачать портфолио в PDF",
        quote: "«Ваш праздник — моя профессия. Давайте сделаем с чувством, с толком, с расстановкой или.. запланируем импровизацию!»"
      }
    }
  },
  en: {
    translation: {
      // Common elements
      gallery: "Gallery",
      faq: "FAQ",
      contacts: "Contacts",
      discuss_event: "Discuss event",
      
      // PresenterCard component
      presenter: {
        greeting: "Hello!",
        name: "My name is Tatyana",
        description: "I'm a professional host with 5 years of experience and over 500 successful events. My mission is to turn your celebration into a bright show where guests will laugh, participate and remember every moment or feel the atmosphere of a solemn event.",
        whyChooseMe: "Why choose me?",
        iOrganize: "I organize:",
        advantages: "Advantages",
        
        // Features
        features: {
          engagement: "Maximum audience engagement - no boring pauses!",
          individual: "Individual scenario - tailored to your goals and style",
          stress: "Stress resistance and flexibility - solving unexpected situations on the fly",
          enjoy: "Most importantly - I enjoy when you enjoy!"
        },
        
        // Events
        events: {
          weddings: "Weddings - from touching bride ransom to crazy disco",
          corporate: "Corporate events - team building, company anniversaries, New Year's parties",
          children: "Children's parties - quests, animation, show programs",
          creative: "Creative projects - presentations, openings, festivals",
          official: "Official events with high-ranking persons"
        },
        
        // Benefits
        benefits: {
          flexibility: "Flexibility - adapt to your wishes, even if everything changes at the last moment",
          experience: "Experience - worked with audiences from 1 to 1000 people",
          control: "Full control - take over the organization of timing and logistics of the event",
          modern: "Modern format - interactives, challenges, quizzes",
          transparency: "Transparency - fixed price and contract"
        },
        
        // Form
        bookConsultation: "Want a perfect event? Leave a request now - book a date and get a free consultation!",
        quote: "«There are no boring events - only wrong hosts. And I know how to do it right!»",
        requestTitle: "Leave a request",
        nameLabel: "Your name:",
        telegramLabel: "Your Telegram:",
        eventLabel: "Event description:",
        submitButton: "Submit",
        sending: "Sending...",
        success: "Your application has been sent! We will contact you shortly.",
        error: "Sending error",
        errorOccurred: "An error occurred",
        imageAlt: "Tatyana - event host",
        goToSlide: "Go to slide {{number}}"
      },
      gallery: {
        title: "Gallery",
        weddings: "Weddings",
        corporate: "Corporate events",
        children: "Children's parties",
        official: "Official events",
        photoCounter: "Photo {{current}} of {{total}}",
        comments: "Comments",
        closeBtn: "×",
        prevBtn: "‹",
        nextBtn: "›"
      },
      faqSection: {
        title: "FAQ",
        items: [
          {
            question: "How does the preparation work?",
            answer: "— We discuss ideas, create a script, and rehearse key moments."
          },
          {
            question: "What are the prices?",
            answer: "— The cost depends on the format and duration. The minimum package starts from 10,000 RUB."
          },
          {
            question: "Do you work in other cities?",
            answer: "— Yes! We travel across Russia and abroad."
          }
        ]
      },
      contactsSection: {
        title: "Contacts",
        call: "Call:",
        write: "Write:",
        social: "Social media:",
        instagram: "Instagram",
        vk: "VK",
        telegram: "Telegram",
        downloadPortfolio: "Download portfolio in PDF",
        quote: "«Your celebration is my profession. Let's do it with feeling, with sense, with arrangement or.. plan an improvisation!»"
      }
    }
  },
  tr: {
    translation: {
      // Genel öğeler
      gallery: "Galeri",
      faq: "SSS",
      contacts: "İletişim",
      discuss_event: "Etkinlik görüşmesi",
      
      // PresenterCard bileşeni
      presenter: {
        greeting: "Merhaba!",
        name: "Benim adım Tatyana",
        description: "5 yıllık deneyim ve 500'den fazla başarılı etkinlikle profesyonel bir sunucuyum. Misyonum, kutlamanızı konukların güleceği, katılacağı ve her anı hatırlayacağı veya ciddi bir etkinliğin atmosferini hissedeceği parlak bir şova dönüştürmek.",
        whyChooseMe: "Neden beni seçmelisiniz?",
        iOrganize: "Düzenlediğim etkinlikler:",
        advantages: "Avantajlar",
        
        // Özellikler
        features: {
          engagement: "Maksimum katılımcı katılımı - sıkıcı duraklamalar yok!",
          individual: "Bireysel senaryo - hedeflerinize ve tarzınıza uygun",
          stress: "Stres direnci ve esneklik - beklenmedik durumları anında çözme",
          enjoy: "En önemlisi - siz eğlendikçe ben de eğleniyorum!"
        },
        
        // Etkinlikler
        events: {
          weddings: "Düğünler - dokunaklı gelin alma töreninden çılgın diskoya",
          corporate: "Kurumsal etkinlikler - takım oluşturma, şirket yıldönümleri, yılbaşı partileri",
          children: "Çocuk partileri - macera oyunları, animasyon, şov programları",
          creative: "Yaratıcı projeler - sunumlar, açılışlar, festivaller",
          official: "Üst düzey katılımcıların olduğu resmi etkinlikler"
        },
        
        // Avantajlar
        benefits: {
          flexibility: "Esneklik - son dakikada her şey değişse bile isteklerinize uyum sağlarım",
          experience: "Deneyim - 1 ile 1000 kişi arası katılımcılı etkinlikler",
          control: "Tam kontrol - etkinliğin zamanlamasını ve lojistiğini üstleniyorum",
          modern: "Modern format - etkileşimler, mücadeleler, bilgi yarışmaları",
          transparency: "Şeffaflık - sabit fiyat ve sözleşme"
        },
        
        // Form
        bookConsultation: "Mükemmel bir etkinlik mi istiyorsunuz? Hemen talep bırakın - tarih ayırtın ve ücretsiz danışmanlık alın!",
        quote: "«Sıkıcı etkinlikler yoktur - sadece yanlış sunucular vardır. Ben nasıl doğru yapılacağını biliyorum!»",
        requestTitle: "Talep bırakın",
        nameLabel: "Adınız:",
        telegramLabel: "Telegram:",
        eventLabel: "Etkinlik açıklaması:",
        submitButton: "Gönder",
        sending: "Gönderiliyor...",
        success: "Başvurunuz gönderildi! En kısa sürede sizinle iletişime geçeceğiz.",
        error: "Gönderme hatası",
        errorOccurred: "Bir hata oluştu",
        imageAlt: "Tatyana - etkinlik sunucusu",
        goToSlide: "Slayt {{number}}'a git"
      },
      gallery: {
        title: "Galeri",
        weddings: "Düğünler",
        corporate: "Kurumsal etkinlikler",
        children: "Çocuk partileri",
        official: "Resmi etkinlikler",
        photoCounter: "Fotoğraf {{current}} / {{total}}",
        comments: "Yorumlar",
        closeBtn: "×",
        prevBtn: "‹",
        nextBtn: "›"
      },
      faqSection: {
        title: "SSS",
        items: [
          {
            question: "Hazırlık süreci nasıl işliyor?",
            answer: "— Fikirleri tartışıyoruz, senaryo oluşturuyoruz ve önemli anları prova ediyoruz."
          },
          {
            question: "Fiyatlar nedir?",
            answer: "— Maliyet format ve süreye bağlıdır. Minimum paket 10.000 RUB'dan başlar."
          },
          {
            question: "Diğer şehirlerde çalışıyor musunuz?",
            answer: "— Evet! Rusya genelinde ve yurtdışında hizmet veriyoruz."
          }
        ]
      },
      contactsSection: {
        title: "İletişim",
        call: "Arayın:",
        write: "Yazın:",
        social: "Sosyal medya:",
        instagram: "Instagram",
        vk: "VK",
        telegram: "Telegram",
        downloadPortfolio: "PDF portföyü indir",
        quote: "«Kutlamanız benim işim. Hadi duyguyla, mantıkla, düzenle yapalım ya da.. doğaçlama planlayalım!»"
      }
    }
  }
};

const i18nInstance = i18n.createInstance();

i18nInstance
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('selectedLanguage') || 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18nInstance;