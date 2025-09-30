"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [payload, setPayload] = useState<ContactPayload>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "err">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPayload((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payload.name || !payload.email || !payload.message) return;
    try {
      setSubmitting(true);
      // Placeholder: integrate API/email service later
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted("ok");
      setPayload({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitted("err");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-600/60";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          key="name"
          className={inputBase}
          type="text"
          name="name"
          placeholder="Your name"
          value={payload.name}
          onChange={handleChange}
          required
        />
        <input
          key="email"
          className={inputBase}
          type="email"
          name="email"
          placeholder="Email address"
          value={payload.email}
          onChange={handleChange}
          required
        />
      </div>
      <input
        key="subject"
        className={inputBase}
        type="text"
        name="subject"
        placeholder="Subject (optional)"
        value={payload.subject}
        onChange={handleChange}
      />
      <textarea
        key="message"
        className={inputBase}
        name="message"
        rows={6}
        placeholder="Write your message..."
        value={payload.message}
        onChange={handleChange}
        required
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white bg-pink-700/90 hover:bg-pink-700 transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send message"}
        </button>
        {submitted === "ok" && (
          <span className="text-sm text-white/80">
            Thanks! We’ll get back to you.
          </span>
        )}
        {submitted === "err" && (
          <span className="text-sm text-red-400">
            Something went wrong. Try again.
          </span>
        )}
      </div>
    </motion.form>
  );
}
