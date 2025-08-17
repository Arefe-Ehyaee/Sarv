import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import joyModern from "./joy-modern.svg";
import ModalTemplate from "./ModalTemplate";
import PracticeModal from "./PracticeModal";
import EducationModal from "./EducationModal";
import practice from "../assets/icons/Clipboard2.svg";
import reading from "../assets/icons/reading.svg";
import bell from "../assets/icons/Bell.svg";
import routing from "../assets/icons/Routing 2.svg";
import wavePattern from "../assets/icons/Ornament 17.svg";
import Card from "./HeroCardAddction";
import umbrella from "../assets/icons/Umbrella.svg";
import love from "../assets/icons/Hearts.svg";
import starShine from "../assets/icons/Star Shine.svg";
import test from "../assets/icons/Document Add.svg";
import box from "../assets/icons/Box Minimalistic.svg";
import CureRoutingModal from "./CureRoutingModal";
import ToolsModal from "./ToolsModal";

// Initial chatbot welcome message
const welcomeMessage = {
  role: "assistant",
  content: "سلام، چطور میتونم کمکتون کنم؟",
  timestamp: Date.now(),
};

// Card data arrays
const Maincards = [
  { icon: practice, title: "تمرین‌های من", iconBgColor: "#B5EBEA", bgColor: "#FFFFFF" },
  { icon: bell, title: "اعلان‌های من", iconBgColor: "#B5EBEA", bgColor: "#FFFFFF" },
  { icon: routing, title: "مسیر درمان", iconBgColor: "#B5EBEA", bgColor: "#FFFFFF" },
];

const cards = [
  { icon: test, title: "ارزیابی‌ها", iconBgColor: "#FFDAB9", bgColor: "#FFFFFF" },
  { icon: box, title: "جعبه ابزار فوری", iconBgColor: "#FFDAB9", bgColor: "#FFFFFF" },
  { icon: reading, title: "محتوای آموزشی", iconBgColor: "#FFDAB9", bgColor: "#FFFFFF" },
  { icon: love, title: "همراهان مراجع", iconBgColor: "#E0BBE4", bgColor: "#FFFFFF" },
  { icon: starShine, title: "یادآور انگیزشی", iconBgColor: "#E0BBE4", bgColor: "#FFFFFF" },
  { icon: umbrella, title: "گروه‌های خودیاری", iconBgColor: "#E0BBE4", bgColor: "#FFFFFF" },
];

export default function HeroSection() {
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9));
  const [activeModal, setActiveModal] = useState<string | null>(null); // 🔑 state for modals
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

    // Simulated AI response
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: "ممنون که به اشتراک گذاشتید. می‌خواید تمرین‌هایی برای شما ارائه کنم؟",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 🔑 Centralized modal rendering function
  const renderModal = () => {
    switch (activeModal) {
      case "تمرین‌های من":
        return (
          <ModalTemplate
            showModal={true}
            onClose={() => setActiveModal(null)}
            mainComponent={
              <PracticeModal
                onClick={() => setActiveModal(null)}
              />
            }
          />
        );
      case "محتوای آموزشی":
        return (
          <ModalTemplate
            showModal={true}
            onClose={() => setActiveModal(null)}
            mainComponent={
              <EducationModal
                onClick={() => setActiveModal(null)}
              />
            }
          />
        );
      case "مسیر درمان":
        return (
          <ModalTemplate
            showModal={true}
            onClose={() => setActiveModal(null)}
            mainComponent={
              <CureRoutingModal
                onClick={() => setActiveModal(null)} completedSessions={[1, 2]} />
            }
          />
        );

      case "جعبه ابزار فوری":
        return (
          <ModalTemplate
            showModal={true}
            onClose={() => setActiveModal(null)}
            mainComponent={
              <ToolsModal
                onClick={() => setActiveModal(null)} />
            }
          />
        );


      // 👉 Add more cases for other cards if needed
      default:
        return null;
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
          {/* Chat Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none lg:mx-0 h-[600px]"
          >
            <div className="h-full flex flex-col shadow-2xl border border-gray-300 bg-white rounded-2xl">
              <div className="flex items-center p-4 border-b bg-gradient-to-l from-[#0ea5a2] to-[#def6ec] text-white rounded-t-2xl">
                <Bot className="w-6 h-6 mr-2" />
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
                <div className="flex gap-2">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="پیام خود را اینجا بنویسید..."
                    className="flex-1 rounded-md border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-myYekanRegular"
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

          {/* Cards Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-right"
          >
            <div className="flex flex-row gap-4 justify-center lg:justify-start mb-6">
              <img src={joyModern} alt="" className="w-20 h-20" />
              <h1 className="text-right text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-myYekanMedium">
                جوی
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent font-myPeydaSemibold text-lg ld:text-2xl">
                  جریان تازه‌ی زندگی
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-myYekanRegular">
              با گفت‌وگوی حمایتی، آزمون‌های کوتاه و برنامهٔ شخصی، قدم‌به‌قدم تا زندگیِ تازه همراهتانیم.
            </p>

            {/* Main Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 px-6 md:px-2">
              {Maincards.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  iconBgColor={card.iconBgColor}
                  bgColor={card.bgColor}
                  width="w-full"
                  height="h-20"
                  wavePattern={wavePattern}
                  onClick={() => setActiveModal(card.title)} // 🔑
                />
              ))}
            </div>

            {/* Additional Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 px-6 md:px-2">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  iconBgColor={card.iconBgColor}
                  bgColor={card.bgColor}
                  width="w-full"
                  height="h-20"
                  wavePattern={wavePattern}
                  onClick={() => setActiveModal(card.title)} // 🔑
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Render modal */}
      {renderModal()}
    </section>
  );
}
