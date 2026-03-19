/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Eye
} from 'lucide-react';

const COLORS = {
  primary: '#0a2540', // Deep Blue
  secondary: '#c5a059', // Gold/Brass
  accent: '#f8f9fa', // Light Gray
  text: '#333333',
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
      <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
        {/* Background with Atmospheric Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Office Background" 
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(197,160,89,0.1),transparent_60%)]" />
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
                <Users className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.3em]">Nuestra Identidad</span>
              </motion.div>
              
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter"
              >
                ¿Quiénes <br />
                <span className="italic font-serif text-[#c5a059]">somos?</span>
              </motion.h2>

              <motion.h3 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-2xl md:text-3xl font-medium text-white/90 leading-tight tracking-tight text-balance"
              >
                Una firma dedicada a la <span className="text-[#c5a059]">consultoría jurídica</span> estratégica con visión global.
              </motion.h3>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-lg text-gray-400 leading-relaxed font-light text-balance"
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
                  className="bg-[#c5a059] text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-[#d5b069] hover:scale-[1.02] active:scale-[0.98]"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
      <div className="bg-[#050505] py-32 relative overflow-hidden">
        {/* Enhanced Background Glow */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#c5a059]/20 rounded-full blur-[180px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="bg-[#111111] p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-8 transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#c5a059]/30 flex items-center justify-center shadow-inner group-hover:border-[#c5a059] transition-colors duration-500">
                  <Target className="w-8 h-8 text-[#c5a059]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif italic text-[#c5a059] tracking-tight">Misión</h3>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light tracking-wide group-hover:text-white transition-colors duration-500">
                "Brindar asesoría legal integral y personalizada, destacando por nuestra excelencia profesional y compromiso con la justicia, para resolver eficazmente los desafíos legales de nuestros clientes"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="bg-[#111111] p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-8 transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#c5a059]/30 flex items-center justify-center shadow-inner group-hover:border-[#c5a059] transition-colors duration-500">
                  <Eye className="w-8 h-8 text-[#c5a059]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif italic text-[#c5a059] tracking-tight">Visión</h3>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light tracking-wide group-hover:text-white transition-colors duration-500">
                "Ser reconocidos como líderes en consultoría jurídica, destacando por nuestra ética, innovación y capacidad para anticipar y abordar las necesidades legales emergentes, contribuyendo así al éxito y bienestar de nuestros clientes en un entorno legal dinámico"
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-[#f5f5f7] py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="text-sm font-semibold text-[#c5a059] uppercase tracking-[0.2em] mb-6 block">Nuestros Valores</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] leading-[1.1] tracking-tight text-balance">
                Estos principios son la base de nuestra identidad y compromiso con la excelencia.
              </h2>
            </motion.div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Excelencia Profesional",
                    text: "Calidad superior basada en conocimiento actualizado y experiencia especializada.",
                    icon: <CheckCircle2 className="w-6 h-6 text-[#c5a059]" />
                  },
                  {
                    title: "Integridad y Ética",
                    text: "Honestidad, transparencia y respeto en todas nuestras interacciones profesionales.",
                    icon: <Shield className="w-6 h-6 text-[#c5a059]" />
                  },
                  {
                    title: "Compromiso",
                    text: "Priorizamos sus objetivos, ofreciendo soluciones eficientes y personalizadas.",
                    icon: <Handshake className="w-6 h-6 text-[#c5a059]" />
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
                      boxShadow: "0 40px 80px -15px rgba(0, 0, 0, 0.1)"
                    }}
                    className="p-10 rounded-[3rem] bg-gradient-to-br from-white via-[#fdfbf7] to-[#f5f2ed] border border-[#c5a059]/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-gold group-hover:scale-110">
                        {React.cloneElement(val.icon as React.ReactElement<any>, { className: "w-7 h-7 transition-colors duration-500" })}
                      </div>
                      <h4 className="text-xl font-black text-[#1d1d1f] mb-4 tracking-tight group-hover:text-[#c5a059] transition-colors duration-500">{val.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-500">{val.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: "Innovación",
                    text: "Buscamos constantemente nuevas perspectivas para abordar desafíos legales complejos.",
                    icon: <Briefcase className="w-6 h-6 text-[#c5a059]" />
                  },
                  {
                    title: "Responsabilidad Social",
                    text: "Contribuimos a la comunidad promoviendo la justicia y apoyando causas sociales.",
                    icon: <Heart className="w-6 h-6 text-[#c5a059]" />
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
                      boxShadow: "0 40px 80px -15px rgba(0, 0, 0, 0.1)"
                    }}
                    className="p-10 rounded-[3rem] bg-gradient-to-br from-white via-[#fdfbf7] to-[#f5f2ed] border border-[#c5a059]/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-gold group-hover:scale-110">
                        {React.cloneElement(val.icon as React.ReactElement<any>, { className: "w-7 h-7 transition-colors duration-500" })}
                      </div>
                      <h4 className="text-xl font-black text-[#1d1d1f] mb-4 tracking-tight group-hover:text-[#c5a059] transition-colors duration-500">{val.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-500">{val.text}</p>
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
    if (page === 'nosotros') {
      onPageChange('nosotros');
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`flex justify-between h-14 items-center px-6 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-sm border border-black/5' : 'bg-transparent'}`}>
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md transition-transform group-hover:scale-110 border border-black/5">
              <img 
                src="https://i.ibb.co/HpR3zgt8/Dise-o-sin-t-tulo.png" 
                alt="ASI Consultores Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tighter leading-none uppercase ${scrolled ? 'text-black' : 'text-white'}`}>ASI</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a059]">Consultores</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Inicio', 'Servicios', 'Nosotros'].map((item) => {
              const page = item.toLowerCase() === 'nosotros' ? 'nosotros' : 'home';
              const sectionId = item.toLowerCase() === 'servicios' ? 'servicios' : undefined;
              const isActive = (item.toLowerCase() === 'nosotros' && currentPage === 'nosotros') || 
                               (item.toLowerCase() === 'inicio' && currentPage === 'home');
              
              return (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleNavClick(e, page, sectionId)}
                  className={`text-sm font-medium transition-all hover:opacity-100 ${isActive ? (scrolled ? 'text-black' : 'text-white') : (scrolled ? 'text-black/50 hover:text-black' : 'text-white/50 hover:text-white')}`}
                >
                  {item}
                </a>
              );
            })}
            <a 
              href="#contacto" 
              onClick={(e) => handleNavClick(e, 'home', 'contacto')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${scrolled ? 'bg-black text-white hover:bg-black/80' : 'bg-white text-black hover:bg-white/90'}`}
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-black' : 'text-white'}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/5 p-8 space-y-6 shadow-2xl md:hidden"
          >
            <a href="#inicio" onClick={(e) => handleNavClick(e, 'home')} className="block text-2xl font-semibold text-black">Inicio</a>
            <a href="#servicios" onClick={(e) => handleNavClick(e, 'home', 'servicios')} className="block text-2xl font-semibold text-black">Servicios</a>
            <a href="#nosotros" onClick={(e) => handleNavClick(e, 'nosotros')} className="block text-2xl font-semibold text-black">Nosotros</a>
            <a href="#contacto" onClick={(e) => handleNavClick(e, 'home', 'contacto')} className="block bg-black text-white px-6 py-4 rounded-2xl font-semibold text-center text-lg">
              Contacto
            </a>
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
        className="absolute inset-0 bg-[#c5a059]/5 rounded-full blur-[100px]" 
      />
      
      <motion.div 
        initial={{ 
          backgroundColor: 'rgba(255, 255, 255, 0)', 
          borderColor: 'rgba(255, 255, 255, 0)',
          backdropFilter: 'blur(0px)',
          scale: 0.95
        }}
        animate={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          borderColor: 'rgba(197, 160, 89, 0.4)',
          backdropFilter: 'blur(20px)',
          scale: 1
        }}
        transition={{ duration: 4, ease: [0.2, 0, 0, 1] }}
        className="relative z-10 w-full max-w-md h-[320px] rounded-[3rem] border-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6),0_0_60px_rgba(197,160,89,0.2)] overflow-hidden group"
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
              className="text-[#c5a059] text-3xl font-black mb-6 tracking-tighter"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#c5a059] hover:text-[#0a2540]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#c5a059] hover:text-[#0a2540]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {phrases.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-[#c5a059]' : 'w-2 bg-white/20'}`}
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
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Background with Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000" 
          alt="Law Office" 
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.1),transparent_70%)]" />
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]"></span>
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
            <span className="bg-gradient-to-b from-[#c5a059] to-[#e5c079] bg-clip-text text-transparent">Consultoría</span> <br />
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
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light text-balance"
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
              className="relative overflow-hidden bg-white text-black px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-white/10 group min-w-[280px]"
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
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
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
                className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full"
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
                className="relative group bg-gradient-to-br from-white via-[#fdfbf7] to-[#f5f2ed] p-10 rounded-[3rem] border-2 border-[#c5a059]/30 hover:border-[#c5a059] transition-all duration-500 group cursor-default shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3),0_0_80px_rgba(197,160,89,0.2)] hover:shadow-[0_80px_160px_-15px_rgba(0,0,0,0.5),0_0_120px_rgba(197,160,89,0.5)] overflow-hidden"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[8px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-50 group-hover:opacity-100 group-hover:h-[12px] transition-all duration-500" />
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,89,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <span className="text-[#c5a059] font-mono text-xs mb-6 block font-black tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-opacity">{item.id}</span>
                  <h3 className="text-[#0a2540] font-black text-2xl mb-4 group-hover:text-[#c5a059] transition-colors duration-500 tracking-tighter leading-tight">{item.title}</h3>
                  <p className="text-[#0a2540]/70 text-sm leading-relaxed font-medium group-hover:text-[#0a2540] transition-colors duration-500">{item.desc}</p>
                </div>
                
                {/* Decorative Bottom Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#c5a059]/5 rounded-full blur-3xl -mr-16 -mb-16 group-hover:bg-[#c5a059]/20 transition-all duration-700" />
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
    <section id="servicios" className="py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-[#c5a059] uppercase tracking-[0.2em] mb-4 block"
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
              className="group relative bg-gradient-to-br from-white via-[#fdfbf7] to-[#f5f2ed] p-12 rounded-[3.5rem] border-2 border-[#c5a059]/20 hover:border-[#c5a059] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_100px_200px_-20px_rgba(0,0,0,0.6),0_0_100px_rgba(197,160,89,0.4)] transition-all duration-500 flex flex-col items-start text-left h-full overflow-hidden"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-40 group-hover:opacity-100 group-hover:h-[15px] transition-all duration-500" />
              
              {/* Inner Luminous Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,89,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 w-full">
                <div className="mb-10 w-20 h-20 rounded-[2rem] bg-[#0a2540]/5 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg] group-hover:scale-110 shadow-inner">
                  {service.icon}
                </div>
                
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a059] opacity-60">{service.subtitle}</span>
                  <h3 className="text-3xl font-black text-[#0a2540] tracking-tighter leading-[1.1] group-hover:text-[#c5a059] transition-colors duration-500">
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
                      className="flex items-start gap-4 text-[#0a2540]/70 group-hover:text-[#0a2540] transition-colors duration-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                      <span className="text-sm font-medium leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c5a059]/5 rounded-full blur-3xl group-hover:bg-[#c5a059]/15 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="nosotros" className="py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c5a059]/5 rounded-full blur-3xl" />
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                alt="Team" 
                className="w-full h-full object-cover"
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
              className="absolute -bottom-8 -right-8 glass p-8 md:p-10 rounded-[3rem] border border-white/20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] hidden sm:block z-20"
            >
              <p className="text-5xl font-bold text-[#1d1d1f] mb-1 tracking-tighter">+15</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a059]">Años de Experiencia</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2"
          >
            <span className="text-sm font-semibold text-[#c5a059] uppercase tracking-[0.2em] mb-6 block">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-8 leading-[1.1] tracking-tight text-balance">
              Un equipo comprometido con la <span className="italic font-serif text-[#c5a059]">justicia</span> y la ética profesional
            </h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light text-balance">
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
                  <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center group-hover:bg-[#c5a059]/10 transition-colors">
                    <CheckCircle2 className="text-[#c5a059] w-5 h-5" />
                  </div>
                  <span className="text-[#1d1d1f] font-medium text-sm">{item}</span>
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
    <section className="py-32 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6"
        >
          Respaldo legal para los líderes de Colombia.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#86868b] max-w-2xl mx-auto"
        >
          Acompañamos a las empresas más emblemáticas del país en sus desafíos legales más complejos, asegurando su crecimiento y cumplimiento en el mercado nacional.
        </motion.p>
      </div>
      
      <div className="relative">
        {/* Apple-style Gradient Masks for extreme smoothness */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#f5f5f7] via-[#f5f5f7]/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#f5f5f7] via-[#f5f5f7]/80 to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap items-center py-6 w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              {logos.map((logo, index) => (
                <motion.div 
                  key={`${i}-${index}`} 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="flex items-center justify-center w-72 h-44 bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 transition-all duration-500 cursor-default group overflow-hidden"
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
                        span.className = "text-xl font-semibold tracking-tight text-[#1d1d1f]/30 uppercase";
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
  const whatsappMessage = encodeURIComponent("Hola ASI Consultores, vengo de su página web y quisiera recibir asesoría legal.");
  
  const contacts = [
    { 
      type: 'whatsapp',
      name: 'Línea Directa 1',
      number: '+57 320 946 1837',
      link: `https://wa.me/573209461837?text=${whatsappMessage}`
    },
    { 
      type: 'whatsapp',
      name: 'Línea Directa 2',
      number: '+57 302 789 2614',
      link: `https://wa.me/573027892614?text=${whatsappMessage}`
    }
  ];

  const emails = [
    'albertomurcia@asiabogados.com',
    'info@asiabogados.com',
    'direccion@asiabogados.com'
  ];

  return (
    <section id="contacto" className="py-32 bg-[#1d1d1f] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold text-[#c5a059] uppercase tracking-[0.2em] mb-6 block">Contacto Inmediato</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-[1.1] text-balance">
              Hable con un <br />
              <span className="text-[#c5a059]">abogado ahora.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed text-balance">
              Elija su canal preferido. Estamos listos para atender su consulta con la urgencia y profesionalismo que su caso requiere.
            </p>
            
            <div className="space-y-6">
              {contacts.map((contact, i) => (
                <motion.a 
                  key={i}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1 font-bold truncate">{contact.name}</p>
                    <p className="text-lg md:text-xl font-medium tracking-tight group-hover:text-[#25D366] transition-colors whitespace-nowrap">
                      WhatsApp {contact.number}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#25D366]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 tracking-tight">Canales de Correo</h3>
                <div className="space-y-4">
                  {emails.map((email, i) => (
                    <motion.a
                      key={i}
                      href={`mailto:${email}`}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors break-all">{email}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <div className="flex items-start gap-4 text-gray-300">
                  <MapPin className="w-6 h-6 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-[#c5a059] uppercase tracking-wider mb-1">Nuestras Oficinas</p>
                    <p className="text-lg leading-snug">
                      Edificio Offices Center Chia Elite <br />
                      Cl. 11 #6A-56 oficina 609 <br />
                      Chía, Cundinamarca
                    </p>
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 group">
                  <img 
                    src="https://i.ibb.co/JWD5hCRp/1644018208-whatsapp-image-2022-01-29-at-2-50-34-pm.jpg" 
                    alt="Edificio Offices Center Chia Elite" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      Sede Principal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/5">
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c5a059] mt-1">Consultores</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Legal</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Navegación</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-medium">
            © {new Date().getFullYear()} ASI Consultores. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer">LinkedIn</span>
            <span className="hover:text-gray-400 cursor-pointer">Instagram</span>
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
    <div className="min-h-screen bg-white font-sans selection:bg-[#c5a059] selection:text-white overflow-x-hidden">
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
        ) : (
          <WhoWeAre key="nosotros" onContactClick={handleContactClick} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
