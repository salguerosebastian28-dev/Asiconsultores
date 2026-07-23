import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Gavel, 
  ShieldCheck, 
  FileText, 
  Users, 
  Scale, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  Shield,
  Briefcase,
  AlertTriangle,
  Coins,
  Handshake
} from 'lucide-react';
import propiedadHorizontalImg from '../assets/images/propiedad_horizontal_hd_1784775616069.jpg';

interface PropiedadHorizontalProps {
  onContactClick: () => void;
}

export const PropiedadHorizontal: React.FC<PropiedadHorizontalProps> = ({ onContactClick }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleWhatsAppConsult = () => {
    setIsConnecting(true);
    setTimeout(() => {
      const whatsappMessage = encodeURIComponent(
        "Hola ASI Consultores, vengo de la sección de Propiedad Horizontal de su página web y me gustaría recibir asesoría legal especializada para mi edificación / conjunto residencial."
      );
      window.open(`https://wa.me/573209461837?text=${whatsappMessage}`, '_blank');
      setIsConnecting(false);
    }, 2000);
  };

  const servicesPH = [
    {
      title: 'Asambleas y Reglamentos',
      subtitle: 'Cumplimiento Ley 675 de 2001',
      description: 'Acompañamiento legal en Asambleas Ordinarias y Extraordinarias. Redacción, actualización y reforma de Reglamentos de Propiedad Horizontal adaptados a la norma vigente.',
      icon: <Building2 className="w-7 h-7 text-[#DF871B]" />,
      items: [
        'Acompañamiento y verificación de quórum en asambleas.',
        'Revisión y reforma de Reglamentos de Propiedad Horizontal.',
        'Redacción de actas de asamblea para evitar nulidades.',
        'Asesoría técnica al Consejo de Administración y Administración.'
      ]
    },
    {
      title: 'Cobro de Cartera y Ejecutivo',
      subtitle: 'Recuperación Efectiva de Cuotas',
      description: 'Gestión especializada de cobro persuasivo y procesos ejecutivos para la recuperación de expansas comunes adeudadas.',
      icon: <Coins className="w-7 h-7 text-[#DF871B]" />,
      items: [
        'Cobro prejurídico persuasivo con acuerdos de pago.',
        'Procesos ejecutivos judiciales de cuotas de administración.',
        'Solicitud de medidas cautelares (embargo y secuestro).',
        'Cálculo exacto de intereses moratorios vigentes.'
      ]
    },
    {
      title: 'Impugnación y Defensa Judicial',
      subtitle: 'Representación en Litigios',
      description: 'Defensa sólida de la copropiedad o de propietarios en procesos de impugnación de actas y controversias judiciales.',
      icon: <Gavel className="w-7 h-7 text-[#DF871B]" />,
      items: [
        'Procesos de impugnación de decisiones asamblearias (Art. 49).',
        'Representación ante jueces civiles e inspectores de policía.',
        'Defensa en querellas policivas y vulneración de derechos.',
        'Acciones de tutela y recursos judiciales urgentes.'
      ]
    },
    {
      title: 'Convivencia y Sanciones',
      subtitle: 'Solución Pacífica de Conflictos',
      description: 'Elaboración de Manuales de Convivencia y aplicación rigurosa del debido proceso sancionatorio a infractores.',
      icon: <Handshake className="w-7 h-7 text-[#DF871B]" />,
      items: [
        'Diseño de Manuales de Convivencia y reglamento interno.',
        'Asesoría para la imposición legal de sanciones e multas.',
        'Mediación y conciliación de conflictos comunitarios.',
        'Atención de reclamos por ruido, mascotas y uso de áreas comunes.'
      ]
    },
    {
      title: 'Contratación y Pólizas',
      subtitle: 'Seguridad Legal y Proveedores',
      description: 'Protección contractual en la vinculación de empresas de seguridad privada, aseo, mantenimiento e infraestructura.',
      icon: <FileText className="w-7 h-7 text-[#DF871B]" />,
      items: [
        'Elaboración y revisión de contratos comerciales de servicios.',
        'Auditoría y cobro de pólizas de seguro de áreas comunes.',
        'Prevención de riesgos de responsabilidad laboral o civil.',
        'Estudio de garantías de contratación y cumplimiento.'
      ]
    },
    {
      title: 'Vicios de Construcción',
      subtitle: 'Reclamaciones a Constructoras',
      description: 'Defensa jurídica por deficiencias estructurales, vicios ocultos y entrega tardía o incompleta de zonas comunes.',
      icon: <ShieldCheck className="w-7 h-7 text-[#DF871B]" />,
      items: [
        'Demandas contra constructoras por defectos de entrega.',
        'Reclamación de garantías ante la Superintendencia de Industria y Comercio.',
        'Peritajes legales para recepción de zonas comunes.',
        'Negociación directa de reparación con la constructora.'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-slate-50 text-slate-800"
    >
      {/* Hero Header - Dark Blue Theme for Dramatic Start */}
      <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0D1E3A] text-white border-b border-[#0D1E3A]/20">
        <div className="absolute inset-0 z-0">
          <img 
            src={propiedadHorizontalImg} 
            alt="Conjunto Residencial Propiedad Horizontal" 
            className="w-full h-full object-cover opacity-25 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071324] via-[#0D1E3A]/90 to-[#0D1E3A]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(223,135,27,0.18),transparent_70%)]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-3/5 text-center lg:text-left space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
              >
                <Building2 className="w-4 h-4 text-[#DF871B]" />
                <span className="text-[#DF871B] text-[11px] font-bold uppercase tracking-[0.25em]">
                  Ley 675 de 2001 & Derecho Inmobiliario
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
              >
                Especialistas en <br />
                <span className="text-[#DF871B] italic font-serif">Propiedad Horizontal</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl"
              >
                Acompañamiento legal preventivo y judicial de alto nivel a administradores, consejos de administración y propietarios de edificios, conjuntos residenciales y centros comerciales.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
              >
                <button
                  onClick={handleWhatsAppConsult}
                  disabled={isConnecting}
                  className="bg-[#DF871B] text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-[#e5952b] hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center gap-3"
                >
                  {isConnecting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Conectando...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      <span>Consulta Prioritaria en PH</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onContactClick}
                  className="px-8 py-4 rounded-full font-bold text-base text-white border border-white/30 hover:bg-white/10 transition-all"
                >
                  Agendar Cita en Oficina
                </button>
              </motion.div>
            </div>

            {/* Accent Card in Hero */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:w-2/5 w-full"
            >
              <div className="bg-white text-[#0D1E3A] p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DF871B]/10 rounded-full blur-2xl" />
                
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#DF871B] block mb-3">
                  Respaldo Jurídico Especializado
                </span>
                
                <h3 className="text-2xl font-bold text-[#0D1E3A] mb-6">
                  ¿Por qué contratar nuestra consultoría en PH?
                </h3>

                <ul className="space-y-4">
                  {[
                    'Efectividad comprobada en cobro ejecutivo de mora.',
                    'Blindaje legal en decisiones y actas de asamblea.',
                    'Experiencia en mediación de conflictos de convivencia.',
                    'Asesoría técnica en contratación con proveedores.'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#DF871B] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Atención en Chía, Bogotá y Cundinamarca</p>
                    <p className="text-sm font-bold text-[#0D1E3A]">Sede Offices Center Chía Elite</p>
                  </div>
                  <Building2 className="w-8 h-8 text-[#DF871B]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Architectural Showcase - High Contrast White Section */}
      <div className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-[3rem] border border-slate-200/80 p-6 md:p-10 shadow-xl relative overflow-hidden"
          >
            <div className="lg:col-span-7 relative group rounded-[2rem] overflow-hidden border border-slate-200 shadow-md aspect-[16/10]">
              <img 
                src={propiedadHorizontalImg} 
                alt="Representación de Propiedad Horizontal - Edificios y Conjuntos Residenciales" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3A]/70 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                <span className="px-4 py-1.5 rounded-full bg-[#0D1E3A]/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                  Copropiedades & Conjuntos Residenciales
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#DF871B] text-[11px] font-bold text-white shadow-md">
                  Ley 675
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold text-[#DF871B] uppercase tracking-[0.2em] block">
                Cobertura Regional & Nacional
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D1E3A] tracking-tight leading-snug">
                Protección Jurídica Integral para Edificios e Inmuebles
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Representamos e inmunizamos legalmente a conjuntos residenciales, torres de apartamentos, centros comerciales y parques empresariales ante la legislación colombiana.
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-4 border-t border-slate-200">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <p className="text-2xl font-black text-[#DF871B]">100%</p>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">Alineación Ley 675</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <p className="text-2xl font-black text-[#0D1E3A]">+15 Años</p>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">Experiencia Inmobiliaria</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid - Crisp Light Background with Luminous Cards */}
      <div className="py-24 bg-slate-50 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold text-[#DF871B] uppercase tracking-[0.25em] mb-3 block">
            Servicios Especializados
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D1E3A] tracking-tight">
            Nuestro Portafolio en Propiedad Horizontal
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 font-normal text-base md:text-lg leading-relaxed">
            Soluciones jurídicas diseñadas para prevenir litigios, proteger el presupuesto comunitario y asegurar la armónica convivencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesPH.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 md:p-9 rounded-[2.5rem] border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#DF871B]/50 flex flex-col justify-between transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#DF871B]/30 to-transparent group-hover:via-[#DF871B] transition-all" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0D1E3A]/5 border border-[#0D1E3A]/10 flex items-center justify-center mb-6 group-hover:bg-[#DF871B]/10 group-hover:border-[#DF871B]/30 transition-colors">
                  {service.icon}
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#DF871B] block mb-2">
                  {service.subtitle}
                </span>

                <h3 className="text-2xl font-bold text-[#0D1E3A] mb-3 group-hover:text-[#DF871B] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed font-normal">
                  {service.description}
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DF871B] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <button
                  onClick={handleWhatsAppConsult}
                  className="text-xs font-extrabold uppercase tracking-widest text-[#0D1E3A] flex items-center gap-2 group-hover:text-[#DF871B] transition-colors"
                >
                  <span>Solicitar Asesoría</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#DF871B]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section - Dark Accent Contrast Banner */}
      <div className="py-20 bg-[#0D1E3A] text-white border-t border-[#0D1E3A]/30">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#DF871B]/15 border border-[#DF871B]/40 flex items-center justify-center text-[#DF871B] shadow-lg">
            <Building2 className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Su copropiedad enfrenta mora en cuotas, conflictos o dudas asamblearias?
          </h2>

          <p className="text-slate-200 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Hable directamente con nuestros consultores expertos en Ley 675 de 2001 para obtener una solución oportuna y jurídicamente blindada.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleWhatsAppConsult}
              className="bg-[#DF871B] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#e5952b] hover:scale-105 transition-all shadow-2xl flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
