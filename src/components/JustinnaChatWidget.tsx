import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Scale, 
  ShieldCheck, 
  Building2, 
  MessageCircle,
  Minimize2,
  Maximize2,
  RotateCcw
} from 'lucide-react';
import Markdown from 'react-markdown';
import justinnaAvatar from '../assets/images/justinna_avatar_1784776018781.jpg';

export interface Message {
  id: string;
  sender: 'user' | 'justinna';
  text: string;
  timestamp: string;
}

const QUICK_QUESTIONS = [
  "¿Cómo cobrar la cartera morosa en un edificio?",
  "¿Cómo hacer un contrato de arrendamiento seguro?",
  "¿Cuáles son las sanciones en un reglamento de propiedad horizontal?",
  "¿Qué hago ante un despido injustificado?"
];

export const JustinnaChatWidget: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'justinna',
      text: '¡Hola! Soy **Justinna**, tu asesora virtual de **ASI Consultores Abogados** 🦉.\n\nEstoy aquí para orientarte en todo lo relacionado con **Derecho, Seguros e Inmobiliaria** en Colombia.\n\n¿En qué consulta legal te puedo ayudar hoy?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      // Build history for API
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const res = await fetch('/api/chat/justinna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          history,
        }),
      });

      const data = await res.json();
      const justinnaReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'justinna',
        text: data.reply || 'Disculpa, tuve un inconveniente al consultar. Por favor contáctanos por WhatsApp.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, justinnaReply]);
    } catch (err) {
      console.error('Error fetching Justinna chat response:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'justinna',
          text: 'Disculpa, ocurrió un error de conexión. Por favor intenta de nuevo o escríbenos directamente a nuestro WhatsApp oficial para atención personalizada.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: '1',
        sender: 'justinna',
        text: '¡Hola de nuevo! Soy **Justinna** 🦉. ¿Tienes otra inquietud legal sobre Derecho, Seguros o Inmobiliaria en la que te pueda orientar?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleWhatsAppRedirect = () => {
    const phone = '573212089456';
    const message = encodeURIComponent('Hola ASI Consultores, estuve conversando con Justinna en el sitio web y me gustaría agendar una consulta jurídica con un abogado especializado.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          onClick={onOpen}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-2.5 pr-5 rounded-full bg-gradient-to-r from-[#0B1A30] via-[#0D2240] to-[#122c52] text-white shadow-[0_15px_35px_rgba(11,26,48,0.5)] border-2 border-[#DF871B]/50 hover:border-[#DF871B] group transition-all"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#DF871B] shrink-0 shadow-inner">
            <img 
              src={justinnaAvatar} 
              alt="Justinna Asesora Virtual" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0B1A30] animate-pulse" />
          </div>

          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-tight text-white group-hover:text-[#DF871B] transition-colors">
                Chatea con Justinna
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#DF871B]" />
            </div>
            <p className="text-[10px] text-slate-300 font-medium tracking-tight">
              Asesora Legal Virtual ASI
            </p>
          </div>
        </motion.button>
      )}

      {/* Chat Modal / Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-50 shadow-[0_25px_60px_-15px_rgba(7,19,36,0.6)] rounded-[2.5rem] border border-[#DF871B]/40 bg-[#0B1A30] flex flex-col overflow-hidden text-white transition-all duration-300 ${
              isExpanded 
                ? 'inset-4 md:inset-10 max-w-5xl max-h-[90vh] mx-auto my-auto' 
                : 'bottom-4 right-4 w-[calc(100vw-2rem)] sm:w-[420px] h-[620px] max-h-[85vh]'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#071324] via-[#0B1A30] to-[#0E2342] p-4 sm:p-5 border-b border-white/10 flex items-center justify-between relative shrink-0">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#DF871B] shrink-0 shadow-md">
                  <img 
                    src={justinnaAvatar} 
                    alt="Justinna - Asesora Virtual" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#071324]" />
                </div>
                
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-white tracking-tight truncate">
                      Justinna
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#DF871B]/20 border border-[#DF871B]/40 text-[9px] font-extrabold text-[#DF871B] tracking-wider uppercase">
                      IA ASI
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 truncate font-light flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                    Experta en Derecho, Seguros e Inmobiliaria
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handleReset}
                  title="Reiniciar conversación"
                  className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? 'Contraer' : 'Expandir'}
                  className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Specialties Bar */}
            <div className="bg-[#071324]/80 px-4 py-2 border-b border-white/5 flex items-center justify-around text-[10px] text-slate-300 font-medium shrink-0">
              <span className="flex items-center gap-1"><Scale className="w-3 h-3 text-[#DF871B]" /> Derecho</span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#DF871B]" /> Seguros</span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1"><Building2 className="w-3 h-3 text-[#DF871B]" /> Inmobiliaria</span>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'justinna' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#DF871B]/50 shrink-0 mt-1">
                      <img src={justinnaAvatar} alt="Justinna" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#DF871B] text-white rounded-tr-none shadow-md'
                        : 'bg-white/10 backdrop-blur-md text-slate-100 border border-white/10 rounded-tl-none shadow-md'
                    }`}
                  >
                    {msg.sender === 'justinna' ? (
                      <div className="markdown-body text-slate-100 text-xs sm:text-sm space-y-2">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    )}
                    <span
                      className={`block text-[10px] mt-2 font-mono ${
                        msg.sender === 'user' ? 'text-white/80 text-right' : 'text-slate-400 text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1 border border-white/20 text-white">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#DF871B]/50 shrink-0">
                    <img src={justinnaAvatar} alt="Justinna pensando" className="w-full h-full object-cover animate-pulse" />
                  </div>
                  <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-none border border-white/10 text-xs text-slate-300 flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#DF871B] animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[#DF871B] animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-[#DF871B] animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span>Justinna está analizando la ley colombiana...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions Suggestions */}
            {messages.length <= 3 && !isLoading && (
              <div className="px-4 py-2 bg-[#071324]/50 border-t border-white/5 shrink-0">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider">
                  Sugerencias rápidas:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-[11px] text-slate-300 bg-white/5 hover:bg-[#DF871B]/20 hover:text-white hover:border-[#DF871B]/50 px-2.5 py-1 rounded-full border border-white/10 transition-all text-left line-clamp-1"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input & Actions */}
            <div className="p-3 sm:p-4 bg-[#071324] border-t border-white/10 shrink-0 space-y-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu consulta jurídica..."
                  disabled={isLoading}
                  className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#DF871B] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-[#DF871B] text-white flex items-center justify-center hover:bg-[#e5952b] transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-between pt-1">
                <p className="text-[10px] text-slate-400 italic">
                  Tu tranquilidad jurídica es mi prioridad.
                </p>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="text-[11px] font-bold text-[#25D366] hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Hablar con Abogado Humano
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
