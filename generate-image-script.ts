import { GoogleGenAI } from "@google/genai";

async function generateProfileImage(base64Image: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64Image,
            mimeType: "image/jpeg",
          },
        },
        {
          text: "Create a professional headshot of the man in this image. Crop it to a square focusing on his head and shoulders. Remove the podium and microphone. Place him against a clean, professional dark gray studio background with subtle lighting. Maintain his exact facial features and expression. The final image should be high-resolution and suitable for a premium executive portfolio.",
        },
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return part.inlineData.data;
    }
  }
  return null;
}
