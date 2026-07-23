/**
 * ASI Consultores Abogados - Plataforma Web Institucional
 * @license Apache-2.0
 */

import React, { useState, useRef, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PropiedadHorizontal } from './components/PropiedadHorizontal';
import { LegalContactForm } from './components/LegalContactForm';
import heroBg from './assets/images/asi_lawyers_hero_hd_1784786185757.jpg';
import modernLawyersHero from './assets/images/modern_lawyers_hero_1784821329117.jpg';
import teamImg from './assets/images/modern_lawyers_team_1784774266222.jpg';
import { 
  Shield, 
  Gavel, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X,
  CheckCircle2,
  Clock,
  Briefcase,
  Scale,
  Heart,
  Handshake,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Target,
  Eye,
  Linkedin,
  Instagram
} from 'lucide-react';

const COLORS = {
  navy: '#0D1E3A', // Deep Corporate Navy Blue
  navyDark: '#071324', // Extra Deep Navy
  amber: '#DF871B', // Warm Amber Gold
  amberHover: '#E5952B',
  bgLight: '#F4F6FA',
  textDark: '#0D1E3A',
  textMuted: '#64748B',
};

const SERVICES = [
  {
    title: 'ASESORÍA LEGAL EMPRESARIAL Y LABORAL',
    subtitle: 'Consultoría Estratégica',
    items: [
      'Contratos de trabajo y procesos disciplinarios.',
      'Liquidaciones de prestaciones sociales y nómina.',
      'Representación ante el Ministerio del Trabajo y UGPP.',
      'Auditoría laboral preventiva y cumplimiento normativo.',
      'Defensa en procesos de responsabilidad médica y civil.'
    ],
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    title: 'CONTRATACIÓN Y CONSTITUCIÓN DE EMPRESAS',
    subtitle: 'Estructuración Corporativa',
    items: [
      'Reglamento Interno de Trabajo y de Higiene.',
      'Constitución de sociedades y reformas estatutarias.',
      'Redacción y revisión de contratos comerciales y civiles.',
      'Formalización ante Cámara de Comercio y DIAN.',
      'Acuerdos de accionistas y protocolos de familia.'
    ],
    icon: <Scale className="w-8 h-8" />,
  },
  {
    title: 'IMPLEMENTACIÓN SG-SST',
    subtitle: 'Seguridad y Salud en el Trabajo',
    items: [
      'Diseño y ejecución del Sistema de Gestión (SG-SST).',
      'Capacitaciones especializadas y planes de emergencia.',
      'Investigación de accidentes y enfermedades laborales.',
      'Cumplimiento de estándares mínimos (Res. 0312).',
      'Asesoría en juntas de calificación de invalidez.'
    ],
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: 'PROTECCIÓN DE DATOS Y RSE',
    subtitle: 'Habeas Data y Sostenibilidad',
    items: [
      'Políticas de tratamiento de datos personales (Ley 1581).',
      'Registro Nacional de Bases de Datos ante la SIC.',
      'Programas de Responsabilidad Social Empresarial (RSE).',
      'Estrategias de sostenibilidad y bienestar corporativo.',
      'Auditorías de cumplimiento en privacidad de la información.'
    ],
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'SEGUROS Y PROPIEDAD INTELECTUAL',
    subtitle: 'Protección de Activos',
    items: [
      'Asesoría en contratación de pólizas y estudio de coberturas.',
      'Reclamaciones ante aseguradoras por siniestros.',
      'Registro de marcas y patentes ante la Superintendencia.',
      'Protección de activos intangibles y derechos de autor.',
      'Seguros de vida, cumplimiento y responsabilidad civil.'
    ],
    icon: <Gavel className="w-8 h-8" />,
  },
  {
    title: 'REPRESENTACIÓN Y DEFENSA LEGAL',
    subtitle: 'Litigio y Entidades',
    items: [
      'Defensa ante la UGPP, DIAN y Superintendencias.',
      'Procesos judiciales en áreas civil, laboral y comercial.',
      'Representación en conciliaciones y arbitrajes.',
      'Gestión de cobro de cartera y procesos ejecutivos.',
      'Acciones de tutela y recursos extraordinarios.'
    ],
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

const WhoWeAre = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen relative overflow-hidden bg-white"
    >
      {/* Top Section: Dark Atmospheric */}
      <div className="relative min-h-screen flex items-center bg-[#0B1A30] overflow-hidden">
        {/* Background with Atmospheric Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Office Background" 
            className="w-full h-full object-cover opacity-25 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071324]/80 via-[#0B1A30]/50 to-[#0B1A30]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(223,135,27,0.12),transparent_60%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.15
                  }
                }
              }}
              className="lg:w-1/2 space-y-8"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10"
              >
                <Users className="w-4 h-4 text-[#DF871B]" />
                <span className="text-[#DF871B] text-[10px] font-bold uppercase tracking-[0.3em]">Nuestra Identidad</span>
              </motion.div>
              
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter"
              >
                ¿Quiénes <br />
                <span className="italic font-serif text-[#DF871B]">somos?</span>
              </motion.h2>

              <motion.h3 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-2xl md:text-3xl font-medium text-white/90 leading-tight tracking-tight text-balance"
              >
                Una firma dedicada a la <span className="text-[#DF871B]">consultoría jurídica</span> estratégica con visión global.
              </motion.h3>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-lg text-slate-300 leading-relaxed font-light text-balance"
              >
                Contamos con un equipo de trabajo compuesto por abogados de amplia experiencia y conocimiento en la legislación colombiana. Brindamos un servicio completo y a la medida de sus necesidades.
              </motion.p>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="pt-4"
              >
                <button 
                  onClick={onContactClick}
                  className="bg-[#DF871B] text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-[#e5952b] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#DF871B]/20"
                >
                  Agendar Consulta
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2"
            >
              <div className="relative p-2 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group">
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Nuestro Equipo" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30]/80 via-transparent to-transparent" />
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-dark border border-white/10 rounded-2xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-medium text-center italic text-sm">"Excelencia, Compromiso y Rigor Jurídico"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-[#071324] py-32 relative overflow-hidden">
        {/* Enhanced Background Glow */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#DF871B]/15 rounded-full blur-[180px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="bg-[#0D203D] p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col gap-8 transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0B1A30] border border-[#DF871B]/30 flex items-center justify-center shadow-inner group-hover:border-[#DF871B] transition-colors duration-500">
                  <Target className="w-8 h-8 text-[#DF871B]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif italic text-[#DF871B] tracking-tight">Misión</h3>
              </div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light tracking-wide group-hover:text-white transition-colors duration-500">
                "Brindar asesoría legal integral y personalizada, destacando por nuestra excelencia profesional y compromiso con la justicia, para resolver eficazmente los desafíos legales de nuestros clientes"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="bg-[#0D203D] p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col gap-8 transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0B1A30] border border-[#DF871B]/30 flex items-center justify-center shadow-inner group-hover:border-[#DF871B] transition-colors duration-500">
                  <Eye className="w-8 h-8 text-[#DF871B]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif italic text-[#DF871B] tracking-tight">Visión</h3>
              </div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light tracking-wide group-hover:text-white transition-colors duration-500">
                "Ser reconocidos como líderes en consultoría jurídica, destacando por nuestra ética, innovación y capacidad para anticipar y abordar las necesidades legales emergentes, contribuyendo así al éxito y bienestar de nuestros clientes en un entorno legal dinámico"
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-[#F4F6FA] py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="text-sm font-semibold text-[#DF871B] uppercase tracking-[0.2em] mb-6 block">Nuestros Valores</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0D1E3A] leading-[1.1] tracking-tight text-balance">
                Estos principios son la base de nuestra identidad y compromiso con la excelencia.
              </h2>
            </motion.div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Excelencia Profesional",
                    text: "Calidad superior basada en conocimiento actualizado y experiencia especializada.",
                    icon: <CheckCircle2 className="w-6 h-6 text-[#DF871B]" />
                  },
                  {
                    title: "Integridad y Ética",
                    text: "Honestidad, transparencia y respeto en todas nuestras interacciones profesionales.",
                    icon: <Shield className="w-6 h-6 text-[#DF871B]" />
                  },
                  {
                    title: "Compromiso",
                    text: "Priorizamos sus objetivos, ofreciendo soluciones eficientes y personalizadas.",
                    icon: <Handshake className="w-6 h-6 text-[#DF871B]" />
                  }
                ].map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: i * 0.1 
                    }}
                    whileHover={{ 
                      y: -15, 
                      scale: 1.03,
                      boxShadow: "0 40px 80px -15px rgba(11, 26, 48, 0.08)"
                    }}
                    className="p-10 rounded-[3rem] bg-gradient-to-br from-white via-[#FAFBFD] to-[#F2F5F9] border border-[#DF871B]/15 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DF871B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#DF871B] group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110">
                        {React.cloneElement(val.icon as React.ReactElement<any>, { className: "w-7 h-7 transition-colors duration-500" })}
                      </div>
                      <h4 className="text-xl font-black text-[#0D1E3A] mb-4 tracking-tight group-hover:text-[#DF871B] transition-colors duration-500">{val.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium group-hover:text-slate-900 transition-colors duration-500">{val.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: "Innovación",
                    text: "Buscamos constantemente nuevas perspectivas para abordar desafíos legales complejos.",
                    icon: <Briefcase className="w-6 h-6 text-[#DF871B]" />
                  },
                  {
                    title: "Responsabilidad Social",
                    text: "Contribuimos a la comunidad promoviendo la justicia y apoyando causas sociales.",
                    icon: <Heart className="w-6 h-6 text-[#DF871B]" />
                  }
                ].map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: (i + 3) * 0.1 
                    }}
                    whileHover={{ 
                      y: -15, 
                      scale: 1.03,
                      boxShadow: "0 40px 80px -15px rgba(11, 26, 48, 0.08)"
                    }}
                    className="p-10 rounded-[3rem] bg-gradient-to-br from-white via-[#FAFBFD] to-[#F2F5F9] border border-[#DF871B]/15 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DF871B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#DF871B] group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110">
                        {React.cloneElement(val.icon as React.ReactElement<any>, { className: "w-7 h-7 transition-colors duration-500" })}
                      </div>
                      <h4 className="text-xl font-black text-[#0D1E3A] mb-4 tracking-tight group-hover:text-[#DF871B] transition-colors duration-500">{val.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium group-hover:text-slate-900 transition-colors duration-500">{val.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Navbar = ({ onPageChange, currentPage }: { onPageChange: (page: string) => void, currentPage: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: string, sectionId?: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (page === 'nosotros' || page === 'propiedad-horizontal') {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onPageChange('home');
      if (sectionId) {
        const scroll = () => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        };
        if (currentPage === 'home') scroll();
        else setTimeout(scroll, 500);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          className={`flex justify-between h-16 items-center px-6 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'liquid-glass-scrolled' 
              : 'liquid-glass'
          }`}
        >
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-lg transition-transform group-hover:scale-105 border border-white/30 shrink-0">
              <img 
                src="https://i.ibb.co/HpR3zgt8/Dise-o-sin-t-tulo.png" 
                alt="ASI Consultores Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className={`text-base sm:text-lg font-black tracking-tight leading-none uppercase transition-colors ${scrolled ? 'text-[#0D1E3A]' : 'text-white drop-shadow-sm'}`}>
                ASI
              </span>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#DF871B]">
                Consultores
              </span>
            </div>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { name: 'Inicio', page: 'home' },
              { name: 'Servicios', page: 'home', sectionId: 'servicios' },
              { name: 'Propiedad Horizontal', page: 'propiedad-horizontal' },
              { name: 'Nosotros', page: 'nosotros' }
            ].map((item) => {
              const isActive = (item.page === 'propiedad-horizontal' && currentPage === 'propiedad-horizontal') ||
                               (item.page === 'nosotros' && currentPage === 'nosotros') || 
                               (item.page === 'home' && currentPage === 'home' && !item.sectionId);
              
              return (
                <a 
                  key={item.name}
                  href={`#${item.page}`} 
                  onClick={(e) => handleNavClick(e, item.page, item.sectionId)}
                  className={`text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive 
                      ? 'text-[#DF871B] underline decoration-2 underline-offset-8' 
                      : (scrolled ? 'text-[#0D1E3A]/80 hover:text-[#DF871B]' : 'text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]')
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            
            <div className={`flex items-center space-x-3 border-l pl-5 ${scrolled ? 'border-[#0D1E3A]/15' : 'border-white/20'}`}>
              <a 
                href="https://www.instagram.com/asiconsultores/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram ASI Consultores"
                className={`p-1.5 rounded-full transition-all hover:scale-110 ${scrolled ? 'text-[#0D1E3A]/70 hover:text-[#DF871B]' : 'text-white/80 hover:text-white'}`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/asi-consultores-ltda-35a786370/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn ASI Consultores"
                className={`p-1.5 rounded-full transition-all hover:scale-110 ${scrolled ? 'text-[#0D1E3A]/70 hover:text-[#DF871B]' : 'text-white/80 hover:text-white'}`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a 
              href="#contacto" 
              onClick={(e) => handleNavClick(e, 'home', 'contacto')}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-md hover:scale-105 ${
                scrolled 
                  ? 'bg-[#0D1E3A] text-white hover:bg-[#0B1A30]' 
                  : 'bg-[#DF871B] text-white hover:bg-[#e5952b] shadow-[0_4px_20px_rgba(223,135,27,0.4)]'
              }`}
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-[#0D1E3A]' : 'text-white'}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-[#0D1E3A]/10 p-8 space-y-6 shadow-2xl md:hidden"
          >
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'home')} className="block text-xl font-semibold text-[#0D1E3A]">Inicio</a>
            <a href="#servicios" onClick={(e) => handleNavClick(e, 'home', 'servicios')} className="block text-xl font-semibold text-[#0D1E3A]">Servicios</a>
            <a href="#propiedad-horizontal" onClick={(e) => handleNavClick(e, 'propiedad-horizontal')} className="block text-xl font-semibold text-[#0D1E3A]">Propiedad Horizontal</a>
            <a href="#nosotros" onClick={(e) => handleNavClick(e, 'nosotros')} className="block text-xl font-semibold text-[#0D1E3A]">Nosotros</a>
            <a href="#contacto" onClick={(e) => handleNavClick(e, 'home', 'contacto')} className="block bg-[#DF871B] text-white px-6 py-3 rounded-2xl font-semibold text-center text-base shadow-lg">
              Contacto
            </a>
            
            <div className="pt-6 border-t border-[#0D1E3A]/10 flex justify-center gap-8">
              <a 
                href="https://www.instagram.com/asiconsultores/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#0D1E3A]/5 flex items-center justify-center text-[#0D1E3A] hover:bg-[#DF871B] hover:text-white transition-all"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a 
                href="https://www.linkedin.com/in/asi-consultores-ltda-35a786370/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#0D1E3A]/5 flex items-center justify-center text-[#0D1E3A] hover:bg-[#DF871B] hover:text-white transition-all"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ValueSlider = () => {
  const [current, setCurrent] = useState(0);
  const phrases = [
    {
      title: "Excelencia Jurídica",
      text: "Combinamos rigor académico con una visión estratégica para proteger sus intereses."
    },
    {
      title: "Compromiso Absoluto",
      text: "Su tranquilidad es nuestra prioridad. Defendemos cada caso con pasión y ética."
    },
    {
      title: "Visión Estratégica",
      text: "Anticipamos escenarios para ofrecer soluciones legales innovadoras y efectivas."
    },
    {
      title: "Resultados Concretos",
      text: "Nuestra trayectoria de éxito respalda la calidad de nuestra consultoría jurídica."
    },
    {
      title: "Presencia Nacional",
      text: "Brindamos asesoría integral en todas las regiones del territorio colombiano."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  const next = () => setCurrent((prev) => (prev + 1) % phrases.length);
  const prev = () => setCurrent((prev) => (prev - 1 + phrases.length) % phrases.length);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, ease: [0.2, 0, 0, 1] }}
        className="absolute inset-0 bg-[#DF871B]/10 rounded-full blur-[100px]" 
      />
      
      <motion.div 
        initial={{ 
          backgroundColor: 'rgba(255, 255, 255, 0)', 
          borderColor: 'rgba(255, 255, 255, 0)',
          backdropFilter: 'blur(0px)',
          scale: 0.95
        }}
        animate={{ 
          backgroundColor: 'rgba(13, 30, 58, 0.4)', 
          borderColor: 'rgba(223, 135, 27, 0.4)',
          backdropFilter: 'blur(20px)',
          scale: 1
        }}
        transition={{ duration: 4, ease: [0.2, 0, 0, 1] }}
        className="relative z-10 w-full max-w-md h-[320px] rounded-[3rem] border-2 shadow-[0_50px_100px_-20px_rgba(7,19,36,0.8),0_0_60px_rgba(223,135,27,0.25)] overflow-hidden group"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(20px)', y: -20 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
          >
            <motion.h3 
              className="text-[#DF871B] text-3xl font-black mb-6 tracking-tighter"
            >
              {phrases[current].title}
            </motion.h3>
            <motion.p 
              className="text-white text-lg leading-relaxed font-medium italic opacity-90"
            >
              "{phrases[current].text}"
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#DF871B] hover:text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#DF871B] hover:text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {phrases.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-[#DF871B]' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Hero = ({ onFirmClick }: { onFirmClick: () => void }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handlePremiumRedirect = () => {
    setIsConnecting(true);
    // Sophisticated connection animation
    setTimeout(() => {
      const whatsappMessage = encodeURIComponent("Hola ASI Consultores, vengo de su página web y quisiera recibir asistencia legal inmediata de un abogado premium.");
      window.open(`https://wa.me/573209461837?text=${whatsappMessage}`, '_blank');
      setIsConnecting(false);
    }, 2500);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0B1A30]">
      {/* Background Modern Lawyers Image with Atmospheric Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ 
            scale: [1.05, 1.14, 1.08, 1.05],
            x: ['0%', '1.5%', '-1%', '0%'],
            y: ['0%', '-1%', '1%', '0%'],
            opacity: 0.55
          }}
          transition={{ 
            scale: { duration: 24, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
            x: { duration: 28, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
            y: { duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
            opacity: { duration: 1.5, ease: 'easeOut' }
          }}
          src={modernLawyersHero} 
          alt="ASI Consultores - Firma de Abogados Era Moderna" 
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105 origin-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071324]/85 via-[#0B1A30]/60 to-[#0B1A30]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(223,135,27,0.22),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full pt-32 pb-20 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DF871B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DF871B]"></span>
            </span>
            <span className="text-white/90 text-[10px] font-semibold uppercase tracking-[0.2em]">Excelencia Legal en Colombia</span>
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(20px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="text-6xl md:text-[100px] lg:text-[130px] font-bold text-white leading-[0.85] mb-8 tracking-tighter text-balance"
          >
            Firma de <br />
            <span className="bg-gradient-to-b from-[#DF871B] to-[#F5A038] bg-clip-text text-transparent">Consultoría</span> <br />
            Jurídica
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light text-balance"
          >
            Especialistas en todas las ramas del derecho colombiano. Combinamos rigor académico con una visión estratégica para proteger sus intereses.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button 
              onClick={handlePremiumRedirect}
              disabled={isConnecting}
              className="relative overflow-hidden bg-[#DF871B] text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-[#e5952b] hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-[#DF871B]/30 group min-w-[280px]"
            >
              <AnimatePresence mode="wait">
                {isConnecting ? (
                  <motion.div
                    key="connecting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span className="text-sm tracking-tight">Conectando con un Especialista...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-2"
                  >
                    Asistencia legal inmediata
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Premium shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={isConnecting ? { x: ['100%', '-100%'] } : {}}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </button>
            <button 
              onClick={onFirmClick}
              className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Nuestra Firma
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.8, 
            ease: [0.2, 0, 0, 1] 
          }}
          className="mt-24 h-[400px] md:h-[500px] w-full relative"
        >
          <ValueSlider />
        </motion.div>
      </div>

      {/* Expertise Cards - Bento Style */}
      <div className="relative z-10 w-full mt-auto pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: '01', title: 'Responsabilidad Civil', desc: 'Defensa estratégica en litigios de responsabilidad civil.' },
              { id: '02', title: 'Derecho de Seguros', desc: 'Asesoría técnica en reclamaciones y controversias.' },
              { id: '03', title: 'Derecho Corporativo', desc: 'Derecho de empresa, laboral y seguridad social.' }
            ].map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  delay: 0.2 + (i * 0.15) 
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 250, damping: 25 }
                }}
                className="relative group bg-gradient-to-br from-white via-[#FAFBFD] to-[#F2F5F9] p-10 rounded-[3rem] border-2 border-[#DF871B]/30 hover:border-[#DF871B] transition-all duration-500 group cursor-default shadow-[0_40px_100px_-15px_rgba(11,26,48,0.25),0_0_80px_rgba(223,135,27,0.15)] hover:shadow-[0_80px_160px_-15px_rgba(11,26,48,0.4),0_0_120px_rgba(223,135,27,0.3)] overflow-hidden"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-[#DF871B] to-transparent opacity-60 group-hover:opacity-100 group-hover:h-[12px] transition-all duration-500" />
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(223,135,27,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <span className="text-[#DF871B] font-mono text-xs mb-6 block font-black tracking-[0.4em] opacity-80 group-hover:opacity-100 transition-opacity">{item.id}</span>
                  <h3 className="text-[#0D1E3A] font-black text-2xl mb-4 group-hover:text-[#DF871B] transition-colors duration-500 tracking-tighter leading-tight">{item.title}</h3>
                  <p className="text-[#0D1E3A]/70 text-sm leading-relaxed font-medium group-hover:text-[#0D1E3A] transition-colors duration-500">{item.desc}</p>
                </div>
                
                {/* Decorative Bottom Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#DF871B]/5 rounded-full blur-3xl -mr-16 -mb-16 group-hover:bg-[#DF871B]/20 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-[#071324] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DF871B]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DF871B]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-[#DF871B] uppercase tracking-[0.2em] mb-4 block"
          >
            Especialidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Áreas de Práctica
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 250, damping: 25 } 
              }}
              className="group relative bg-gradient-to-br from-white via-[#FAFBFD] to-[#F2F5F9] p-12 rounded-[3.5rem] border-2 border-[#DF871B]/20 hover:border-[#DF871B] shadow-[0_40px_100px_-15px_rgba(7,19,36,0.5)] hover:shadow-[0_100px_200px_-20px_rgba(7,19,36,0.7),0_0_100px_rgba(223,135,27,0.3)] transition-all duration-500 flex flex-col items-start text-left h-full overflow-hidden"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-transparent via-[#DF871B] to-transparent opacity-50 group-hover:opacity-100 group-hover:h-[15px] transition-all duration-500" />
              
              {/* Inner Luminous Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(223,135,27,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 w-full">
                <div className="mb-10 w-20 h-20 rounded-[2rem] bg-[#0D1E3A]/5 flex items-center justify-center text-[#DF871B] group-hover:bg-[#DF871B] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg] group-hover:scale-110 shadow-inner">
                  {service.icon}
                </div>
                
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#DF871B] opacity-80">{service.subtitle}</span>
                  <h3 className="text-3xl font-black text-[#0D1E3A] tracking-tighter leading-[1.1] group-hover:text-[#DF871B] transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-4 w-full">
                  {service.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start gap-4 text-[#0D1E3A]/75 group-hover:text-[#0D1E3A] transition-colors duration-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DF871B] mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(223,135,27,0.8)]" />
                      <span className="text-sm font-medium leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#DF871B]/5 rounded-full blur-3xl group-hover:bg-[#DF871B]/15 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="nosotros" className="py-32 bg-[#F4F6FA] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#DF871B]/10 rounded-full blur-3xl" />
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-[#0D1E3A]/10">
              <img 
                src={teamImg} 
                alt="Equipo ASI Consultores - Abogados" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5 
              }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute -bottom-8 -right-8 glass p-8 md:p-10 rounded-[3rem] border border-[#0D1E3A]/10 shadow-[0_20px_50px_-15px_rgba(11,26,48,0.15)] hidden sm:block z-20"
            >
              <p className="text-5xl font-bold text-[#0D1E3A] mb-1 tracking-tighter">+15</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DF871B]">Años de Experiencia</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2"
          >
            <span className="text-sm font-semibold text-[#DF871B] uppercase tracking-[0.2em] mb-6 block">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1E3A] mb-8 leading-[1.1] tracking-tight text-balance">
              Un equipo comprometido con la <span className="italic font-serif text-[#DF871B]">justicia</span> y la ética profesional
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light text-balance">
              En ASI Consultores, entendemos que cada caso es único. Por eso, ofrecemos un trato personalizado y directo, manteniendo informados a nuestros clientes en todo momento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                'Atención personalizada 24/7',
                'Alta tasa de éxito en litigios',
                'Transparencia total en honorarios',
                'Especialistas en cada área'
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#DF871B]/15 transition-colors border border-[#0D1E3A]/5 shadow-sm">
                    <CheckCircle2 className="text-[#DF871B] w-5 h-5" />
                  </div>
                  <span className="text-[#0D1E3A] font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  const logos = [
    "https://i.ibb.co/Zzf61jmV/11.png",
    "https://i.ibb.co/zV72T8R3/7.png",
    "https://i.ibb.co/BHx13mR7/1.png",
    "https://i.ibb.co/WdQbYD6/2.png",
    "https://i.ibb.co/S4dN39kS/3.png",
    "https://i.ibb.co/m5QzDjbh/4.png",
    "https://i.ibb.co/chCgtwXd/5.png",
    "https://i.ibb.co/GDXQNYM/6.png",
    "https://i.ibb.co/VW7xQhjY/8.png",
    "https://i.ibb.co/zHmTmm8X/9.png",
    "https://i.ibb.co/bjGhDVxr/10.png",
  ];

  return (
    <section className="py-32 bg-[#F4F6FA] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0D1E3A] mb-6"
        >
          Respaldo legal para los líderes de Colombia.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto"
        >
          Acompañamos a las empresas más emblemáticas del país en sus desafíos legales más complejos, asegurando su crecimiento y cumplimiento en el mercado nacional.
        </motion.p>
      </div>
      
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#F4F6FA] via-[#F4F6FA]/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#F4F6FA] via-[#F4F6FA]/80 to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap items-center py-6 w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              {logos.map((logo, index) => (
                <motion.div 
                  key={`${i}-${index}`} 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="flex items-center justify-center w-72 h-44 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgba(11,26,48,0.06)] border border-[#0D1E3A]/10 transition-all duration-500 cursor-default group overflow-hidden"
                >
                  <img 
                    src={logo} 
                    alt={`Client ${index + 1}`} 
                    className="max-h-32 max-w-[85%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        const span = document.createElement('span');
                        span.className = "text-xl font-semibold tracking-tight text-[#0D1E3A]/30 uppercase";
                        span.innerText = `CLIENTE ${index + 1}`;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const whatsappMessage = encodeURIComponent("Hola ASI Consultores Abogados, vengo de su página web y quisiera recibir asesoría legal.");
  
  const contacts = [
    { 
      name: 'Línea Directa 1 - Asesoría Urgente', 
      number: '+57 320 946 1837', 
      link: `https://wa.me/573209461837?text=${whatsappMessage}`,
      badge: 'Atención Prioritaria',
      role: 'Director Jurídico'
    },
    { 
      name: 'Línea Directa 2 - Recepción de Casos', 
      number: '+57 302 789 2614', 
      link: `https://wa.me/573027892614?text=${whatsappMessage}`,
      badge: 'Disponible Ahora',
      role: 'Coordinación Legal'
    }
  ];

  const emails = [
    { address: 'albertomurcia@asiabogados.com', label: 'Dirección General & Socios' },
    { address: 'info@asiabogados.com', label: 'Consultas Generales y Citas' },
    { address: 'direccion@asiabogados.com', label: 'Secretaría y Documentación' }
  ];

  return (
    <section id="contacto" className="py-28 bg-[#09182E] text-white relative">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DF871B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Main Legal Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <LegalContactForm firmName="ASI Consultores Abogados" defaultPhone="573209461837" />
        </motion.div>

        {/* Direct Channels & Offices Section Header */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#DF871B] uppercase tracking-[0.25em] block mb-2">
              Canales Institucionales
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Otras Formas de Contacto Directo
            </h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              Consulte nuestras líneas directas, correos por departamento o visítenos en nuestra sede principal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Column 1: WhatsApp & Social Networks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-[2rem] bg-[#0D1E3A] border border-[#DF871B]/30 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Líneas de Atención Telefónica y WhatsApp
                    </span>
                  </div>
                  <span className="text-[10px] text-[#25D366] bg-[#25D366]/15 border border-[#25D366]/30 px-2.5 py-1 rounded-full font-bold">
                    Respuesta Inmediata
                  </span>
                </div>

                <div className="space-y-4">
                  {contacts.map((contact, i) => (
                    <motion.a 
                      key={i}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-5 rounded-2xl bg-[#071324] border border-white/10 hover:border-[#25D366]/50 hover:bg-[#071324]/80 transition-all duration-300 block relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#DF871B]">
                          {contact.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">{contact.role}</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                          <MessageCircle className="w-6 h-6 fill-[#25D366]/20" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                            {contact.name}
                          </p>
                          <p className="text-base font-extrabold text-slate-200 font-mono">
                            {contact.number}
                          </p>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold group-hover:bg-[#25D366] group-hover:text-white transition-all">
                          <span>Chat</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media Badges */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Síganos en Redes Sociales
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="https://www.instagram.com/asiconsultores/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#071324] border border-white/10 hover:border-[#DF871B]/50 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-[#DF871B] group-hover:text-white transition-all">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Instagram</p>
                      <p className="text-[11px] text-slate-400">@asiconsultores</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/asi-consultores-ltda-35a786370/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#071324] border border-white/10 hover:border-[#DF871B]/50 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-[#DF871B] group-hover:text-white transition-all">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">LinkedIn</p>
                      <p className="text-[11px] text-slate-400">ASI Consultores</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Email & Physical Headquarters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-[#0D1E3A] border border-[#DF871B]/30 shadow-2xl flex flex-col justify-between space-y-6"
            >
              {/* Emails section */}
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Correos Electrónicos Institucionales
                  </span>
                  <Mail className="w-4 h-4 text-[#DF871B]" />
                </div>

                <div className="space-y-3">
                  {emails.map((email, i) => (
                    <motion.a
                      key={i}
                      href={`mailto:${email.address}`}
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-[#071324] border border-white/10 hover:border-[#DF871B]/40 transition-all group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#DF871B]/15 border border-[#DF871B]/30 flex items-center justify-center text-[#DF871B] group-hover:bg-[#DF871B] group-hover:text-white transition-all shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-[#DF871B] font-bold uppercase tracking-wider">{email.label}</p>
                          <p className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">{email.address}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#DF871B] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Physical Office showcase */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#DF871B] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-bold text-[#DF871B] uppercase tracking-wider mb-0.5">Sede Principal Chía Elite</p>
                      <p className="text-sm font-medium text-white leading-snug">
                        Edificio Offices Center Chía Elite • Oficina Segundo Piso <br />
                        <span className="text-slate-300 text-xs font-normal">Cl. 11 #6A-56, Chía, Cundinamarca</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/5 border border-white/15 px-2.5 py-1 rounded-full text-slate-300 font-medium shrink-0">
                    Oficina Segundo Piso
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[21/9] border border-white/15 group">
                  <img 
                    src="https://i.ibb.co/JWD5hCRp/1644018208-whatsapp-image-2022-01-29-at-2-50-34-pm.jpg" 
                    alt="Edificio Offices Center Chia Elite - ASI Consultores Abogados" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#0B1A30]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      Chía, Cundinamarca
                    </span>
                    <a
                      href="https://maps.google.com/?q=Edificio+Offices+Center+Chia+Elite+Chia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#DF871B] bg-[#071324] border border-[#DF871B]/40 px-3 py-1 rounded-full hover:bg-[#DF871B] hover:text-white transition-all flex items-center gap-1"
                    >
                      <span>Ver Mapa</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = ({ onPageChange }: { onPageChange?: (page: string) => void }) => {
  return (
    <footer className="bg-[#071324] text-white py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex items-center gap-6">
            <div className="rounded-3xl flex items-center justify-center overflow-hidden w-16 h-16 shadow-2xl bg-white/5 border border-white/10">
              <img 
                src="https://i.ibb.co/HpR3zgt8/Dise-o-sin-t-tulo.png" 
                alt="ASI Consultores Logo" 
                className="w-full h-full object-cover scale-[1.1]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter leading-none uppercase">ASI</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DF871B] mt-1">Consultores</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Legal</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Navegación</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a 
                    href="#inicio" 
                    onClick={(e) => { e.preventDefault(); onPageChange?.('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicios" 
                    onClick={(e) => { e.preventDefault(); onPageChange?.('home'); setTimeout(() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
                    className="hover:text-white transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a 
                    href="#propiedad-horizontal" 
                    onClick={(e) => { e.preventDefault(); onPageChange?.('propiedad-horizontal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-[#DF871B] transition-colors"
                  >
                    Propiedad Horizontal
                  </a>
                </li>
                <li>
                  <a 
                    href="#nosotros" 
                    onClick={(e) => { e.preventDefault(); onPageChange?.('nosotros'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} ASI Consultores. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/asiconsultores/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#DF871B] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/asi-consultores-ltda-35a786370/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#DF871B] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-6 text-xs text-slate-400">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleContactClick = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] font-sans selection:bg-[#DF871B] selection:text-white overflow-x-hidden">
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero onFirmClick={() => setCurrentPage('nosotros')} />
            <Services />
            <WhyUs />
            <Clients />
            <Contact />
          </motion.div>
        ) : currentPage === 'propiedad-horizontal' ? (
          <PropiedadHorizontal key="propiedad-horizontal" onContactClick={handleContactClick} />
        ) : (
          <WhoWeAre key="nosotros" onContactClick={handleContactClick} />
        )}
      </AnimatePresence>

      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}
