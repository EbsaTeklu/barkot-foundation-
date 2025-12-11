// src/i18n.js
const resources = {
  en: {
    translation: {
      nav: {
        // ... (existing keys)
        legacy: 'Legacy Programs', // <--- NEW KEY
        board: 'Board Members',
        contact: 'Contact Us',
        donate: 'Donate',
      },
      // ... (other sections)

      legacy: { // <--- NEW LEGACY SECTION
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
      
      // ... (rest of translation keys)
    },
  },
  am: {
    translation: {
      nav: {
        // ... (existing keys)
        legacy: 'የበረከት ሥራዎች', // <--- NEW KEY
        board: 'የቦርድ አባላት',
        contact: 'ያግኙን',
        donate: 'ይርዱን',
      },
      // ... (other sections)
      
      legacy: { // <--- NEW LEGACY SECTION
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
      
      // ... (rest of translation keys)
    }
  },
  om: {
    translation: {
      nav: {
        // ... (existing keys)
        legacy: 'Sagantaa Dhaala', // <--- NEW KEY - PLEASE CONFIRM BEST OROMIFFA WORD
        board: 'Macaan Golee Boordii',
        contact: 'Nu Qunnamaa',
        donate: 'Deeggaraa',
      },
      // ... (other sections)

      legacy: { // <--- NEW LEGACY SECTION - NEEDS OROMIFFA TRANSLATION
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
      
      // ... (rest of translation keys)
    }
  }
};
