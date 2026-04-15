import React, { useState } from 'react';
import { ShieldCheck, FileText, BrainCircuit, ClipboardCheck, QrCode, Mail, CheckCircle2, X } from 'lucide-react';

const SummeetLogo = () => (
  <div className="flex flex-col items-center mt-12 bg-white p-4 rounded-xl shadow-lg inline-block">
    <div className="flex gap-[2.2rem] ml-8 mb-1">
      <div className="w-3 h-3 rounded-full bg-[#f49e65]"></div>
      <div className="w-3 h-3 rounded-full bg-[#f49e65]"></div>
      <div className="w-3 h-3 rounded-full bg-[#f49e65]"></div>
    </div>
    <div className="text-[#154284] font-sans text-4xl md:text-5xl tracking-[0.25em] leading-none" style={{ fontWeight: 300 }}>
      SUMMEET
    </div>
  </div>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Prepara l'oggetto e il corpo dell'email
    const subject = encodeURIComponent("Link di accesso: Corso ECM SYNAPTICA");
    const body = encodeURIComponent(`Ciao,\n\nEcco il link per accedere alla pagina del corso ECM "Gestione pratica ADHD nell'Adulto" comodamente dal tuo PC:\n\n${window.location.href}\n\nOppure accedi direttamente alla piattaforma FAD all'indirizzo: https://fad.summeet.it\n\nIstruzioni rapide:\n- Codice ECM: TBD\n\nA presto!`);
    
    // Apre l'app di posta nativa del telefono precompilata
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Mostra il messaggio di successo nell'interfaccia
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0b1b42] text-white font-sans selection:bg-[#40c4ff]/30 overflow-x-hidden flex flex-col items-center">
      {/* Hero Image Area */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] z-0 overflow-hidden pointer-events-none flex-shrink-0">
        <img 
          src="/head.png" 
          alt="Synaptica Header" 
          className="w-full h-full object-cover object-top mix-blend-screen opacity-100"
          style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' }}
        />
        {/* Dark overlay to blend smoothly into the background */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#0b1b42] to-transparent"></div>
      </div>

      <main className="w-full max-w-4xl px-4 pb-20 z-20 -mt-6 md:-mt-12 flex flex-col items-center relative">
        {/* Titles */}
        <div className="text-center space-y-4 mb-12 w-full relative">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-white">
            Corso ECM Gratuito per MMG –<br />
            Gestione pratica ADHD nell'Adulto
          </h1>
          <p className="text-[#ffca28] font-bold text-xl md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            4 crediti 4h compreso il materiale di approfondimento
          </p>
          <div className="space-y-4 mt-10">
            <p className="text-[#ffca28] text-xl md:text-2xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Non si sente ancora sicuro nel rinnovare l'RMR?
            </p>
          </div>
        </div>

        {/* Registration Section */}
        <div className="w-full max-w-2xl mb-20 relative z-10">
          <div className="bg-gradient-to-b from-[#1a3673]/40 to-[#0b1b42]/60 backdrop-blur-md border border-[#40c4ff]/40 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(64,196,255,0.15)]">
            
            {/* Option 1: Email */}
            <div className="mb-8">
              {isSent ? (
                <div className="bg-[#00c853]/10 border border-[#00e676]/50 rounded-2xl p-6 md:p-8 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-[#00c853]/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,200,83,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-[#00e676]" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3">App di posta aperta!</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Abbiamo preparato un'email indirizzata a:<br/>
                    <strong className="text-white text-lg block mt-2 mb-2">{email}</strong>
                    Premi <strong>"Invia"</strong> nella tua app di posta per ricevere il link sul PC.
                  </p>
                  <button 
                    onClick={() => { setIsSent(false); setEmail(''); }}
                    className="mt-6 text-[#40c4ff] text-sm hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Riprova o cambia indirizzo
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSendEmail}>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm md:text-base text-gray-200 mb-2 ml-4 font-medium">
                      Vuoi seguire il corso da PC? Inviati il link via mail:
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Inserisci la tua email..."
                      className="w-full bg-[#0b1b42]/80 border border-[#40c4ff]/50 rounded-full px-6 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:border-[#40c4ff] focus:ring-1 focus:ring-[#40c4ff] shadow-[inset_0_0_15px_rgba(64,196,255,0.2)] transition-all"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00c853] to-[#00e676] text-white font-bold text-lg py-3.5 rounded-full shadow-[0_0_20px_rgba(0,200,83,0.4)] hover:shadow-[0_0_30px_rgba(0,200,83,0.6)] transition-all border border-[#00e676]/50 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Invia Link al mio PC
                  </button>
                  <p className="text-xs text-gray-400 mt-4 text-center px-2">
                    Inviando questo modulo acconsenti al trattamento dei tuoi dati personali 
                    secondo la nostra <button type="button" onClick={() => setShowPrivacy(true)} className="underline hover:text-white transition-colors">Informativa Privacy</button>.
                  </p>
                </form>
              )}
            </div>

            <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-[#40c4ff]/30"></div>
                <span className="flex-shrink-0 mx-4 text-[#40c4ff] font-bold text-sm tracking-widest uppercase text-center">
                  Oppure accedi con<br/>Registrazione e Accesso
                </span>
                <div className="flex-grow border-t border-[#40c4ff]/30"></div>
            </div>

            {/* Option 2: Direct Registration */}
            <div className="mt-6">
              <p className="text-gray-300 text-center mb-6 text-sm md:text-base">
                La registrazione e accesso al corso potranno essere effettuate collegandosi al seguente link:
              </p>
              <a 
                href="https://fad.summeet.it"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-md mx-auto text-center bg-gradient-to-r from-[#1976d2] to-[#2196f3] text-white font-bold text-lg py-3.5 rounded-full shadow-[0_0_20px_rgba(33,150,243,0.4)] hover:shadow-[0_0_30px_rgba(33,150,243,0.6)] transition-all mb-8 border border-[#2196f3]/50"
              >
                https://fad.summeet.it
              </a>

              <div className="bg-[#0b1b42]/60 rounded-2xl p-5 border border-[#40c4ff]/30">
                <h4 className="text-lg font-bold text-[#d4b062] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Istruzioni:
                </h4>
                <ul className="space-y-3 text-sm md:text-base text-gray-200 list-none pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#40c4ff] mt-0.5">•</span> 
                    <span>In caso di primo accesso al sito compilare il form di creazione utente (da <strong className="text-white">"REGISTRAZIONE"</strong>).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#40c4ff] mt-0.5">•</span> 
                    <span>In caso di utente già registrato al sito accedere con le proprie credenziali (Username & Password).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#40c4ff] mt-0.5">•</span> 
                    <span>Trovare il corso attraverso la funzione cerca, inserendo codice ECM: <strong className="text-[#40c4ff]">TBD</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#40c4ff] mt-0.5">•</span> 
                    <span>Iscriversi al corso inserendo la seguente chiave di accesso: <strong className="text-[#40c4ff]">TBD</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#40c4ff] mt-0.5">•</span> 
                    <span>Una volta effettuata l'iscrizione, potrà accedere alla pagina del Corso FAD disponibile dal <strong className="text-white">GG mm aaaa</strong> al <strong className="text-white">GG mm aaaa</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="w-full mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 drop-shadow-md">
            Cosa imparerai nel corso
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: ShieldCheck, title: "Sicurezza prescrittiva e tutela medico-legale" },
              { icon: FileText, title: "Tutorial RMR" },
              { icon: BrainCircuit, title: "Monitoraggio effetti avversi" },
              { icon: ClipboardCheck, title: "Checklist e guida pratica interazioni" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-b from-[#14326b] to-[#0b1b42] border border-[#40c4ff]/40 rounded-2xl p-5 flex flex-col items-center text-center gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="p-3 rounded-xl border border-[#40c4ff]/50 text-[#40c4ff] shadow-[inset_0_0_15px_rgba(64,196,255,0.2)] bg-[#0b1b42]/50">
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <p className="text-sm md:text-base font-medium leading-snug text-gray-100">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Summeet Logo */}
        <div className="w-full text-center mb-10">
          <div className="flex justify-center">
            <SummeetLogo />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#14326b] bg-[#07112a] py-10 text-center text-sm text-gray-400 z-20">
        <div className="flex justify-center gap-8 mb-8">
          <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => setShowCookie(true)} className="hover:text-white transition-colors">Cookie Policy</button>
          <a href="#" className="hover:text-white transition-colors">Termini e Condizioni</a>
          <a href="#" className="hover:text-white transition-colors">Contatti</a>
        </div>
        <div className="text-2xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#d4b062] to-[#b35d00] mb-3 inline-block">
          SYNAPTICA
        </div>
        <p className="text-xs">© 2026 Synaptica. Tutti i diritti riservati.</p>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0b1b42] border border-[#40c4ff]/40 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-[0_0_40px_rgba(64,196,255,0.15)]">
            <div className="sticky top-0 bg-[#0b1b42] p-4 border-b border-[#40c4ff]/20 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Informativa Privacy</h2>
              <button onClick={() => setShowPrivacy(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>
            <div className="p-6 text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
              <p><strong className="text-white">Titolare del Trattamento:</strong> Summeet S.r.l.</p>
              <p><strong className="text-white">Finalità del trattamento:</strong> I dati forniti (indirizzo email) vengono utilizzati esclusivamente per permettere l'invio del link di accesso al corso ECM tramite il proprio client di posta. Raccogliamo inoltre dati di navigazione in forma anonima per finalità statistiche (es. numero di visite, area geografica approssimativa) per capire l'utilizzo della piattaforma.</p>
              <p><strong className="text-white">Conservazione dei dati:</strong> Nessun indirizzo email viene salvato o conservato nei nostri database per finalità di marketing. L'invio dell'email avviene direttamente tramite l'applicazione di posta del tuo dispositivo (protocollo mailto).</p>
              <p><strong className="text-white">Diritti dell'interessato:</strong> Ai sensi del GDPR, hai il diritto di richiedere l'accesso, la rettifica o la cancellazione dei tuoi dati contattando Summeet S.r.l.</p>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {showCookie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0b1b42] border border-[#40c4ff]/40 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-[0_0_40px_rgba(64,196,255,0.15)]">
            <div className="sticky top-0 bg-[#0b1b42] p-4 border-b border-[#40c4ff]/20 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Cookie Policy</h2>
              <button onClick={() => setShowCookie(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>
            <div className="p-6 text-gray-300 space-y-4 text-sm md:text-base leading-relaxed">
              <p>Questo sito utilizza cookie tecnici strettamente necessari per il corretto funzionamento della piattaforma.</p>
              <p>Inoltre, utilizziamo cookie analitici di terze parti (in forma anonimizzata) per raccogliere informazioni statistiche aggregate sull'utilizzo del sito (es. numero di visitatori, provenienza geografica approssimativa), al fine di misurare l'efficacia della pagina.</p>
              <p>Continuando a navigare e utilizzando i servizi della pagina, accetti l'utilizzo di tali cookie essenziali e analitici anonimizzati.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
