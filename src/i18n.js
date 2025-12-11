// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Amharic and Oromiffa translations are placeholders and need to be finalized by the user.

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About Us',
        mission: 'Our Mission',
        values: 'Our Values',
        works: 'Gallery',
        legacy: 'Legacy Programs',
        board: 'Board Members',
        contact: 'Contact Us',
        donate: 'Donate',
      },
      hero: {
        title: 'Barkot Bekele Foundation: Lighting the way for the vulnerable.',
        subtitle: 'We are committed to delivering sustainable relief and empowering communities in Ethiopia through faith-based service, health support, and education.',
        cta: 'Discover Our Work',
      },
      about: {
        title: 'About Barkot Bekele Foundation',
        content1: 'Barkot Bekele Foundation is an organization established by the Ethiopian Orthodox Tewahedo Church in honor of W/o Barkot Bekele. The foundation is dedicated to continuing her legacy of compassionate service and commitment to the poor and vulnerable.',
        content2: 'We operate under the guidance and vision of Apostle Yidnekachew Shimelis and are focused on creating lasting, positive change in health, education, and social support.',
      },
      mission: {
        title: 'Our Mission',
        content1: 'To glorify God by providing sustainable relief, holistic support, and spiritual nourishment to the most vulnerable individuals and communities in Ethiopia.',
        content2: 'We strive to embody the love and compassion of Christ through every act of service.',
      },
      purpose: {
        title: 'Our Purpose',
        content1: 'To honor the legacy of W/o Barkot Bekele by transforming compassionate intent into tangible, life-changing action.',
        content2: 'We aim to serve as a beacon of hope, empowering the disadvantaged to achieve self-reliance and dignity.',
      },
      values: {
        title: 'Core Values',
        v1Title: 'Compassion',
        v1Content: 'We treat every person with dignity and unconditional love, prioritizing empathy in all our interactions.',
        v2Title: 'Integrity',
        v2Content: 'We maintain transparency, accountability, and ethical governance in all our operations and finances.',
        v3Title: 'Stewardship',
        v3Content: 'We are committed to the careful and responsible use of resources to maximize impact and sustainability.',
      },
      works: {
        title: 'Our Gallery and Works',
        note: 'The gallery showcases some of our ongoing initiatives and community support programs.',
      },
      legacy: {
        title: 'Legacy Programs',
        intro1: 'Although the Barkot Bekele Foundation is newly established, the charitable work that inspires it has been alive for many years. For the past nine years, Apostle Yidnekachew Shimelis and W/o Barkot Bekele led impactful charity initiatives within the church community. These programs reflected their deep compassion and commitment to uplifting those in need.',
        intro2: 'To honor and preserve her lifelong service, the foundation continues these charitable activities as Legacy Programs, passed down from her values and example.',
        programIncludes: 'Program Includes:',
        continuity: 'The Barkot Bekele Foundation proudly continues this program, keeping alive the spirit of giving that Barkot practiced throughout her life.',
        
        // Good Samaritan
        samaritanTitle: 'The Good Samaritan Program',
        samaritanIntro: 'For many years, on the birthday of Apostle Yidnekachew Shimelis, he and W/o Barkot Bekele initiated a special outreach called “The Good Samaritan.” This initiative was dear to Barkot Bekele’s heart, reflecting her compassion for the vulnerable.',
        samaritanItems: [
            'Visiting homeless communities and shelters',
            'Sharing meals and spending time with the homeless',
            'Donating essential items such as food, clothing, and hygiene supplies'
        ],

        // School Supplies
        schoolTitle: 'Annual School Supplies Support Program',
        schoolIntro: 'Every New Year, under the leadership of Apostle Yidnekachew Shimelis and W/o Barkot Bekele, the church organized support for children from low-income families by providing school supplies. This initiative ensured that children who could not afford school supplies would not fall behind simply because of poverty.',
        schoolItems: [
            'Exercise books',
            'Pens and pencils',
            'Backpacks',
            'Other basic educational materials'
        ],
      },
      board: {
        title: 'Board Members',
        founder: 'Founder & Board Chairman',
        ceo: 'Chief Executive Officer (CEO)',
        finance: 'Finance Officer',
        note: 'The full board and operational structure will be officially established and announced soon.',
      },
      contact: {
        title: 'Contact Us',
        call: 'Call Us',
        email: 'Email Us',
        locationTitle: 'Our Location',
        formTitle: 'Send a Message',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Your Email',
        messagePlaceholder: 'Your Message',
        sendButton: 'Send Message',
      },
      donate: {
        bankTitle: 'Bank Account Details',
        telebirrTitle: 'Telebirr Donation',
      },
      footer: {
        rights: 'Barkot Bekele Foundation. All Rights Reserved.',
      },
    },
  },
  am: {
    translation: {
      nav: {
        about: 'ስለ እኛ',
        mission: 'ተልዕኮአችን',
        values: 'እሴቶቻችን',
        works: 'የሥራ ጋለሪ',
        legacy: 'የበረከት ሥራዎች',
        board: 'የቦርድ አባላት',
        contact: 'ያግኙን',
        donate: 'ይርዱን',
      },
      hero: {
        title: 'የባርኮት በቀለ ፋውንዴሽን: ለችግረኞች ብርሃን ይፈነጥቃል',
        subtitle: 'በኢትዮጵያ ውስጥ በሃይማኖት ላይ የተመሠረተ አገልግሎት፣ የጤና ድጋፍና ትምህርት በመስጠት ቀጣይነት ያለው እርዳታ ለማቅረብ እና ማኅበረሰቦችን ለማብቃት ቁርጠኞች ነን።',
        cta: 'ሥራዎቻችንን ይመልከቱ',
      },
      about: {
        title: 'ስለ ባርኮት በቀለ ፋውንዴሽን',
        content1: 'የባርኮት በቀለ ፋውንዴሽን የተቋቋመው በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ወ/ሮ ባርኮት በቀለን ለማክበር ነው። ፋውንዴሽኑ የእርሷን የምህረት አገልግሎትና ለድሆችና ችግረኞች ያለውን ቁርጠኝነት ለመቀጠል የተሰጠ ነው።',
        content2: 'በሐዋርያው ይድነቃቸው ሽመልስ መሪነትና ራዕይ ሥር የምንሠራ ሲሆን፣ በጤና፣ በትምህርትና በማኅበራዊ ድጋፍ ዘላቂና አዎንታዊ ለውጥ ለመፍጠር ትኩረት ሰጥተናል።',
      },
      mission: {
        title: 'ተልዕኮአችን',
        content1: 'በኢትዮጵያ ውስጥ ለሚገኙ በጣም ችግረኛ ግለሰቦች እና ማኅበረሰቦች ዘላቂ የሆነ እርዳታ፣ ሁሉን አቀፍ ድጋፍ እና መንፈሳዊ ምግብ በመስጠት እግዚአብሔርን ማክበር ነው።',
        content2: 'በእያንዳንዱ የአገልግሎት ተግባር የክርስቶስን ፍቅርና ምሕረት ለመግለጥ እንተጋለን።',
      },
      purpose: {
        title: 'ዓላማችን',
        content1: 'የወ/ሮ ባርኮት በቀለን አርአያነት በመከተል ርኅራኄን ወደ ተጨባጭ፣ ሕይወትን የሚለውጥ ተግባር መለወጥ ነው።',
        content2: 'አቅም የሌላቸው ሰዎች ራሳቸውን እንዲችሉ እና ክብር እንዲያገኙ ፤የተስፋ ብርሃን ለመሆን ዓላማችን ነው።',
      },
      values: {
        title: 'መሠረታዊ እሴቶች',
        v1Title: 'ርኅራኄ',
        v1Content: 'ሁሉንም ሰው በክብርና ያለ ምንም ቅድመ ሁኔታ ፍቅር እንይዛለን፤ በሁሉም ግንኙነቶቻችን ውስጥ ምሕረትን ቅድሚያ እንሰጣለን።',
        v2Title: 'ታማኝነት',
        v2Content: 'በሁሉም ሥራዎቻችንና ፋይናንሳችን ውስጥ ግልጽነትን፣ ተጠያቂነትንና ሥነ ምግባራዊ አስተዳደርን እንጠብቃለን።',
        v3Title: 'የንብረት አስተዳደር',
        v3Content: 'ተፅዕኖንና ዘላቂነትን ከፍ ለማድረግ ሀብቶችን በጥንቃቄና በኃላፊነት ለመጠቀም ቃል ገብተናል።',
      },
      works: {
        title: 'የሥራ ጋለሪና ተግባራት',
        note: 'ጋለሪው ከቀጣይ ተነሳሽነቶቻችንና የማኅበረሰብ ድጋፍ ፕሮግራሞቻችን መካከል የተወሰኑትን ያሳያል።',
      },
      legacy: {
        title: 'የበረከት ሥራዎች (የወ/ሮ ባርኮት በቀለን ህይወትና አገልግሎት የሚያከብሩ)',
        intro1: 'የባርኮት በቀለ ፋውንዴሽን በቅርቡ ቢቋቋምም፣ የመሰረተው የበጎ አድራጎት ሥራ ለብዙ ዓመታት በሕይወት ቆይቷል። ላለፉት ዘጠኝ ዓመታት ሐዋርያው ይድነቃቸው ሽመልስና ወ/ሮ ባርኮት በቀለ በቤተ ክርስቲያን ማኅበረሰብ ውስጥ ጠቃሚ የበጎ አድራጎት ተነሳሽነቶችን መርተዋል። እነዚህም መርሃ ግብሮች ለችግረኞች ያላቸውን ጥልቅ ርኅራኄና ቁርጠኝነት ያሳያሉ።',
        intro2: 'የዕድሜ ልክ አገልግሎቷን ለማክበርና ለመጠበቅ፣ ፋውንዴሽኑ በእሷ እሴቶችና ምሳሌነት የወረሱትን እነዚህን የበጎ አድራጎት ተግባራት እንደ «የበረከት ሥራዎች» ይቀጥላል።',
        programIncludes: 'መርሃ ግብሩ የሚያካትተው፦',
        continuity: 'የባርኮት በቀለ ፋውንዴሽን ወ/ሮ ባርኮት በሕይወቷ ሁሉ ያሳየችውን የመስጠት መንፈስ ሕያው በማድረግ ይህንን ተፅዕኖ ፈጣሪ መርሃ ግብር ይቀጥላል።',

        // Good Samaritan
        samaritanTitle: 'የደጉ ሳምራዊ ፕሮግራም',
        samaritanIntro: 'ለብዙ ዓመታት በሐዋርያው ይድነቃቸው ሽመልስ የልደት ቀን እርሳቸውና ወ/ሮ ባርኮት በቀለ “የደጉ ሳምራዊ” የሚባል ልዩ የበጎ አድራጎት ሥራ ጀምረው ነበር። ይህ ተነሳሽነት ለባርኮት በቀለ ልብ ውድ የነበረ ሲሆን፣ ለችግረኞች ያላትን ርኅራኄ ያንፀባርቃል።',
        samaritanItems: [
            'ቤት የሌላቸውን ማኅበረሰቦችና መጠለያዎችን መጎብኘት',
            'ምግብ ማጋራትና ከቤት የሌላቸው ጋር ጊዜ ማሳለፍ',
            'ምግብ፣ ልብስና የንፅህና መጠበቂያ ቁሳቁሶችን የመሳሰሉ አስፈላጊ ነገሮችን መለገስ'
        ],

        // School Supplies
        schoolTitle: 'ዓመታዊ የትምህርት ቁሳቁስ ድጋፍ ፕሮግራም',
        schoolIntro: 'በየአዲስ ዓመት፣ በሐዋርያው ይድነቃቸው ሽመልስና በወ/ሮ ባርኮት በቀለ መሪነት፣ ቤተ ክርስቲያኑ አቅማቸው የደከመ ቤተሰቦች ያሉባቸውን ልጆች የትምህርት ቁሳቁስ በመስጠት ድጋፍ ያደርግ ነበር። ይህ ተነሳሽነት በትምህርት ቁሳቁስ እጦት ምክንያት ልጆች ወደ ኋላ እንዳይቀሩ ያረጋግጣል።',
        schoolItems: [
            'የልምምድ ደብተሮችን',
            'ปากsና እርሳሶችን',
            'ቦርሳዎችን',
            'ሌሎች መሠረታዊ የትምህርት ቁሳቁሶችን'
        ],
      },
      board: {
        title: 'የቦርድ አባላት',
        founder: 'መስራችና የቦርድ ሰብሳቢ',
        ceo: 'ዋና ስራ አስፈፃሚ (ዋ/ስ/አ)',
        finance: 'የፋይናንስ ኦፊሰር',
        note: 'ሙሉ ቦርዱና የአሠራር አወቃቀሩ በቅርቡ ይፋ ይሆናል።',
      },
      contact: {
        title: 'ያግኙን',
        call: 'ይደውሉልን',
        email: 'ኢሜይል ያድርጉልን',
        locationTitle: 'አድራሻችን',
        formTitle: 'መልዕክት ይላኩ',
        namePlaceholder: 'የእርስዎ ስም',
        emailPlaceholder: 'የእርስዎ ኢሜይል',
        messagePlaceholder: 'የእርስዎ መልዕክት',
        sendButton: 'መልዕክት ይላኩ',
      },
      donate: {
        bankTitle: 'የባንክ አካውንት ዝርዝሮች',
        telebirrTitle: 'ቴሌብርር መርጃ',
      },
      footer: {
        rights: 'የባርኮት በቀለ ፋውንዴሽን። ሁሉም መብቶች የተጠበቁ ናቸው።',
      },
    }
  },
  om: {
    translation: {
      nav: {
        about: 'Waaʼee Keenya',
        mission: 'Ergama Keenya',
        values: 'Qalbeeffannoo Keenya',
        works: 'Gaaleerii Hojii',
        legacy: 'Sagantaa Dhaala', // Placeholder - Please confirm translation
        board: 'Macaan Golee Boordii',
        contact: 'Nu Qunnamaa',
        donate: 'Deeggaraa',
      },
      hero: {
        title: 'Faawundeeshinii Baarkot Baqqalaa: Namoota rakkataniif ifa akka ta’uuf.', // Placeholder - Please confirm translation
        subtitle: 'Biyya Itoophiyaa keessatti tajaajila amantii irratti hundaa’een, deeggarsa fayyaa fi barnoota kennuun namoota rakkataniif deeggarsa itti fufiinsaa fi humna kennuuf waadaa galleerra.', // Placeholder
        cta: 'Hojii Keenya Argadhaa',
      },
      about: {
        title: 'Waaʼee Faawundeeshinii Baarkot Baqqalaa',
        content1: 'Faawundeeshiniin Baarkot Baqqalaa Aadde Baarkot Baqqalaa kabajuuf jecha mana amantii Ortodoksii Tawaahidoo Itiyoophiyaan hundaa’e. Faawundeeshiniin kun dhaala ishee tajaajila jaalalaa fi sababa hiyyummaaf cichoominaa itti fufuuf waadaa galeera.', // Placeholder
        content2: 'Faawundeeshiniin kun daandii fi mulʼata Phaawuloos Yidnaqaachoo Shimallis jalatti kan hojjetu yoo ta’u, fayyaa, barnoota fi deeggarsa hawaasaa irratti jijjiirama itti fufiinsaa qabu uumuuf xiyyeeffannaa kenna.', // Placeholder
      },
      mission: {
        title: 'Ergama Keenya',
        content1: 'Biyya Itoophiyaa keessatti namoota hundarraa harka qallaa taʼaniif deeggarsa itti fufiinsaa, gargaarsa guutuu fi nyaata hafuuraa kennuudhaan Waaqayyoon kabajuu.', // Placeholder
        content2: 'Hojii tajaajilaa hundaan jaalalaa fi garaa laafina Kiristoos agarsiisuuf ni hojjenna.', // Placeholder
      },
      purpose: {
        title: 'Kaayyoo Keenya',
        content1: 'Dhaala Aadde Baarkot Baqqalaa kabajuudhaan, kaayyoo garaa laafinaa hojii jijjiirama jireenyaa qabuutti jijjiiruu.', // Placeholder
        content2: 'Namoota harka qallaa taʼaniif abdii taʼuudhaan, of dandaʼuu fi ulfina akka argatan hojjechuuf ni kaayyofanna.', // Placeholder
      },
      values: {
        title: 'Qalbeeffannoo Bu’uuraa',
        v1Title: 'Garaa Laafina', // Placeholder
        v1Content: 'Nama hunda ulfinaa fi jaalala malee haala hin qabneen qabna, hojii keenya hundatti garaa laafinaaf dursa kennina.', // Placeholder
        v2Title: 'Ammaantaa', // Placeholder
        v2Content: 'Hojii fi faayinaansii keenya hundatti iftoomina, itti gaafatamummaa fi bulchiinsa seeraa ni eegna.', // Placeholder
        v3Title: 'Bulchiinsa Qabeenyaa', // Placeholder
        v3Content: 'Jijjiiramaa fi itti fufiinsaa guddisuuf qabeenya keenya ciminaan fi itti gaafatamummaan fayyadamna.', // Placeholder
      },
      works: {
        title: 'Gaaleerii fi Hojii Keenya',
        note: 'Gaaleeriin kun hojiiwwan jaalalaa fi sagantaalee deeggarsa hawaasaa jiran keessaa muraasa ni agarsiisa.', // Placeholder
      },
      legacy: {
        title: 'Sagantaa Dhaala', // Placeholder
        intro1: 'Faawundeeshinii Baarkot Baqqalaa haaraa hundaa’us, hojiin jaalala bu’uura ta’e waggoota hedduuf jiraateera. Waggoottan sagaliif, Phaawuloos Yidnaqaachoo Shimallis fi Aadde Baarkot Baqqalaa hojiiwwan jaalalaa mana amantichaa keessatti hojjetan. Sagantaaleen kunneen garaa laafinaa fi cichoomina isaanii namoota rakkataniif mul’isu.', // Placeholder
        intro2: 'Tajaajila jireenya guutuu ishee kabajuu fi eeguuf, faawundeeshiniin hojiiwwan jaalalaa kana Sagantaa Dhaalaa (Legacy Programs) akka ta’etti, bu’uuraa fi fakkeenyuma isheetiin itti fufa.', // Placeholder
        programIncludes: 'Sagantaan Kun Waan Qabatu:', // Placeholder
        continuity: 'Faawundeeshiniin Baarkot Baqqalaa gumaacha Baarkot Baqqalaa jireenya ishee guutuu raawwatte jabeessuuf sagantaa kana boonaan itti fufa.', // Placeholder
        
        // Good Samaritan
        samaritanTitle: 'Sagantaa Samaariyaa Gaarii', // Placeholder
        samaritanIntro: 'Waggoota hedduuf, Guyyaa Dhaloota Phaawuloos Yidnaqaachoo Shimallis irratti, inni fi Aadde Baarkot Baqqalaa “Samaariyaa Gaarii” jedhamuun tajaajila addaa eegalaniiru. Hojiin kun garaa laafina ishee namoota rakkatanif qabdu kan mul’isuu fi Baarkot Baqqalaaf waan jaallatamuu ture.', // Placeholder
        samaritanItems: [
            'Hawaasa qubsuma hin qabnee fi iddoo gargaarsaa daawwachuu', // Placeholder
            'Nyaata hiruu fi namoota qubsuma hin qabnee waliin yeroo dabarsuu', // Placeholder
            'Meeshaalee barbaachisoo akka nyaataa, uffataa, fi meeshaalee qulqullinaa arjoomuu' // Placeholder
        ],

        // School Supplies
        schoolTitle: 'Sagantaa Deeggarsa Meeshaalee Mana Barumsaa Waggaa', // Placeholder
        schoolIntro: 'Bara Haaraa hundatti, Hogganuma Phaawuloos Yidnaqaachoo Shimallis fi Aadde Baarkot Baqqalaa jalatti, manneen amantichaa ijoollee maatii galii gadii irraa dhufaniif meeshaalee mana barumsaa kennuun deeggarsa qopheessu. Hojiin kun ijoolleen sababa hiyyummaa qofaan meeshaalee mana barumsaa dhabaniif akka hin duubatti hin hafne mirkaneessa.', // Placeholder
        schoolItems: [
            'Kitaaboota leenjii', // Placeholder
            'Istiiloo fi qalama', // Placeholder
            'Boorsaa', // Placeholder
            'Meeshaalee barnootaa bu’uuraa biroo' // Placeholder
        ],
      },
      board: {
        title: 'Macaan Golee Boordii',
        founder: 'Hundeesaa fi Dura Taa’aa Boordii', // Placeholder
        ceo: 'Hogganaa Hojii Gaggeessaa (HHG)', // Placeholder
        finance: 'Hojjetaa Faayinaansii', // Placeholder
        note: 'Boordii guutuu fi caasaan hojii isaa yeroo dhihoo keessatti ifoomu.', // Placeholder
      },
      contact: {
        title: 'Nu Qunnamaa',
        call: 'Nu Waamaa',
        email: 'Imeelii Nu Ergaa',
        locationTitle: 'Teessoo Keenya',
        formTitle: 'Ergaa Nu Ergaa',
        namePlaceholder: 'Maqaa Keessan',
        emailPlaceholder: 'Imeelii Keessan',
        messagePlaceholder: 'Ergaa Keessan',
        sendButton: 'Ergaa Ergi',
      },
      donate: {
        bankTitle: 'Ibsa Herrega Baankii',
        telebirrTitle: 'Arjooma Teelbirr',
      },
      footer: {
        rights: 'Faawundeeshinii Baarkot Baqqalaa. Mirgoonni Hundi Eegameera.',
      },
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already escapes values
    }
  });


export default i18n;
