import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

// --- Navbar Component ---
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
            <span className="ml-3 text-xl font-bold text-bbfBlue hidden md:block">Barkot Bekele Foundation</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.about')}</a>
            <a href="#mission" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.mission')}</a>
            <a href="#purpose" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.purpose')}</a>
            <a href="#values" className="text-bbfBlue font-medium hover:text-bbfPurple">{t('nav.values')}</a>
            <div className="flex space-x-2 border-l pl-4">
              <button onClick={() => changeLng('en')} className={`text-sm ${i18n.language==='en'?'font-bold text-bbfPurple':'text-bbfBlue'}`}>EN</button>
              <button onClick={() => changeLng('am')} className={`text-sm ${i18n.language==='am'?'font-bold text-bbfPurple':'text-bbfBlue'}`}>አማ</button>
              <button onClick={() => changeLng('om')} className={`text-sm ${i18n.language==='om'?'font-bold text-bbfPurple':'text-bbfBlue'}`}>OM</button>
            </div>
            <a href="#contact" className="bg-bbfGold px-4 py-2 rounded-full text-bbfBlue font-bold hover:bg-bbfGold-dark transition">{t('nav.donate')}</a>
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
           <a href="#purpose" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.purpose')}</a>
           <a href="#values" onClick={()=>setIsOpen(false)} className="py-1 text-bbfBlue">{t('nav.values')}</a>
           <div className="flex space-x-4 pt-2 border-t">
              <button onClick={() => changeLng('en')} className="bg-gray-100 px-2 py-1 rounded">EN</button>
              <button onClick={() => changeLng('am')} className="bg-gray-100 px-2 py-1 rounded">አማ</button>
              <button onClick={() => changeLng('om')} className="bg-gray-100 px-2 py-1 rounded">OM</button>
           </div>
           <a href="#contact" onClick={()=>setIsOpen(false)} className="bg-bbfGold text-center text-bbfBlue font-bold mt-4 px-4 py-2 rounded-full">{t('nav.donate')}</a>
        </div>
      )}
    </nav>
  );
};

// --- Hero Component ---
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

// --- Main App Component ---
function App() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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

      {/* FOOTER */}
      <footer id="contact" className="bg-bbfBlue text-white py-12 text-center">
        <p>© {currentYear} {t('footer.rights')}</p>
      </footer>
    </div>
  )
}

export default App;
