"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Hi! I'm Gharniyas's AI assistant. Ask me about his skills, projects, or work experience — for anything I can't answer, I'll point you to his contact details.",
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "Something went wrong. Please email gharniyasramesh@gmail.com to reach Gharniyas directly.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong. Please email gharniyasramesh@gmail.com to reach Gharniyas directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex h-[28rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-[#1b2333] bg-[#0a0e16] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#1558C9] to-[#3d7dff] px-4 py-3 text-white">
              <FaRobot className="text-xl" />
              <div className="flex-grow">
                <p className="font-semibold leading-tight">Ask about Gharniyas</p>
                <p className="text-xs text-blue-100">AI portfolio assistant</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 transition-colors hover:bg-white/20"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-grow space-y-3 overflow-y-auto bg-[#030407] px-4 py-4"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-[#1558C9] text-white"
                        : "border border-[#1b2333] bg-[#0a0e16] text-slate-300"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-xl border border-[#1b2333] bg-[#0a0e16] px-3 py-2 text-sm text-slate-400 shadow-sm">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-[#1b2333] bg-[#0a0e16] p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-grow rounded-lg border border-[#1b2333] bg-[#030407] px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-[#1558C9] focus:outline-none focus:ring-2 focus:ring-[#1558C9]/20"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="flex-shrink-0 rounded-lg bg-[#D4FF24] p-2.5 text-[#030407] transition-colors hover:bg-[#c2ec16] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#1558C9] to-[#3d7dff] text-white shadow-lg shadow-[#1558C9]/30"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-xl" />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
