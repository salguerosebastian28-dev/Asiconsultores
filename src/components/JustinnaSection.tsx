import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Scale, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Heart, 
  Eye, 
  Shield, 
  Award,
  MessageCircle
} from 'lucide-react';
import Markdown from 'react-markdown';
import justinnaAvatar from '../assets/images/justinna_avatar_1784776018781.jpg';
import justinnaBanner from '../assets/images/justinna_banner_1784776029917.jpg';

interface JustinnaSectionProps {
  onOpenWidget?: () => void;
}

export const JustinnaSection: React.FC<JustinnaSectionProps> = ({ onOpenWidget }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'justinna'; text: string }>>([
    {
      sender: 'justinna',
      text: '¡Hola! Soy **Justinna**, tu asesora virtual de **ASI Consultores**. Estoy lista para responder tus preguntas sobre legislación colombiana, propiedad horizontal, derecho laboral, seguros o gestión inmobiliaria.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInlineSend = async (queryText?: string) => {
    const query = (queryText || input).trim();
    if (!query || isLoading) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!queryText) setInput('');
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const res = await fetch('/api/chat/justinna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: 'justinna',
          text: data.reply || 'Disculpa, no pude procesar la respuesta. Por favor intenta de nuevo.',
        },
      ]);
    } catch (err) {
      console.error('Error querying Justinna in section:', err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'justinna',
          text: 'Tuve un inconveniente de conexión. Puedes volver a intentarlo o escribirnos directamente a nuestro WhatsApp oficial.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="justinna" className="py-28 bg-[#071324] relative overflow-hidden text-white border-t border-b border-white/10">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#DF871B]/10 rounded-full blur-[140px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0B1A30] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DF871B]/15 border border-[#DF871B]/30"
          >
            <Sparkles className="w-4 h-4 text-[#DF871B]" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#DF871B]">
              Inteligencia Artificial Legal & Consultoría 24/7
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Conoce a <span className="text-[#DF871B] italic font-serif">Justinna</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Tu Asesora Virtual experta en Derecho, Seguros e Inmobiliaria de ASI Consultores Abogados.
          </motion.p>
        </div>

        {/* Main Grid: Left Avatar/Info + Right Embedded Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Justinna Character Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#0B1A30] via-[#0E2342] to-[#071324] rounded-[3rem] border border-[#DF871B]/40 p-8 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#DF871B]/15 rounded-full blur-3xl group-hover:bg-[#DF871B]/25 transition-all" />

            <div className="relative z-10 space-y-6">
              {/* Avatar and Main Title */}
              <div className="flex items-center gap-5">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#DF871B] shadow-xl shrink-0">
                  <img
                    src={justinnaAvatar}
                    alt="Justinna Asesora Virtual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0B1A30]" />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white tracking-tight">
                    Justinna
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#DF871B]">
                    Tu Asesora Virtual
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    ASI Consultores Abogados
                  </p>
                </div>
              </div>

              {/* Slogan */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 italic text-slate-200 text-sm font-light leading-relaxed">
                "¡Hola! Soy Justinna, tu asistente virtual. Estoy aquí para ayudarte con todo lo relacionado con derecho, seguros e inmobiliaria. Tu tranquilidad jurídica y patrimonial es mi prioridad."
              </div>

              {/* 3 Core Pillars */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#071324] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#DF871B]/20 text-[#DF871B]">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">DERECHO</h4>
                    <p className="text-xs text-slate-300">
                      Asesoría legal clara y efectiva para proteger tus derechos.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#071324] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#DF871B]/20 text-[#DF871B]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">SEGUROS</h4>
                    <p className="text-xs text-slate-300">
                      Te oriento para elegir la mejor protección para ti y tu familia.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#071324] border border-white/10 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#DF871B]/20 text-[#DF871B]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">INMOBILIARIA</h4>
                    <p className="text-xs text-slate-300">
                      Te acompaño en la gestión, administración y negociación de inmuebles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Embedded Chat Module */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#0B1A30] rounded-[3rem] border border-white/15 p-6 md:p-8 shadow-2xl flex flex-col h-[520px]"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#DF871B]">
                  <img src={justinnaAvatar} alt="Justinna" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Chatea aquí con Justinna</h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    En línea • IA Legal Activa
                  </p>
                </div>
              </div>

              {onOpenWidget && (
                <button
                  onClick={onOpenWidget}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#DF871B] text-xs font-bold transition-colors text-white"
                >
                  Abrir Ventana Flotante ↗
                </button>
              )}
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'justinna' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#DF871B] shrink-0 mt-1">
                      <img src={justinnaAvatar} alt="Justinna" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                      m.sender === 'user'
                        ? 'bg-[#DF871B] text-white rounded-tr-none'
                        : 'bg-white/10 text-slate-100 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {m.sender === 'justinna' ? (
                      <div className="markdown-body text-xs sm:text-sm space-y-2">
                        <Markdown>{m.text}</Markdown>
                      </div>
                    ) : (
                      <p>{m.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start items-center text-xs text-slate-300">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#DF871B] animate-pulse">
                    <img src={justinnaAvatar} alt="Justinna" className="w-full h-full object-cover" />
                  </div>
                  <span className="bg-white/10 px-4 py-2 rounded-2xl">Justinna está redactando la respuesta...</span>
                </div>
              )}
            </div>

            {/* Quick Sample Chips */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => handleInlineSend("¿Cómo se regula la Ley 675 en Propiedad Horizontal?")}
                className="text-[11px] bg-white/5 hover:bg-[#DF871B]/20 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-white/10 transition-colors"
              >
                Ley 675 Propiedad Horizontal
              </button>
              <button
                onClick={() => handleInlineSend("¿Qué requisitos necesita una asamblea ordinaria?")}
                className="text-[11px] bg-white/5 hover:bg-[#DF871B]/20 text-slate-300 hover:text-white px-3 py-1 rounded-full border border-white/10 transition-colors"
              >
                Requisitos de Asambleas
              </button>
            </div>

            {/* Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleInlineSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregúntale a Justinna sobre legislación en Colombia..."
                disabled={isLoading}
                className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#DF871B]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-[#DF871B] text-white flex items-center justify-center hover:bg-[#e5952b] transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Brand Values Banner */}
        <div className="bg-gradient-to-r from-[#0B1A30] via-[#0E2342] to-[#0B1A30] rounded-[2.5rem] border border-[#DF871B]/30 p-6 md:p-8 text-center space-y-6 shadow-xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#DF871B]">
            Mis Valores Fundamentales
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#DF871B]" />
              <span className="text-sm font-bold text-white tracking-wide">INTEGRIDAD</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-3">
              <Shield className="w-5 h-5 text-[#DF871B]" />
              <span className="text-sm font-bold text-white tracking-wide">COMPROMISO</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-3">
              <Eye className="w-5 h-5 text-[#DF871B]" />
              <span className="text-sm font-bold text-white tracking-wide">TRANSPARENCIA</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-3">
              <Heart className="w-5 h-5 text-[#DF871B]" />
              <span className="text-sm font-bold text-white tracking-wide">EMPATÍA</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 italic max-w-3xl mx-auto pt-2 border-t border-white/10">
            "Justinna: Seguridad jurídica, protección aseguradora y confianza inmobiliaria en un solo lugar."
          </p>
        </div>
      </div>
    </section>
  );
};
