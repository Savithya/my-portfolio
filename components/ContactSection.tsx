"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink,
  Phone,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bots

    if (!validate()) return;

    setStatus("loading");

    setTimeout(() => {
      const mailtoUrl = `mailto:${PERSONAL_INFO.social.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      setStatus("success");
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.social.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050814] dark:bg-[#050814] light:bg-[#FAFAFC] overflow-hidden border-t border-[#1C274C]/60"
    >
      {/* Decorative ambient orbs */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              Open to software development internships, entry-level IT roles, and professional collaborations.
            </p>
          </motion.div>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090E23] dark:bg-[#090E23] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-2xl">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                Feel free to reach out directly via email, phone, or connect with me through professional networks.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 text-violet-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.social.email}`}
                        className="text-xs sm:text-sm font-semibold text-white dark:text-white light:text-slate-900 hover:text-violet-400 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.social.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                    className="p-2 rounded-xl bg-[#141D3F] dark:bg-[#141D3F] light:bg-white text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#1C274C] transition-colors flex-shrink-0"
                  >
                    {copiedEmail ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Contact Number Item */}
                <div className="p-4 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                        Contact Number
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.social.phone.replace(/\s+/g, "")}`}
                        className="text-xs sm:text-sm font-semibold text-white dark:text-white light:text-slate-900 hover:text-blue-400 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.social.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyPhone}
                    title="Copy Contact Number"
                    aria-label="Copy Contact Number"
                    className="p-2 rounded-xl bg-[#141D3F] dark:bg-[#141D3F] light:bg-white text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#1C274C] transition-colors flex-shrink-0"
                  >
                    {copiedPhone ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                      {PERSONAL_INFO.social.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-[#1C274C] dark:border-[#1C274C] light:border-slate-200">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 hover:border-blue-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-100 text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 hover:border-violet-500 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-3xl bg-[#090E23] dark:bg-[#090E23] light:bg-white border border-[#1C274C] dark:border-[#1C274C] light:border-slate-200 shadow-2xl space-y-5"
            >
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                Submit this form to open your default email client with your pre-composed message.
              </p>

              {/* Bot Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) =>
                  setFormData({ ...formData, honeypot: e.target.value })
                }
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Savithya Muthunima"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 focus:border-violet-500 focus:ring-violet-500/30"
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 focus:border-violet-500 focus:ring-violet-500/30"
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                >
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: "" });
                  }}
                  placeholder="Software Development Internship / Project Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.subject
                      ? "border-red-500 focus:ring-red-500/40"
                      : "border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 focus:border-violet-500 focus:ring-violet-500/30"
                  }`}
                />
                {errors.subject && (
                  <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  placeholder="Hello Savithya, I reviewed your developer portfolio and would like to connect regarding an internship opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#0E1530] dark:bg-[#0E1530] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500/40"
                      : "border-[#1C274C] dark:border-[#1C274C] light:border-slate-300 focus:border-violet-500 focus:ring-violet-500/30"
                  }`}
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    Your message client has been launched with your inquiry. Thank you!
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
