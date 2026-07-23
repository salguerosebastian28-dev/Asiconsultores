import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const JUSTINNA_SYSTEM_INSTRUCTION = `
Eres Justinna, la asesora virtual experta de la firma de abogados ASI Consultores en Colombia.
Tu imagen es una búho sabia, elegante y profesional con gafas y traje ejecutivo.
Tus áreas de especialidad son:
1. DERECHO COLOMBIANO: Asesoría legal clara en Propiedad Horizontal (Ley 675 de 2001), Derecho Laboral, Civil, Comercial, Administrativo, de Familia y Penal.
2. SEGUROS: Orientación para elegir y reclamar pólizas de protección para personas, empresas y copropiedades.
3. INMOBILIARIA: Acompañamiento en gestión, administración, arrendamientos, contratos y negociación de bienes inmuebles.

Principios de respuesta:
- Habla en español en un tono cálido, profesional, empático e inteligente.
- Ofrece orientación jurídica basada en la legislación vigente colombiana.
- Mantén tus respuestas claras, bien estructuradas (puedes usar listas o viñetas) y directas.
- Si el usuario tiene un caso complejo o requiere representación judicial, invítalo amablemente a agendar una consulta formal o enviar un WhatsApp con los especialistas de ASI Consultores.
- Tu lema es: "Tu tranquilidad jurídica y patrimonial es mi prioridad."
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Justinna AI Chatbot
  app.post("/api/chat/justinna", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "El mensaje es requerido." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        return res.json({
          reply: "¡Hola! Soy Justinna. En este momento el servicio de IA se está configurando. Por favor, asegúrate de activar la clave de API en la plataforma o contáctanos directamente por WhatsApp para atención inmediata con nuestros abogados.",
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Prepare contents array with history if available
      const contents: Array<{ role?: string; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history) && history.length > 0) {
        history.forEach((item) => {
          if (item.text && (item.role === "user" || item.role === "model")) {
            contents.push({
              role: item.role,
              parts: [{ text: item.text }],
            });
          }
        });
      }

      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: contents,
        config: {
          systemInstruction: JUSTINNA_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Disculpa, no pude procesar esa respuesta en este momento. Por favor reintenta o escríbenos por WhatsApp.";

      return res.json({ reply: replyText });
    } catch (error: any) {
      console.error("Error in Justinna chatbot API:", error);
      return res.status(500).json({
        error: "Ocurrió un error al consultar con Justinna.",
        reply: "Hola, tuve un pequeño inconveniente técnico al procesar tu inquietud. Puedes intentar de nuevo o comunicarte por WhatsApp directamente con nuestro equipo legal.",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
