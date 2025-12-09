import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { about: "About Us", mission: "Our Mission", purpose: "Purpose", values: "Values", contact: "Contact Us", donate: "Donate" },
      hero: { 
        title: "IF WE LIVE, LET IT BE IN TRUTH", // <-- NEW SLOGAN (TITLE)
        subtitle: "Unwavering Support and Care for Cancer Patients and Their Families. Keeping the legacy of kindness and compassion alive.", // <-- NEW SUBTITLE
        cta: "Learn Our Mission" 
      },
      pageTitle: "Barkot Bekele Foundation", // <-- NEW PAGE TITLE TEXT
      
      // ... (Rest of English content remains the same) ...
      about: {
        title: "About Barkot Bekele Foundation",
        content1: "Barkot Bekele Foundation is a non-profit charitable organization established on Saturday, October 29, 2018 E.C. in Bishoftu City, Oromia Region, through the vision and initiative of Apostle Yidnekachew Shimelis, together with their children, family members, close relatives, spiritual children, and other kind-hearted individuals.",
        content2: "The foundation was established in memory of Mrs. Barkot Bekele, the beloved wife of Apostle Yidnekachew Shimelis and mother of three. She served faithfully with her husband, committed to the work of the Gospel with integrity. She was known especially for her role in genuine biblical service—supporting the poor and those in hardship. Because of her remarkable legacy of kindness and compassion, the foundation was established to keep her good works alive."
      },
      
      mission: {
        title: "Our Mission",
        content1: "The mission of Barkot Bekele Foundation is to provide unwavering support and care to cancer patients and their families. The foundation aims to reduce the psychological and economic impact that cancer places on individuals and communities.",
        content2: "By building rehabilitation centers and support facilities, the foundation seeks to reach and assist cancer patients effectively. This is the core mission and goal of the organization."
      },
      
      purpose: {
        title: "Our Purpose",
        content1: "The primary purpose of Barkot Bekele Foundation is to provide spiritual, emotional, financial, and material support to individuals suffering from cancer—whether they are hospitalized or receiving outpatient care—without discrimination of race, color, language, gender, or religion.",
        content2: "The foundation also aims to gather resources and offer follow-up support for patients who are discharged from hospitals and still need assistance. Our goal is to support them to the best of our ability and help them improve their well-being."
      },
      
      values: {
        title: "Our Core Values",
        v1Title: "Compassion",
        v1Content: "We believe in the power of kindness. We strive to be a source of comfort, hope, and strength for all we serve.",
        v2Title: "Unity",
        v2Content: "We understand that cancer affects not just individuals but also families and entire communities. We believe that by working together, we can create meaningful impact and positive change.",
        v3Title: "Equality",
        v3Content: "Regardless of race, gender, religion, ethnicity, or economic status, we believe every person is created equally in the image and honor of God. Therefore, we serve all with compassion and love.",
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
      nav: { about: "ስለ እኛ", mission: "ተልዕኮ", purpose: "ዓላማ", values: "እሴቶች", contact: "ያግኙን", donate: "ለግስ" },
      hero: { 
        title: "የእውነት ኖረን የውሸት አንሙት", // <-- NEW SLOGAN (TITLE)
        subtitle: "ጽኑ ድጋፍ እና እንክብካቤ ለካንሰር በሽተኞች እና ቤተሰቦቻቸው። የእርሷን ደግነትና ርህራሄ ህያው ለማድረግ ቁርጠኞች ነን።", // <-- NEW SUBTITLE
        cta: "ተልዕኮአችንን ይወቁ" 
      },
      pageTitle: "ባርኮት በቀለ ፋውንዴሽን", // <-- NEW PAGE TITLE TEXT
      
      // ... (Rest of Amharic content remains the same) ...
      about: { 
        title: "ስለ ባርኮት በቀለ ፋውንዴሽን", 
        content1: "ባርኮት በቀለ ፋውንዴሽን በኦሮሚያ ክልል በቢሾፍቱ ከተማ በዕለተ ቅዳሜ ጥቅምት 29 2018 ዓ.ም በሀዋርያ ይድነቃቸው ሽመልስ ሃሳብ አመንጪነት እና በልጆቻቸው፣ቤተሰቦቻቸው፣ወዳጅ ዘመዶች፣በመንፈሳዊ ልጆች እንዲሁም ልበ ቅን የሆኑና ለመልካም ስራ የተነሳሱ መልካምን ማድረግ በሚያስደስታቸው አባላት የተመሰረተ ለትርፍ ያልተቋቋም የበጎ አድራጎት ድርጅት ነው::", 
        content2: "ይህ ድርጅት ወ/ሮ ባርኮት በቀለ የአፓስትል ይድነቃቸው ሽመልስ ባለቤት እና የሶስት ልጆች እናት የሆኑትን ለማሰብ የተመሰረተ ነው:: ወ/ሮ ባርኮት በቀለ በሕይወት ዘመናቸው በነበረባቸው የአገልግሎት ዘመን ከባለቤታቸው ጋር በመሆን የወንጌል ተልዕኮን በትጋትና በፍጹም ቅንነት ያገለገሉ፣ በተለይ ደግሞ ድሆችንና ችግረኞችን የማሰብ አገልግሎት ላይ የጎላ ሚና የነበራቸው ስለነበሩ ይህንን በእሳቸው የተጀመረውን መልካም አርአያነት ያለው ሌጋሲ ህያው ይሆን ዘንድ ባርኮት በቀለ ፋውንዴሽን በሚል ለመልካም ስራቸው ማስታወሻ ይሆን ዘንድ ተመሰረተ።" 
      },
      mission: { 
        title: "ተልዕኮ", 
        content1: "የባርኮት በቀለ ፋውንዴሽን ተልእኮ ለካንሰር ህመምተኞች እና ለቤተሰቦቻቸው የማያወላውል ድጋፍ እና እንክብካቤን ማድረግ ነው፡፡ ካንሰር በግለሰቦች እና በህብረተሰብ ላይ የሚያደርሰውን የስነ-ልቦናዊ እና የኢኮኖሚያዊ ተጽዕኖ ማቅለል የፋውንዴሽን ተልዕኮ ነው።", 
        content2: "ግለሰቦች ለካንሰር ህክምና እና ክትትል የሚያደርጉባቸውን የማገገሚያ ተቋማትን በመገንባት ለካንሰር ህሙማን መድረስና መደገፍ የፋውንዴሽን ዋነኛው ግብ ነው።" 
      },
      purpose: { 
        title: "ዓላማ", 
        content1: "ባርኮት በቀለ ፋውንዴሽን በዋነኝነት በካንሰር በሽታ ተይዘው በተለያዩ ሀክምና ተቋማት ውስጥ ሆነው ወይም በተመላላሽነት ህክምና እያገኙ ላሉ ወገኖች የዘር ፤የቀለም፤ የቋንቋ ፤ የጾታ እና የሀይማኖት ልዩነት ሳያደርግ መንፈሳዊና ስነ-ልቦናዊ እንዲሁም የገንዘብና የቁሳቁስ ድጋፍን ማድረግ ነው።", 
        content2: "ፋውንዴሽኑ በሆስፒታል ውስጥ ክትትል ጨርሰው ለሚወጡት ድጋፍና እንክብካቤ የሚያሻቸውን በማእከል ውስጥ በማሰባሰብ በተቻለ አቅም ድጋፍና ክትትል ማድረግ ዋና አላማው ነው።" 
      },
      values: { 
        title: "ዋና እሴቶቻችን", 
        v1Title: "ርኅራኄ", 
        v1Content: "በደግነት ኃይል እናምናለን እርስ በእርሳችን መደጋገፍ አስፈላጊ መሆኑን እናምናለን በተለይም በጣም አስቸጋሪ በሆኑ የህይወት ወቅት ላይ ለምናገለግላቸው ሁሉ የመጽናናት፣ የተስፋ እና የብርታት ምንጭ ለመሆን እንጥራለን።", 
        v2Title: "አንድነት", 
        v2Content: "ካንሰር የአንድን ሰው ብቻ ሳይሆን ቤተሰብን እና መላውን የህብረተሰብ ክፍል እንደሚጎዳ እንረዳለን። በጋራ አብሮ በመስራት ልዩነትን እና ተጽዕኖ ማምጣት እንደሚቻል እናምናለን።", 
        v3Title: "እኩልነት", 
        v3Content: "ዘር፣ ፆታ፣ ሃይማኖት፣ ብሄር ወይም ማንኛውም የኢኮኖሚ ደረጃ ቢሆን እያንዳንዱን ሰው እኩል በእግዚአብሔር ክብር እና አምሳል እንደተፈጠረ በማመን በሙሉ ርኅራኄ እና ፍቅር እናገለግላለን።" 
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
      
      donate: {
        bankTitle: "የባንክ ሂሳቦች",
        telebirrTitle: "ቴሌብር / QR ኮድ"
      },
      
      footer: { rights: "ባርኮት በቀለ ፋውንዴሽን። መብቱ በህግ የተጠበቀ ነው።" }
    }
  },
  om: {
    translation: {
      nav: { about: "Waa'ee Keenya", mission: "Ergama", purpose: "Kaayyoo", values: "Duudhaalee", contact: "Nu Quunnamaa", donate: "Arjoomaa" },
      hero: { 
        title: "Yoo dhugaan jiraanne, dhugaa waliin haa jiraannu.", // <-- NEW SLOGAN (TITLE)
        subtitle: "Deeggarsa cimaa fi kunuunsa Warra Kaanseradhan Qabamaniif. Gocha ishii gaarii jiraachisuuf waadaa galleerra.", // <-- NEW SUBTITLE
        cta: "Ergama Keenya Beekaa" 
      },
      pageTitle: "FA'ONDEESHIINII BARKOOT BEQQELEE", // <-- NEW PAGE TITLE TEXT
      
      // ... (Placeholder Oromiffa content remains the same) ...
      about: { title: "Waa'ee Faawundeeshinii Barkot Baqqalaa", content1: "[Oromiffa content goes here]", content2: "" },
      mission: { title: "Ergama Keenya", content1: "[Oromiffa content goes here]", content2: "" },
      purpose: { title: "Kaayyoo Keenya", content1: "[Oromiffa content goes here]", content2: "" },
      values: { title: "Duudhaalee Ijoo Keenya", v1Title: "Gara-laafina", v1Content: "[Oromiffa content goes here]", v2Title: "Tokkummaa", v2Content: "[Oromiffa content goes here]", v3Title: "Walqixxummaa", v3Content: "[Oromiffa content goes here]" },
      
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
      
      donate: {
        bankTitle: "Lakk. Baankii",
        telebirrTitle: "Telebirr / QR Code"
      },
      
      footer: { rights: "Faawundeeshinii Barkot Baqqalaa. Mirgi Isaa Eegamaadha." }
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources, fallbackLng: 'en', interpolation: { escapeValue: false }
});

export default i18n;
