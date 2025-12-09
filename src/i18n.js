import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { about: "About Us", vision: "Vision", values: "Values", contact: "Contact", donate: "Donate" },
      hero: { title: "Empowering Communities, Transforming Lives.", subtitle: "The Barkot Bekele Foundation is dedicated to creating lasting change through sustainable initiatives.", cta: "Our Mission" },
      about: { title: "About Us", content: "The Barkot Bekele Foundation was established with a commitment to serve underrepresented communities. We believe in the power of collective action." },
      values: { title: "Our Values", v1: "Integrity", v2: "Compassion", v3: "Empowerment", v4: "Sustainability" },
      footer: { rights: "Barkot Bekele Foundation. All rights reserved." }
    }
  },
  am: {
    translation: {
      nav: { about: "ስለ እኛ", vision: "ራዕይ", values: "እሴቶች", contact: "ያግኙን", donate: "ለግስ" },
      hero: { title: "ማህበረሰቦችን ማብቃት ፣ ህይወትን መለወጥ።", subtitle: "ባርኮት በቀለ ፋውንዴሽን ዘላቂ ለውጥ ለማምጣት ቁርጠኛ ነው።", cta: "ተልዕኮአችን" },
      about: { title: "ስለ እኛ", content: "ባርኮት በቀለ ፋውንዴሽን የተቋቋመው ማህበረሰቡን ለማገልገል ነው።" },
      values: { title: "እሴቶቻችን", v1: "ታማኝነት", v2: "ርህራሄ", v3: "ማብቃት", v4: "ዘላቂነት" },
      footer: { rights: "ባርኮት በቀለ ፋውንዴሽን። መብቱ በህግ የተጠበቀ ነው።" }
    }
  },
  om: {
    translation: {
      nav: { about: "Waa'ee Keenya", vision: "Mul'ata", values: "Duudhaalee", contact: "Nu Quunnamaa", donate: "Arjoomaa" },
      hero: { title: "Hawaasa Gahoomsuu, Jireenya Jijjiiruu.", subtitle: "Faawundeeshiniin Barkot Baqqalaa jijjiirama waaraa fiduuf kutannoodhan hojjata.", cta: "Ergama Keenya" },
      about: { title: "Waa'ee Keenya", content: "Faawundeeshiniin Barkot Baqqalaa hawaasa tajaajiluuf hundeeffame." },
      values: { title: "Duudhaalee Keenya", v1: "Amanamummaa", v2: "Gara-laafina", v3: "Gahoomsuu", v4: "Ittifufiinsa" },
      footer: { rights: "Faawundeeshinii Barkot Baqqalaa. Mirgi Isaa Seeraan Eegamaadha." }
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources, fallbackLng: 'en', interpolation: { escapeValue: false }
});

export default i18n;
