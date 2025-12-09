import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

// --- COMPONENTS ---
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const changeLng = (l) => { i18n.changeLanguage(l); setIsOpen(false); };
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* LOGO HERE */}
            <img className="h-16 w-auto" src="/logo.png" alt="Logo" />
            <span className="ml-3 text-xl font-bold text-bbfBlue hidden md:block">Barkot Bekele Foundation</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-bbfBlue font-medium">{t('nav.about')}</a>
            <a href="#values" className="text-bbfBlue font-medium">{t('nav.values')}</a>
            <div className="flex space-x-2 border-l pl-4">
              <button onClick={() => changeLng('en')} className={i18n.language==='en'?'font-bold':''}>EN</button>
              <button onClick={() => changeLng('am')} className={i18n.language==='am'?'font-bold':''}>አማ</button>
              <button onClick={() => changeLng('om')} className={i18n.language==='om'?'font-bold':''}>OM</button>
            </div>
            <a href="#contact" className="bg-bbfGold px-4 py-2 rounded-full text-bbfBlue font-bold">{t('nav.donate')}</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-bbfBlue p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg flex flex-col space-y-4">
           <a href="#about" onClick={()=>setIsOpen(false)}>{t('nav.about')}</a>
           <a href="#values" onClick={()=>setIsOpen(false)}>{t('nav.values')}</a>
           <div className="flex space-x-4 pt-2">
              <button onClick={() => changeLng('en')} className="bg-gray-100 px-2 py-1 rounded">EN</button>
              <button onClick={() => changeLng('am')} className="bg-gray-100 px-2 py-1 rounded">አማ</button>
              <button onClick={() => changeLng('om')} className="bg-gray-100 px-2 py-1 rounded">OM</button>
           </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-bbfPurple pt-32 pb-20 px-4 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-bbfGold mb-6">{t('hero.title')}</h1>
          <p className="text-lg text-white mb-8">{t('hero.subtitle')}</p>
          <a href="#about" className="bg-bbfGold text-bbfBlue font-bold text-lg px-8 py-3 rounded-full shadow-lg">{t('hero.cta')}</a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
           <img src="/logo.png" className="w-64 h-auto drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      <section id="about" className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-bbfBlue mb-6">{t('about.title')}</h2>
        <p className="text-lg text-gray-700">{t('about.content')}</p>
      </section>
      <section id="values" className="py-20 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-bbfBlue mb-8">{t('values.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(n => (
              <div key={n} className="bg-white p-6 rounded-lg shadow text-center font-bold text-bbfPurple">
                {t(`values.v${n}`)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer id="contact" className="bg-bbfBlue text-white py-12 text-center">
        <p>{t('footer.rights')}</p>
      </footer>
    </div>
  )
}

export default App;
