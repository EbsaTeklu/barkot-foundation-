import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Banknote, Phone, Mail, MapPin, Youtube, Facebook, Send, Music, Camera, Users, Award } from 'lucide-react'; 

// --- Navbar Component (omitted for brevity, remains the same) ---
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const changeLng = (l) => { i18n.changeLanguage(l); setIsOpen(false); };
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img className="h-16 w-auto" src="/logo.png" alt="Logo" />
            <span className="ml-2 text-lg font-bold text-bbfBlue hidden sm:block">Barkot Bekele Foundation</span>
            <span className="ml-2 text-lg font-bold text-bbfBlue sm:hidden">BB Foundation</span> 
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.about')}</a>
            <a href="#mission" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.mission')}</a>
            <a href="#values" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.values')}</a>
            <a href="#works" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.works')}</a> 
            <a href="#board" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.board')}</a> 
            <a href="#contact" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.contact')}</a>
            <div className="flex space-x-2 border-l pl-4">
              <button onClick={() => changeLng('en')} className={`text-sm ${i18n.language==='en'?'font-bold text-bbfPurple':'text-bbfBlue'}`}>EN</button>
              <button onClick={() => changeLng('am')} className={`text-sm ${i18n.language==='am'?'font-bold text-bbfPurple':'text-bbfBlue'}`}>አማ</button>
              <button onClick={() => changeLng('om')} className={`text-sm ${i18n.language==='om'?'font-bold text-bbfPurple':'text-bbfBlue'}`}>OM</button>
            </div>
            <a href="#donate-section" className="bg-bbfGold px-4 py-2 rounded-full text-bbfBlue font-bold hover:bg-bbfGold-dark transition">{t('nav.donate')}</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-bbfBlue p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg flex flex-col space-y-2">
           <a href="#about" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.about')}</a>
           <a href="#mission" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.mission')}</a>
           <a href="#values" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.values')}</a>
           <a href="#works" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.works')}</a> 
           <a href="#board" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.board')}</a> 
           <a href="#contact" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.contact')}</a> 
           <div className="flex space-x-4 pt-2 border-t">
              <button onClick={() => changeLng('en')} className="bg-gray-100 px-2 py-1 rounded">EN</button>
              <button onClick={() => changeLng('am')} className="bg-gray-100 px-2 py-1 rounded">አማ</button>
              <button onClick={() => changeLng('om')} className="bg-gray-100 px-2 py-1 rounded">OM</button>
           </div>
           <a href="#donate-section" onClick={()=>setIsOpen(false)} className="bg-bbfGold text-center text-bbfBlue font-bold mt-4 px-4 py-2 rounded-full">{t('nav.donate')}</a>
        </div>
      )}
    </nav>
  );
};

// --- Hero Component (omitted for brevity, remains the same) ---
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-bbfPurple pt-32 pb-20 px-4 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-bbfGold mb-6 leading-tight">{t('hero.title')}</h1>
          <p className="text-lg text-white mb-8">{t('hero.subtitle')}</p>
          <a href="#mission" className="bg-bbfGold text-bbfBlue font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-bbfGold-dark transition">{t('hero.cta')}</a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
           <img src="/logo.png" className="w-64 h-auto drop-shadow-2xl" alt="Barkot Bekele Foundation Logo"/>
        </div>
      </div>
    </div>
  );
};

// --- Team Member Card Component (omitted for brevity, remains the same) ---
const TeamMemberCard = ({ imageSrc, name, roleKey }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img 
        src={imageSrc}
        alt={name}
        // This style crops the image to a perfect circle
        className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-bbfGold shadow-lg"
      />
      <h4 className="text-xl font-bold text-bbfPurple">{name}</h4>
      <p className="text-bbfBlue font-semibold text-sm">{t(roleKey)}</p>
    </div>
  );
};


// --- Main App Component ---
function App() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Array of image paths for the works section
  const galleryImages = [
    // Ensure these three image files are uploaded to the /public folder
    { src: '/gallery-1.jpg', alt: 'Foundation Building' },
    { src: '/gallery-2.jpg', alt: 'Internal Patient Support' },
    { src: '/gallery-3.jpg', alt: 'Outreach Activity' },
  ];
  
  const boardMembers = [
      { 
          // Founder: Upload this file to the public/ folder
          img: '/apostle-yidnekachew.jpg', 
          name: 'Apostle Yidnekachew Shimelis', 
          role: 'board.founder' 
      },
      { 
          // CEO: Upload this file to the public/ folder
          img: '/board-ceo.jpg', 
          name: 'Mr. David J. K.', 
          role: 'board.ceo' 
      },
      { 
          // Finance Officer: Upload this file to the public/ folder
          img: '/board-finance.jpg', 
          name: 'Ms. Sarah L. B.', 
          role: 'board.finance' 
      },
  ];


  const ValueCard = ({ titleKey, contentKey }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-bbfGold">
      <h3 className="text-xl font-bold text-bbfPurple mb-2">{t(titleKey)}</h3>
      <p className="text-gray-600 text-sm">{t(contentKey)}</p>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      
      {/* ABOUT US */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-bbfBlue mb-6 border-b-4 border-bbfGold pb-2 inline-block">{t('about.title')}</h2>
        <div className="text-lg text-gray-700 space-y-6">
            <p>{t('about.content1')}</p>
            <p className="italic">{t('about.content2')}</p>
        </div>
      </section>

      {/* MISSION & PURPOSE (Side-by-Side) */}
      <section className="py-20 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* MISSION */}
            <div id="mission" className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-bbfPurple">
                <h3 className="text-3xl font-bold text-bbfPurple mb-4">{t('mission.title')}</h3>
                <div className="text-lg text-gray-700 space-y-4">
                    <p>{t('mission.content1')}</p>
                    <p>{t('mission.content2')}</p>
                </div>
            </div>
            
            {/* PURPOSE */}
            <div id="purpose" className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-bbfGold">
                <h3 className="text-3xl font-bold text-bbfBlue mb-4">{t('purpose.title')}</h3>
                <div className="text-lg text-gray-700 space-y-4">
                    <p>{t('purpose.content1')}</p>
                    <p>{t('purpose.content2')}</p>
                </div>
            </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-bbfBlue mb-10 border-b-4 border-bbfGold pb-2 inline-block">{t('values.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard titleKey="values.v1Title" contentKey="values.v1Content" />
            <ValueCard titleKey="values.v2Title" contentKey="values.v2Content" />
            <ValueCard titleKey="values.v3Title" contentKey="values.v3Content" />
        </div>
      </section>

      {/* WORKS / GALLERY SECTION */}
      <section id="works" className="py-20 bg-bbfPurple px-4">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-bbfGold mb-10 border-b-4 border-white pb-2 inline-block flex items-center">
                  <Camera className='mr-3'/> {t('works.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> 
                  {galleryImages.map((image, index) => ( 
                      <div key={index} className="overflow-hidden rounded-lg shadow-xl group">
                          <img 
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-64 object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                          />
                      </div>
                  ))}
              </div>
              <p className="text-sm text-white/80 mt-6 italic text-center">
                  {t('works.note')}
              </p>
          </div>
      </section>
      
      {/* BOARD / TEAM SECTION */}
       <section id="board" className="py-20 max-w-7xl mx-auto px-4 bg-gray-50">
          <h2 className="text-3xl font-bold text-bbfBlue mb-12 border-b-4 border-bbfGold pb-2 inline-block flex items-center">
              <Users className='mr-3 text-bbfPurple'/> {t('board.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                  <TeamMemberCard 
                      key={index} 
                      imageSrc={member.img} 
                      name={member.name} 
                      roleKey={member.role} 
                  />
              ))}
          </div>
          <p className="text-sm text-gray-600 mt-10 italic text-center">
              {t('board.note')}
          </p>
      </section>

      {/* CONTACT US SECTION */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
                <h2 className="text-3xl font-bold text-bbfPurple mb-6 border-b-4 border-bbfGold pb-2 inline-block">
                    {t('contact.title')}
                </h2>
                <div className="space-y-4 text-gray-700 mb-8">
                    <p className="flex items-center font-semibold"><Phone size={20} className="mr-2 text-bbfPurple"/> {t('contact.call')}: <span className='ml-2 text-bbfBlue font-bold'>+251 913 886 094</span></p>
                    <p className="flex items-center font-semibold"><Mail size={20} className="mr-2 text-bbfPurple"/> {t('contact.email')}: barkotbekelefoundation@gmail.com</p>
                </div>
                
                <h3 className="text-xl font-bold text-bbfBlue mb-4">{t('contact.formTitle')}</h3>
                {/* Mailto form: sends email directly using client */}
                <form action="mailto:barkotbekelefoundation@gmail.com" method="post" encType="text/plain" className="space-y-4 bg-blue-50 p-6 rounded-lg shadow">
                    <input type="text" name="name" placeholder={t('contact.namePlaceholder')} className="w-full p-3 border rounded-md focus:border-bbfPurple" required />
                    <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} className="w-full p-3 border rounded-md focus:border-bbfPurple" required />
                    <textarea name="message" rows="4" placeholder={t('contact.messagePlaceholder')} className="w-full p-3 border rounded-md focus:border-bbfPurple" required></textarea>
                    <button type="submit" className="bg-bbfPurple hover:bg-bbfBlue text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition">
                        {t('contact.sendButton')} <Send size={20} className="ml-2"/>
                    </button>
                </form>
            </div>
            
            {/* Map Placeholder - NOW A REAL MAP */}
            <div>
                <h3 className="text-xl font-bold text-bbfBlue mb-4">{t('contact.locationTitle')}</h3>
                <div className="relative h-96 bg-gray-200 rounded-lg shadow-xl overflow-hidden flex items-center justify-center">
                    {/* START: Embedded Google Map for Bishoftu, Oromia, Ethiopia */}
                    <iframe 
                        src="https://maps.google.com/maps?q=Bishoftu,Oromia,Ethiopia&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{border: 0}}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    {/* END: Embedded Google Map */}
                </div>
            </div>
        </div>
      </section>

      {/* DONATE SECTION (omitted for brevity, remains the same) */}
      <section id="donate-section" className="py-20 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
             {/* Bank Accounts */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-bbfPurple mb-6 border-b-4 border-bbfGold pb-2 inline-block">{t('nav.donate')}</h2>
                <div className="space-y-3 text-sm text-bbfBlue">
                    <p className="font-bold text-lg flex items-center"><Banknote size={24} className='mr-2 text-bbfGold'/> {t('donate.bankTitle')}:</p>
                    <p className="bg-blue-200 p-3 rounded">
                        <span className="font-semibold text-bbfGold block">CBE (Commercial Bank of Ethiopia):</span>
                        Barkot Bekele Foundation: <span className="text-lg font-mono">10000000000</span>
                    </p>
                    <p className="bg-blue-200 p-3 rounded">
                        <span className="font-semibold text-bbfGold block">Abyssinia Bank:</span>
                        <span className="text-lg font-mono">2678817818</span>
                    </p>
                    <p className="bg-blue-200 p-3 rounded">
                        <span className="font-semibold text-bbfGold block">Abay Bank:</span>
                        <span className="text-lg font-mono">10000000000</span>
                    </p>
                </div>
            </div>

            {/* QR/Telebirr */}
            <div className="space-y-4 pt-12 md:pt-0">
                 <h3 className="text-2xl font-bold text-bbfBlue mb-2">{t('donate.telebirrTitle')}</h3>
                 <p className="text-lg font-semibold flex items-center">
                    <Banknote size={24} className="mr-2 text-bbfPurple"/> Telebirr Short Code: <span className="text-2xl font-mono ml-2">569477</span>
                 </p>
                 <div className="mt-4 flex justify-start">
                    {/* Placeholder for QR Code */}
                    <img src="/qr-code.png" alt="Sample QR Code" className="w-32 h-32 bg-white p-1 rounded shadow-lg border border-bbfGold"/>
                 </div>
                 <p className="text-xs italic pt-2 opacity-70">Please ensure qr-code.png is uploaded to the public folder.</p>
            </div>
        </div>
      </section>

      {/* FOOTER (omitted for brevity, remains the same) */}
      <footer className="bg-bbfBlue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                © {currentYear} {t('footer.rights')}
            </div>
            
            <div className="flex space-x-6">
                {/* Social Media Links */}
                <a href="https://youtube.com/@barkotbekelefoundation" target="_blank" className="hover:text-bbfGold transition"><Youtube size={24}/></a>
                <a href="https://t.me/BarkotBekeleFoundation" target="_blank" className="hover:text-bbfGold transition"><Send size={24}/></a> 
                <a href="https://www.facebook.com/share/1BtQ6UB852/" target="_blank" className="hover:text-bbfGold transition"><Facebook size={24}/></a>
                <a href="https://www.tiktok.com/@barkot.bekele.fou?_r=1&_t=ZS-921YxNQFhHr" target="_blank" className="hover:text-bbfGold transition"><Music size={24}/></a> 
            </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
