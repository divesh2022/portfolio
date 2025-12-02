import { GoogleGenAI } from "@google/genai";
import { PROFILE, PROJECTS, SKILLS, GOALS } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Initialize client only if key exists to avoid immediate crash on load if missing
// However, the component using this should check for availability.
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Divesh Chauhan's professional portfolio website.
Your goal is to answer visitor questions about Divesh's skills, projects, and experience professionally and accurately.

Context:
Name: ${PROFILE.name}
Role: ${PROFILE.role}
Tagline: ${PROFILE.tagline}
About: ${PROFILE.about}

Skills: ${JSON.stringify(SKILLS.map(s => s.name + " (" + s.category + ")"))}
Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, description: p.description, impact: p.impact })))}
Goals: ${JSON.stringify(GOALS.map(g => g.title))}

Tone: Professional, helpful, concise, and technical where appropriate.
If asked about something not in the context, politely say you only have information about Divesh's professional background.
Keep answers under 3 sentences unless detailed technical explanation is required.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    // Fallback if no API key is present in environment
    return "I'm currently in offline mode because the AI API key is not configured. Please contact Divesh directly via email!";
  }

  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to the AI service.";
  }
};