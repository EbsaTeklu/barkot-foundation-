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
            
            {/* Map Placeholder */}
            <div>
                <h3 className="text-xl font-bold text-bbfBlue mb-4">{t('contact.locationTitle')}</h3>
                <div className="relative h-96 bg-gray-200 rounded-lg shadow-xl overflow-hidden flex items-center justify-center">
                    <MapPin size={40} className="text-gray-500 opacity-50"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-bbfBlue opacity-10"></div>
                    <p className="absolute bottom-4 text-xs text-bbfBlue font-semibold bg-white p-1 rounded">Map Placeholder (Bishoftu City, Oromia Region)</p>
                </div>
            </div>
        </div>
      </section>

      {/* DONATE SECTION (Relocated Donation Info) */}
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
                    <Clock size={24} className="mr-2 text-bbfPurple"/> Telebirr Short Code: <span className="text-2xl font-mono ml-2">569477</span>
                 </p>
                 <div className="mt-4 flex justify-start">
                    {/* Placeholder for QR Code */}
                    <img src="/qr-code.png" alt="Sample QR Code" className="w-32 h-32 bg-white p-1 rounded shadow-lg border border-bbfGold"/>
                 </div>
                 <p className="text-xs italic pt-2 opacity-70">Please ensure qr-code.png is uploaded to the public folder.</p>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bbfBlue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                © {currentYear} {t('footer.rights')}
            </div>
            
            <div className="flex space-x-6">
                <a href="https://www.youtube.com/" target="_blank" className="hover:text-bbfGold transition"><Youtube size={24}/></a>
                <a href="https://t.me/" target="_blank" className="hover:text-bbfGold transition"><Send size={24}/></a> {/* Using Send icon for Telegram */}
                <a href="https://www.facebook.com/" target="_blank" className="hover:text-bbfGold transition"><Facebook size={24}/></a>
                <a href="https://www.tiktok.com/" target="_blank" className="hover:text-bbfGold transition"><Home size={24}/></a> {/* Using Home icon for TikTok as placeholder */}
            </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
