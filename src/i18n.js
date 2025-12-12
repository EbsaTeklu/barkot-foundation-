// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Note: LanguageDetector is not included in the original component structure, 
// but is kept here as per your provided content block.

const resources = {
  en: {
    translation: {
      nav: { 
        about: "About Us", 
        mission: "Our Mission", 
        purpose: "Purpose", 
        values: "Values", 
        works: "Our Work", 
        legacy: "Legacy Programs", // NEW
        board: "Board Members", 
        contact: "Contact Us", 
        donate: "Donate" 
      },
      hero: { 
        title: "IF WE LIVE, LET IT BE IN TRUTH", 
        subtitle: "Unwavering Support and Care for Cancer Patients and Their Families. Keeping the legacy of kindness and compassion alive.", 
        cta: "Learn Our Mission" 
      },
      pageTitle: "Barkot Bekele Foundation",

      about: {
        title: "About Barkot Bekele Foundation",
        content1: "Barkot Bekele Foundation is a non-profit charitable organization established on Saturday, November 07, 2025 G.C. in Bishoftu City, Oromia Region, through the vision and initiative of Apostle Yidnekachew Shimelis, together with their children, family members, close relatives, spiritual children, and other kind-hearted individuals.",
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

      works: { 
        title: "Our Work in Action",
        note: "These photos illustrate the foundation's facility, outreach, and patient support activities."
      },
      
      // Legacy Programs (NEW CONTENT INTEGRATED)
      legacy: {
        title: 'Legacy Programs',
        intro1: 'Although the Barkot Bekele Foundation is newly established, the charitable work that inspires it has been alive for many years. For the past nine years, Apostle Yidnekachew Shimelis and W/o Barkot Bekele led impactful charity initiatives within the church community. These programs reflected their deep compassion and commitment to uplifting those in need.',
        intro2: 'To honor and preserve her lifelong service, the foundation continues these charitable activities as Legacy Programs, passed down from her values and example.',
        programIncludes: 'Program Includes:',
        continuity: 'The Barkot Bekele Foundation proudly continues this program, keeping alive the spirit of giving that Barkot practiced throughout her life.',
        
        samaritanTitle: 'The Good Samaritan Program',
        samaritanIntro: 'For many years, on the birthday of Apostle Yidnekachew Shimelis, he and W/o Barkot Bekele initiated a special outreach called “The Good Samaritan.” This initiative was dear to Barkot Bekele’s heart, reflecting her compassion for the vulnerable.',
        samaritanItems: [
            'Visiting homeless communities and shelters',
            'Sharing meals and spending time with the homeless',
            'Donating essential items such as food, clothing, and hygiene supplies'
        ],

        schoolTitle: 'Annual School Supplies Support Program',
        schoolIntro: 'Every New Year, under the leadership of Apostle Yidnekachew Shimelis and W/o Barkot Bekele, the church organized support for children from low-income families by providing school supplies. This initiative ensured that children who could not afford school supplies would not fall behind simply because of poverty.',
        schoolItems: [
            'Exercise books',
            'Pens and pencils',
            'Backpacks',
            'Other basic educational materials'
        ],
      },
      // End Legacy Programs

      board: {
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
      nav: { 
        about: "ስለ እኛ", 
        mission: "ተልዕኮ", 
        purpose: "ዓላማ", 
        values: "እሴቶች", 
        works: "የስራችን ምስሎች", 
        legacy: "የበረከት ሥራዎች", // NEW
        board: "የቦርድ አባላት", 
        contact: "ያግኙን", 
        donate: "ለግስ" 
      },
      hero: { 
        title: "የእውነት ኖረን የውሸት አንሙት", 
        subtitle: "ጽኑ ድጋፍ እና እንክብካቤ ለካንሰር በሽተኞች እና ቤተሰቦቻቸው። የእርሷን ደግነትና ርህራሄ ህያው ለማድረግ ቁርጠኞች ነን።", 
        cta: "ተልዕኮአችንን ይወቁ" 
      },
      pageTitle: "ባርኮት በቀለ ፋውንዴሽን",

      about: { 
        title: "ስለ ባርኮት በቀለ ፋውንዴሽን", 
        content1: "ባርኮት በቀለ ፋውንዴሽን በኦሮሚያ ክልል በቢሾፍቱ ከተማ በዕለተ ቅዳሜ ህዳር 07 2018 ዓ.ም በሀዋርያ ይድነቃቸው ሽመልስ ሃሳብ አመንጪነት እና በልጆቻቸው፣ቤተሰቦቻቸው፣ወዳጅ ዘመዶች፣በመንፈሳዊ ልጆች እንዲሁም ልበ ቅን የሆኑና ለመልካም ስራ የተነሳሱ መልካምን ማድረግ በሚያስደስታቸው አባላት የተመሰረተ ለትርፍ ያልተቋቋም የበጎ አድራጎት ድርጅት ነው::", 
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
      works: { 
        title: "የስራችን ምስሎች",
        note: "እነዚህ ምስሎች የፋውንዴሽኑን ሕንፃ፣ የእርዳታ ስራ እና የሕሙማን ድጋፍ እንቅስቃሴዎችን ያሳያሉ።"
      },

      // Legacy Programs (NEW CONTENT INTEGRATED)
      legacy: {
        title: 'የበረከት ሥራዎች (የወ/ሮ ባርኮት በቀለን ህይወትና አገልግሎት የሚያከብሩ)',
        intro1: 'የባርኮት በቀለ ፋውንዴሽን በቅርቡ ቢቋቋምም፣ የመሰረተው የበጎ አድራጎት ሥራ ለብዙ ዓመታት በሕይወት ቆይቷል። ላለፉት ዘጠኝ ዓመታት ሐዋርያው ይድነቃቸው ሽመልስና ወ/ሮ ባርኮት በቀለ በቤተ ክርስቲያን ማኅበረሰብ ውስጥ ጠቃሚ የበጎ አድራጎት ተነሳሽነቶችን መርተዋል። እነዚህም መርሃ ግብሮች ለችግረኞች ያላቸውን ጥልቅ ርኅራኄና ቁርጠኝነት ያሳያሉ።',
        intro2: 'የዕድሜ ልክ አገልግሎቷን ለማክበርና ለመጠበቅ፣ ፋውንዴሽኑ በእሷ እሴቶችና ምሳሌነት የወረሱትን እነዚህን የበጎ አድራጎት ተግባራት እንደ «የበረከት ሥራዎች» ይቀጥላል።',
        programIncludes: 'መርሃ ግብሩ የሚያካትተው፦',
        continuity: 'የባርኮት በቀለ ፋውንዴሽን ወ/ሮ ባርኮት በሕይወቷ ሁሉ ያሳየችውን የመስጠት መንፈስ ሕያው በማድረግ ይህንን ተፅዕኖ ፈጣሪ መርሃ ግብር ይቀጥላል።',

        samaritanTitle: 'የደጉ ሳምራዊ ፕሮግራም',
        samaritanIntro: 'ለብዙ ዓመታት በሐዋርያው ይድነቃቸው ሽመልስ የልደት ቀን እርሳቸውና ወ/ሮ ባርኮት በቀለ “የደጉ ሳምራዊ” የሚባል ልዩ የበጎ አድራጎት ሥራ ጀምረው ነበር። ይህ ተነሳሽነት ለባርኮት በቀለ ልብ ውድ የነበረ ሲሆን፣ ለችግረኞች ያላትን ርኅራኄ ያንፀባርቃል።',
        samaritanItems: [
            'ቤት የሌላቸውን ማኅበረሰቦችና መጠለያዎችን መጎብኘት',
            'ምግብ ማጋራትና ከቤት የሌላቸው ጋር ጊዜ ማሳለፍ',
            'ምግብ፣ ልብስና የንፅህና መጠበቂያ ቁሳቁሶችን የመሳሰሉ አስፈላጊ ነገሮችን መለገስ'
        ],

        schoolTitle: 'ዓመታዊ የትምህርት ቁሳቁስ ድጋፍ ፕሮግራም',
        schoolIntro: 'በየአዲስ ዓመት፣ በሐዋርያው ይድነቃቸው ሽመልስና በወ/ሮ ባርኮት በቀለ መሪነት፣ ቤተ ክርስቲያኑ አቅማቸው የደከመ ቤተሰቦች ያሉባቸውን ልጆች የትምህርት ቁሳቁስ በመስጠት ድጋፍ ያደርግ ነበር። ይህ ተነሳሽነት በትምህርት ቁሳቁስ እጦት ምክንያት ልጆች ወደ ኋላ እንዳይቀሩ ያረጋግጣል።',
        schoolItems: [
            'የልምምድ ደብተሮችን',
            'እስክሪብቶና እርሳሶችን',
            'ቦርሳዎችን',
            'ሌሎች መሠረታዊ የትምህርት ቁሳቁሶችን'
        ],
      },
      // End Legacy Programs

      board: {
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

      donate: {
        bankTitle: "የባንክ ሂሳቦች",
        telebirrTitle: "ቴሌብር / QR ኮድ"
      },

      footer: { rights: "ባርኮት በቀለ ፋውንዴሽን። መብቱ በህግ የተጠበቀ ነው።" }
    }
  },
  om: {
    translation: {
      nav: { 
        about: "Waa'ee Keenya", 
        mission: "Ergama", 
        purpose: "Kaayyoo", 
        values: "Duudhaalee", 
        works: "Hojii Keenya", 
        legacy: "Sagantaa Dhaala", // NEW
        board: "Miseensota Boordii", 
        contact: "Nu Quunnamaa", 
        donate: "Arjoomaa" 
      },
      hero: { 
        title: "Yoo dhugaan jiraanne, dhugaa waliin haa jiraannu.", 
        subtitle: "Deeggarsa cimaa fi kunuunsa Warra Kaanseradhan Qabamaniif. Gocha ishii gaarii jiraachisuuf waadaa galleerra.", 
        cta: "Ergama Keenya Beekaa" 
      },
      pageTitle: "FA'ONDEESHIINII BARKOOT BEQQELEE",

      about: { 
        title: "Waa'ee Faawundeeshinii Barkot Baqqalaa", 
        content1: "[Oromiffa content goes here]", 
        content2: "" 
      },
      mission: { 
        title: "Ergama Keenya", 
        content1: "[Oromiffa content goes here]", 
        content2: "" 
      },
      purpose: { 
        title: "Kaayyoo Keenya", 
        content1: "[Oromiffa content goes here]", 
        content2: "" 
      },
      values: { 
        title: "Duudhaalee Ijoo Keenya", 
        v1Title: "Gara-laafina", 
        v1Content: "[Oromiffa content goes here]", 
        v2Title: "Tokkummaa", 
        v2Content: "[Oromiffa content goes here]", 
        v3Title: "Walqixxummaa", 
        v3Content: "[Oromiffa content goes here]" 
      },

      works: { 
        title: "Hojii Keenya Argisiisaa",
        note: "Suuraawwan kun hojii keenya, dhaabbata keenya, fi jijjiirama gochaa jirru argisiisu."
      },
      
      // Legacy Programs (NEW CONTENT INTEGRATED - PLACEHOLDERS)
      legacy: {
        title: 'Sagantaa Dhaala', 
        intro1: 'Faawundeeshiniin Baarkot Baqqalaa haaraa hundaa’us, hojiin jaalala bu’uura ta’e waggoota hedduuf jiraateera. Waggoottan sagaliif, Phaawuloos Yidnaqaachoo Shimallis fi Aadde Baarkot Baqqalaa hojiiwwan jaalalaa mana amantichaa keessatti hojjetan. Sagantaaleen kunneen garaa laafinaa fi cichoomina isaanii namoota rakkataniif mul’isu.', 
        intro2: 'Tajaajila jireenya guutuu ishee kabajuu fi eeguuf, faawundeeshiniin hojiiwwan jaalalaa kana Sagantaa Dhaalaa (Legacy Programs) akka ta’etti, bu’uuraa fi fakkeenyuma isheetiin itti fufa.', 
        programIncludes: 'Sagantaan Kun Waan Qabatu:', 
        continuity: 'Faawundeeshiniin Baarkot Baqqalaa gumaacha Baarkot Baqqalaa jireenya ishee guutuu raawwatte jabeessuuf sagantaa kana boonaan itti fufa.', 
        
        samaritanTitle: 'Sagantaa Samaariyaa Gaarii', 
        samaritanIntro: 'Waggoota hedduuf, Guyyaa Dhaloota Phaawuloos Yidnaqaachoo Shimallis irratti, inni fi Aadde Baarkot Baqqalaa “Samaariyaa Gaarii” jedhamuun tajaajila addaa eegalaniiru. Hojiin kun garaa laafina ishee namoota rakkatanif qabdu kan mul’isuu fi Baarkot Baqqalaaf waan jaallatamuu ture.', 
        samaritanItems: [
            'Hawaasa qubsuma hin qabnee fi iddoo gargaarsaa daawwachuu', 
            'Nyaata hiruu fi namoota qubsuma hin qabnee waliin yeroo dabarsuu', 
            'Meeshaalee barbaachisoo akka nyaataa, uffataa, fi meeshaalee qulqullinaa arjoomuu' 
        ],

        schoolTitle: 'Sagantaa Deeggarsa Meeshaalee Mana Barumsaa Waggaa', 
        schoolIntro: 'Bara Haaraa hundatti, Hogganuma Phaawuloos Yidnaqaachoo Shimallis fi Aadde Baarkot Baqqalaa jalatti, manneen amantichaa ijoollee maatii galii gadii irraa dhufaniif meeshaalee mana barumsaa kennuun deeggarsa qopheessu. Hojiin kun ijoolleen sababa hiyyummaa qofaan meeshaalee mana barumsaa dhabaniif akka hin duubatti hin hafne mirkaneessa.', 
        schoolItems: [
            'Kitaaboota leenjii', 
            'Istiiloo fi qalama', 
            'Boorsaa', 
            'Meeshaalee barnootaa bu’uuraa biroo' 
        ],
      },
      // End Legacy Programs

      board: {
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

      donate: {
        bankTitle: "Lakk. Baankii",
        telebirrTitle: "Telebirr / QR Code"
      },

      footer: { rights: "Faawundeeshinii Barkot Baqqalaa. Mirgi Isaa Eegamaadha." }
    }
  }
};

i18n.use(initReactI18next).init({
  resources, fallbackLng: 'en', interpolation: { escapeValue: false }
});

export default i18n;
