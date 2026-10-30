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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

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

    // Standard client mailto generation fallback as requested in specifications
    setTimeout(() => {
      const mailtoUrl = `mailto:${PERSONAL_INFO.social.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      setStatus("success");
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B1120] dark:bg-[#0B1120] light:bg-slate-50 overflow-hidden border-t border-[#1E293B]/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600">
              I&apos;m open to internship opportunities, entry-level IT roles, collaborations, and professional connections.
            </p>
          </motion.div>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                Feel free to reach out directly via email or connect with me on LinkedIn and GitHub.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#1C263B]/60 dark:bg-[#1C263B]/60 light:bg-slate-50 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.social.email}`}
                        className="text-xs sm:text-sm font-semibold text-white dark:text-white light:text-slate-900 hover:text-blue-400 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.social.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    title="Copy Email Address"
                    className="p-2 rounded-lg bg-[#151D2E] dark:bg-[#151D2E] light:bg-white text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-[#293449] dark:border-[#293449] light:border-slate-300 transition-colors flex-shrink-0"
                  >
                    {copied ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-[#1C263B]/60 dark:bg-[#1C263B]/60 light:bg-slate-50 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                      {PERSONAL_INFO.social.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-[#293449] dark:border-[#293449] light:border-slate-200">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3">
                  Social Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-300 hover:border-blue-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-100 text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 border border-[#2B3954] dark:border-[#2B3954] light:border-slate-300 hover:border-blue-500 hover:text-white transition-colors"
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
              className="p-6 sm:p-8 rounded-2xl bg-[#151D2E] dark:bg-[#151D2E] light:bg-white border border-[#293449] dark:border-[#293449] light:border-slate-200 shadow-xl space-y-5"
            >
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                Fill out the form below. Your default email client will launch with your pre-filled inquiry.
              </p>

              {/* Bot Honeypot hidden input */}
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
                    className={`w-full px-4 py-3 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-[#2B3954] dark:border-[#2B3954] light:border-slate-300 focus:border-blue-500 focus:ring-blue-500/30"
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
                    className={`w-full px-4 py-3 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-[#2B3954] dark:border-[#2B3954] light:border-slate-300 focus:border-blue-500 focus:ring-blue-500/30"
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
                  placeholder="Software Development Internship Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.subject
                      ? "border-red-500 focus:ring-red-500/40"
                      : "border-[#2B3954] dark:border-[#2B3954] light:border-slate-300 focus:border-blue-500 focus:ring-blue-500/30"
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
                  placeholder="Hello Savithya, I reviewed your portfolio and would like to discuss..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#1C263B] dark:bg-[#1C263B] light:bg-slate-50 border text-sm text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500/40"
                      : "border-[#2B3954] dark:border-[#2B3954] light:border-slate-300 focus:border-blue-500 focus:ring-blue-500/30"
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
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-purple-500 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    Your email client has opened with this message. Thank you for connecting!
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
