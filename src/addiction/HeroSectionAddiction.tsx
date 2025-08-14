import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, Loader2, Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";
// import { InvokeLLM } from "@/integrations/Core";
// import { ChatMessage } from "@/entities/ChatMessage";
import joyModern from "./joy-modern.svg"

// Initial message from the chatbot
const welcomeMessage = {
  role: "assistant",
  content:
    "Hi there. I'm here to support you on your recovery journey. What's on your mind today?",
  timestamp: Date.now(),
};

export default function HeroSection() {
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9));
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    const newUserMessage = {
      role: "user",
      content: userMessage,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, newUserMessage]);

    // try {
    //   const response = await InvokeLLM({
    //     prompt: `You are a compassionate AI assistant specializing in addiction recovery support. You provide emotional support, practical guidance, and resources for people struggling with addiction. 

    //     IMPORTANT GUIDELINES:
    //     - Always be empathetic, non-judgmental, and supportive
    //     - If someone expresses suicidal thoughts or immediate danger, strongly encourage them to call 988 (Crisis Line) or 911
    //     - Provide practical, evidence-based advice when appropriate
    //     - Encourage professional treatment and support groups
    //     - Never provide medical advice or diagnose conditions
    //     - Keep responses concise but caring (2-3 sentences max)
    //     - Always validate their feelings and acknowledge their courage in seeking help

    //     User message: "${userMessage}"

    //     Respond with compassion and provide helpful guidance.`,
    //   });

    //   const aiResponse =
    //     typeof response === "string"
    //       ? response
    //       : response.content ||
    //         "I'm here to support you. Could you tell me more about what you're going through?";
    //   const newAiMessage = {
    //     role: "assistant",
    //     content: aiResponse,
    //     timestamp: Date.now(),
    //   };
    //   setMessages((prev) => [...prev, newAiMessage]);

    //   await ChatMessage.create({
    //     message: userMessage,
    //     response: aiResponse,
    //     session_id: sessionId,
    //     is_anonymous: true,
    //   });
    // } catch (error) {
    //   console.error("Error getting AI response:", error);
    //   const errorMessage = {
    //     role: "assistant",
    //     content:
    //       "I'm sorry, I'm having trouble connecting right now. Please try again, or consider calling 988 for immediate support.",
    //     timestamp: Date.now(),
    //   };
    //   setMessages((prev) => [...prev, errorMessage]);
    // }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <div className=" justify-center lg:justify-start mb-6">
              {/* <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div> */}
              <img src={joyModern} alt="" className="w-20 h-20" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-myPeydaSemibold">
              جوی
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent font-myPeydaSemibold">
                جریان تازه‌ی زندگی
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-myVazirRegular">
با گفت‌وگوی حمایتی، آزمون‌های کوتاه و برنامهٔ شخصی، قدم‌به‌قدم تا زندگیِ تازه همراهتانیم.
            </p>

            <button
              type="button"
              className="inline-flex items-center px-8 py-4 text-lg rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Treatment Centers
            </button>
          </motion.div>

          {/* Right Side: Chatbot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 h-[600px]"
          >
            <div className="h-full flex flex-col shadow-2xl border border-gray-300 bg-white rounded-2xl">
              <div className="flex items-center p-4 border-b bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-t-2xl">
                <Bot className="w-5 h-5 mr-2" />
                <span className="font-medium">Anonymous Recovery Support</span>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-end space-x-2 ${message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    {message.role === "assistant" && (
                      <Bot className="w-6 h-6 p-1 rounded-full bg-gray-200 text-blue-600 flex-shrink-0" />
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg mr-2 flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 rounded-md border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={1}
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md px-4 py-2 flex items-center justify-center"
                    type="button"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                    ) : (
                      <Send className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Anonymous & Confidential • Not a substitute for professional help
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
