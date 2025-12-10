import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { about: "About Us", mission: "Our Mission", purpose: "Purpose", values: "Values", works: "Our Work", board: "Board Members", contact: "Contact Us", donate: "Donate" }, // <-- UPDATED NAV
      hero: { 
        title: "IF WE LIVE, LET IT BE IN TRUTH",
        subtitle: "Unwavering Support and Care for Cancer Patients and Their Families. Keeping the legacy of kindness and compassion alive.",
        cta: "Learn Our Mission" 
      },
      pageTitle: "Barkot Bekele Foundation",
      
      // ... (Content sections) ...
      
      works: { 
        title: "Our Work in Action",
        note: "These photos illustrate the foundation's facility, outreach, and patient support activities."
      },

      board: { // <-- NEW SECTION
          title: "Our Dedicated Board",
          founder: "Founder",
          ceo: "CEO / Board Member",
          finance: "Finance Officer / Board Member",
          note: "The Barkot Bekele Foundation is guided by dedicated individuals committed to the cause."
      },

      contact: {
        title: "Contact Us",
        call: "Call Us",
        email: "Email Us",
        locationTitle: "Our Location",
        formTitle: "Send Us a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message/Inquiry",
        sendButton: "Send Message"
      },

      donate: {
        bankTitle: "Bank Accounts",
        telebirrTitle: "Telebirr / QR Code"
      },
      
      footer: { rights: "Barkot Bekele Foundation. All rights reserved." }
    }
  },
  am: {
    translation: {
      nav: { about: "ስለ እኛ", mission: "ተልዕኮ", purpose: "ዓላማ", values: "እሴቶች", works: "የስራችን ምስሎች", board: "የቦርድ አባላት", contact: "ያግኙን", donate: "ለግስ" }, // <-- UPDATED NAV
      hero: { 
        title: "የእውነት ኖረን የውሸት አንሙት",
        subtitle: "ጽኑ ድጋፍ እና እንክብካቤ ለካንሰር በሽተኞች እና ቤተሰቦቻቸው። የእርሷን ደግነትና ርህራሄ ህያው ለማድረግ ቁርጠኞች ነን።",
        cta: "ተልዕኮአችንን ይወቁ" 
      },
      pageTitle: "ባርኮት በቀለ ፋውንዴሽን",
      
      // ... (Content sections) ...

      works: { 
        title: "የስራችን ምስሎች",
        note: "እነዚህ ምስሎች የፋውንዴሽኑን ሕንፃ፣ የእርዳታ ስራ እና የሕሙማን ድጋፍ እንቅስቃሴዎችን ያሳያሉ።"
      },
      
      board: { // <-- NEW SECTION
          title: "ቁርጠኛ የቦርድ አባላቶቻችን",
          founder: "መስራች",
          ceo: "ዋና ሥራ አስፈፃሚ / የቦርድ አባል",
          finance: "የፋይናንስ ኦፊሰር / የቦርድ አባል",
          note: "ባርኮት በቀለ ፋውንዴሽን ለዓላማው ቁርጠኛ በሆኑ ግለሰቦች ይመራል።"
      },

      contact: {
        title: "ያግኙን",
        call: "ይደውሉልን",
        email: "ኢሜይል ያድርጉልን",
        locationTitle: "አድራሻችን",
        formTitle: "መልዕክት ይላኩልን",
        namePlaceholder: "ሙሉ ስም",
        emailPlaceholder: "ኢሜይል",
        messagePlaceholder: "መልዕክትዎ",
        sendButton: "መልዕክት ይላኩ"
      },
      // ... (Donate and Footer content) ...
    }
  },
  om: {
    translation: {
      nav: { about: "Waa'ee Keenya", mission: "Ergama", purpose: "Kaayyoo", values: "Duudhaalee", works: "Hojii Keenya", board: "Miseensota Boordii", contact: "Nu Quunnamaa", donate: "Arjoomaa" }, // <-- UPDATED NAV
      hero: { 
        title: "Yoo dhugaan jiraanne, dhugaa waliin haa jiraannu.",
        subtitle: "Deeggarsa cimaa fi kunuunsa Warra Kaanseradhan Qabamaniif. Gocha ishii gaarii jiraachisuuf waadaa galleerra.",
        cta: "Ergama Keenya Beekaa" 
      },
      pageTitle: "FA'ONDEESHIINII BARKOOT BEQQELEE",
      
      // ... (Content sections) ...
      
      works: { 
        title: "Hojii Keenya Argisiisaa",
        note: "Suuraawwan kun hojii keenya, dhaabbata keenya, fi jijjiirama gochaa jirru argisiisu."
      },
      
      board: { // <-- NEW SECTION
          title: "Miseensota Boordii Keenya Cimaa",
          founder: "Hundeesaa",
          ceo: "Hojii Gaggeessaa Olaanaa / Miseensa Boordii",
          finance: "Hojii Gaggeessaa Faayinaansii / Miseensa Boordii",
          note: "Faawundeeshiniin Barkoot Baqqalaa namoota kaayyoo isaaf of kennaniin hogganama."
      },

      contact: {
        title: "Nu Quunnamaa",
        call: "Nu waamaa",
        email: "Email Nuuf ergaa",
        locationTitle: "Bakka Keenya",
        formTitle: "Ergaa Nuuf Ergaa",
        namePlaceholder: "Maqaa Keessan",
        emailPlaceholder: "Email Keessan",
        messagePlaceholder: "Ergaa Keessan",
        sendButton: "Ergaa Ergi"
      },
      // ... (Donate and Footer content) ...
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources, fallbackLng: 'en', interpolation: { escapeValue: false }
});

export default i18n;
