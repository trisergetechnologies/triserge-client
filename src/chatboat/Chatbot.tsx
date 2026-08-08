"use client";

import { useEffect, useRef, useState } from "react";
import { Send, X, MessageCircle, User, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  message: string;
}

const API_URL = "https://triserge-backend.onrender.com";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState<
    "none" | "name" | "email" | "mobile" | "query"
  >("none");

  const [lead, setLead] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      message: "Hi 👋 How can I help you today?",
    },
  ]);

  const messagesRef = useRef<HTMLDivElement | null>(null);

  const [sessionId] = useState(() => {
    if (typeof window === "undefined") return "";

    let id = localStorage.getItem("chat_session_id");

    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("chat_session_id", id);
    }

    return id;
  });

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const bot = (text: string) =>
    setMessages((p) => [...p, { role: "assistant", message: text }]);

  // ===============================
  // START LEAD FLOW
  // ===============================
  const startLead = () => {
    setStep("name");
    bot("👤 What is your name?");
  };

  // ===============================
  // HANDLE LEAD STEPS
  // ===============================
  const handleLead = async (value: string) => {
    if (step === "name") {
      setLead({ ...lead, name: value });
      setStep("email");
      bot("📧 What's your email?");
      return;
    }

    if (step === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        bot("❌ Please enter a valid email.");
        return;
      }

      setLead({ ...lead, email: value });
      setStep("mobile");
      bot("📱 Your mobile number?");
      return;
    }

    if (step === "mobile") {
      const mobile = value.replace(/\D/g, "");
      if (mobile.length !== 10) {
        bot("❌ Enter a valid 10-digit number.");
        return;
      }

      setLead({ ...lead, mobile });
      setStep("query");
      bot("💼 Tell me your requirement.");
      return;
    }

    if (step === "query") {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/api/chat/lead`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            ...lead,
            query: value,
          }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        bot("🎉 Done! Our team will contact you soon.");
        setStep("none");
        setLead({ name: "", email: "", mobile: "" });
      } catch (err) {
        bot("❌ Something went wrong.");
      } finally {
        setLoading(false);
      }
    }
  };

  // ===============================
  // SEND MESSAGE
  // ===============================
  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const text = message.trim();
    setMessage("");

    setMessages((p) => [...p, { role: "user", message: text }]);

    if (step !== "none") {
      await handleLead(text);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/chat/msg`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: text }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      bot(data.answer || "No response.");
    } catch {
      bot("❌ Error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // ENTER KEY SUPPORT
  // ===============================
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl hover:bg-teal-600 md:bottom-6 md:right-6"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-20 right-3 z-50 flex h-[550px] w-[95%] max-w-[380px] flex-col overflow-hidden rounded-3xl border bg-white shadow-2xl md:bottom-6 md:right-6">
          
          {/* HEADER */}
          <div className="flex items-center justify-between bg-teal-500 px-4 py-3 text-white">
            <div>
              <h3 className="text-sm font-semibold">
                Triserge Assistant
              </h3>
              <p className="text-xs opacity-80">
                Online • instant reply
              </p>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* MESSAGES */}
          <div
            ref={messagesRef}
            className="flex-1 space-y-3 overflow-y-auto bg-teal-50 p-3"
          >
            {messages.map((item, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {/* BOT ICON */}
                {item.role === "assistant" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
                    <Bot size={16} />
                  </div>
                )}

                {/* MESSAGE */}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                    item.role === "user"
                      ? "bg-teal-500 text-white"
                      : "bg-white text-gray-800 shadow"
                  }`}
                >
                  {item.message}
                </div>

                {/* USER ICON */}
                {item.role === "user" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                    <User size={16} className="text-gray-700" />
                  </div>
                )}
              </div>
            ))}

            {/* TYPING ANIMATION */}
            {loading && (
              <div className="flex items-center gap-1 px-2">
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.2s]"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.4s]"></span>
              </div>
            )}
          </div>

          {/* QUICK ACTION */}
          {step === "none" && (
            <button
              onClick={startLead}
              className="mx-3 mb-2 rounded-xl bg-teal-100 py-2 text-sm text-teal-700 hover:bg-teal-200"
            >
              💼 Business Help
            </button>
          )}

          {/* INPUT */}
          <div className="border-t p-2">
            <div className="flex items-center gap-2 rounded-xl border px-2 py-1">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Type message..."
                className="flex-1 resize-none text-sm outline-none"
              />

              <button
                onClick={sendMessage}
                className="rounded-lg bg-teal-500 p-2 text-white hover:bg-teal-600"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}