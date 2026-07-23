import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  ShieldCheck, 
  User, 
  CreditCard, 
  Mail, 
  Briefcase, 
  FileText, 
  CheckCircle2, 
  MessageCircle,
  Eye,
  Lock,
  Clock,
  Zap
} from 'lucide-react';

interface LegalContactFormProps {
  firmName?: string;
  defaultPhone?: string;
  onSuccess?: () => void;
}

export const LegalContactForm: React.FC<LegalContactFormProps> = ({
  firmName = 'ASI Consultores Abogados',
  defaultPhone = '573209461837',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    correo: '',
    tipoServicio: 'Propiedad Horizontal (Ley 675)',
    resumenCaso: '',
    telefonoDestino: defaultPhone
  });

  const [showPreview, setShowPreview] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const serviciosLegales = [
    'Propiedad Horizontal (Ley 675)',
    'Impugnación de Asambleas y Actas',
    'Cobro Ejecutivo y Cartera de Expansas',
    'Derecho Civil y Contratos',
    'Derecho Laboral y Seguridad Social',
    'Derecho Comercial y Societario',
    'Vicios de Construcción y Reclamaciones',
    'Derecho Inmobiliario y Urbanístico',
    'Asesoría Jurídica Preventiva General'
  ];

  const lineasWhatsApp = [
    { number: '573209461837', label: 'Línea Directa 1 (+57 320 946 1837)' },
    { number: '573027892614', label: 'Línea Directa 2 (+57 302 789 2614)' }
  ];

  // Construye el texto automático exacto para WhatsApp con datos en negrita (*texto*)
  const generateMessageText = () => {
    const firma = firmName ? `*${firmName}*` : '*ASI Consultores Abogados*';
    const nombre = formData.nombre.trim() ? `*${formData.nombre.trim()}*` : '*[Nombre Completo]*';
    const cedula = formData.cedula.trim() ? `*${formData.cedula.trim()}*` : '*[Cédula]*';
    const servicio = formData.tipoServicio ? `*${formData.tipoServicio}*` : '*[Tipo de Servicio Select]*';
    const resumen = formData.resumenCaso.trim() ? `*${formData.resumenCaso.trim()}*` : '*[Resumen del Caso]*';
    const correo = formData.correo.trim() ? `*${formData.correo.trim()}*` : '*[Correo]*';

    return `Estimados abogados de ${firma}, 

Un cordial saludo. Mi nombre es ${nombre}, identificado(a) con cédula N° ${cedula}. Me pongo en contacto con ustedes a través de su sitio web para solicitar su asesoría en el área de ${servicio}. 

Para contextualizar mi situación, ${resumen}. 

Quedo a la espera de sus indicaciones para coordinar una consulta. Pueden responder a este mensaje o escribirme al correo ${correo}.

Agradezco de antemano su atención.`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      setErrorMsg('Por favor ingrese su nombre completo.');
      return;
    }
    if (!formData.cedula.trim()) {
      setErrorMsg('Por favor ingrese su número de cédula o documento.');
      return;
    }
    if (!formData.correo.trim() || !formData.correo.includes('@')) {
      setErrorMsg('Por favor ingrese un correo electrónico válido.');
      return;
    }
    if (!formData.resumenCaso.trim()) {
      setErrorMsg('Por favor ingrese un resumen o detalle de su caso.');
      return;
    }

    const messageText = generateMessageText();
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${formData.telefonoDestino}?text=${encodedMessage}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div className="w-full bg-[#0D1E3A] text-white p-8 md:p-12 rounded-[2rem] border border-[#DF871B]/30 shadow-2xl relative overflow-hidden">
      {/* Subtle background luxury pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#DF871B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DF871B]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Header section with refined sober styling */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#DF871B]/30 text-[#DF871B] text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Canal Directo Consular & Judicial</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Solicitud de Asesoría Jurídica
            </h3>
            <p className="text-sm text-slate-300 font-normal mt-1.5 max-w-2xl leading-relaxed">
              Diligencie el formulario formal a continuación. El sistema consolidará su caso en una comunicación estructurada con datos destacados en <strong className="text-white font-semibold">negrita</strong>.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="self-start lg:self-auto inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 hover:border-[#DF871B]/40 transition-all shrink-0 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#DF871B]" />
            <span>{showPreview ? 'Ocultar Formato' : 'Ver Formato Redactado'}</span>
          </button>
        </div>

        {/* High Priority Rationale Notice - Explicitly explaining why WhatsApp is used */}
        <div className="p-5 rounded-2xl bg-[#071324] border border-[#DF871B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DF871B]/15 border border-[#DF871B]/30 flex items-center justify-center text-[#DF871B] shrink-0 mt-0.5 sm:mt-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#DF871B] uppercase tracking-wider mb-0.5">
                ¿Por qué su caso se atiende vía WhatsApp?
              </p>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Reconocemos que su asunto legal es de <strong className="text-white font-semibold">suma importancia y requiere inmediata atención</strong>. Con el fin de que su caso sea revisado y atendido de forma instantánea sin intermediarios ni demoras de correo, lo conectamos directamente con el equipo jurídico en tiempo real.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Respuesta en Tiempo Real</span>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className={`${showPreview ? 'lg:col-span-7' : 'lg:col-span-12'} transition-all duration-300`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs font-medium flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-ping shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Grid 1: Nombre & Cédula */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#DF871B]" />
                    <span>Nombre Completo *</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Juan Carlos Rodríguez"
                    className="w-full bg-[#071324] border border-white/15 focus:border-[#DF871B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#DF871B] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="cedula" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-[#DF871B]" />
                    <span>Cédula de Ciudadanía / Documento *</span>
                  </label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleChange}
                    placeholder="Ej. 1.018.452.890"
                    className="w-full bg-[#071324] border border-white/15 focus:border-[#DF871B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#DF871B] transition-all"
                  />
                </div>
              </div>

              {/* Grid 2: Correo & Tipo de Servicio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="correo" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#DF871B]" />
                    <span>Correo Electrónico *</span>
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className="w-full bg-[#071324] border border-white/15 focus:border-[#DF871B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#DF871B] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="tipoServicio" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#DF871B]" />
                    <span>Tipo de Servicio Legal *</span>
                  </label>
                  <select
                    id="tipoServicio"
                    name="tipoServicio"
                    value={formData.tipoServicio}
                    onChange={handleChange}
                    className="w-full bg-[#071324] border border-white/15 focus:border-[#DF871B] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#DF871B] transition-all cursor-pointer"
                  >
                    {serviciosLegales.map((servicio, idx) => (
                      <option key={idx} value={servicio} className="bg-[#071324] text-white">
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Línea WhatsApp */}
              <div>
                <label htmlFor="telefonoDestino" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#DF871B]" />
                  <span>Línea Directa de Atención Jurídica</span>
                </label>
                <select
                  id="telefonoDestino"
                  name="telefonoDestino"
                  value={formData.telefonoDestino}
                  onChange={handleChange}
                  className="w-full bg-[#071324] border border-white/15 focus:border-[#DF871B] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#DF871B] transition-all cursor-pointer"
                >
                  {lineasWhatsApp.map((linea, idx) => (
                    <option key={idx} value={linea.number} className="bg-[#071324] text-white">
                      {linea.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Resumen del Caso */}
              <div>
                <label htmlFor="resumenCaso" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#DF871B]" />
                  <span>Resumen del Caso / Contexto Jurídico *</span>
                </label>
                <textarea
                  id="resumenCaso"
                  name="resumenCaso"
                  rows={4}
                  value={formData.resumenCaso}
                  onChange={handleChange}
                  placeholder="Describa de forma concisa los hechos, antecedentes o inquietudes de su situación..."
                  className="w-full bg-[#071324] border border-white/15 focus:border-[#DF871B] rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#DF871B] transition-all resize-none"
                />
              </div>

              {/* Submit Button - Sober, Prestigious & Corporate */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-xl bg-[#DF871B] hover:bg-[#c97514] active:scale-[0.99] text-white font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer border border-[#DF871B]/50 group"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#DF871B] group-hover:rotate-6 transition-transform shrink-0" />
                  <span className="tracking-wide">Enviar Solicitud a WhatsApp</span>
                  <Send className="w-4 h-4 ml-auto opacity-90 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Abriendo WhatsApp con su mensaje estructurado y datos en negrita para atención inmediata...</span>
                </motion.div>
              )}
            </form>
          </div>

          {/* Live Formal Letter Preview Pane */}
          <AnimatePresence>
            {showPreview && (
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                className="lg:col-span-5 bg-[#071324] p-6 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#DF871B]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DF871B]">
                      Estructura de la Carta
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    *Negrita WhatsApp*
                  </span>
                </div>

                <div className="bg-[#0B1A30] p-4 rounded-xl border border-white/10 font-sans text-xs text-slate-300 whitespace-pre-wrap leading-relaxed selection:bg-[#DF871B] selection:text-white">
                  {generateMessageText().split(/(\*[^*]+\*)/g).map((part, i) => {
                    if (part.startsWith('*') && part.endsWith('*')) {
                      return (
                        <strong key={i} className="text-[#DF871B] font-extrabold bg-[#DF871B]/10 px-1 py-0.5 rounded border border-[#DF871B]/20">
                          {part}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </div>

                <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>
                    Los datos resaltados en <strong className="text-[#DF871B]">negrita</strong> facilitarán la lectura inmediata del equipo jurídico.
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Data Protection / Habeas Data Notice */}
        <div className="pt-6 border-t border-white/10 flex items-start gap-3.5 text-slate-400 text-xs leading-relaxed">
          <Lock className="w-4 h-4 text-[#DF871B] shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300 font-semibold">Tratamiento Confidencial de Datos (Ley 1581 de 2012):</strong>{' '}
            La información recopilada en este formulario es de carácter estrictamente confidencial y se utilizará exclusivamente por <strong className="text-slate-200">{firmName}</strong> para dar respuesta oficial e inmediata a su solicitud jurídica.
          </p>
        </div>
      </div>
    </div>
  );
};

