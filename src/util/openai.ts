import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getOnYourData = async (
  message: string,
  history: { role: string; content: string }[] = []
) => {
  console.log("🚀 ~ On your data start ~ 🚀");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...history.map((msg) => ({
          role: msg.role as "system" | "user" | "assistant",
          content: msg.content,
        })),
        { role: "user", content: message },
      ],
    });
    console.log("🚀 ~ On your data end ~ 🚀");

    return response.choices;
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    throw new Error("Failed to fetch response from OpenAI API");
  }
};
