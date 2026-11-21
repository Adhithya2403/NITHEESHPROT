import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Fashion Design & Placement Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    const mailtoUrl = `mailto:${designerInfo.contact.email}?subject=${encodeURIComponent(formData.subject + " - " + formData.name)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Fashion Design & Placement Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-haute text-atelier-olive dark:text-atelier-sand font-medium mb-2 font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Contact & Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-atelier-charcoal dark:text-atelier-ivory font-light tracking-tight">
              Get In <span className="italic font-normal text-atelier-olive dark:text-atelier-sand">Touch</span>
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-atelier-muted max-w-md font-sans font-light">
            Available for apparel development roles, fashion design internships, creative studio collaborations, and placement opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-medium block font-mono">
                Direct Contact
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-atelier-charcoal dark:text-atelier-sand">
                {designerInfo.name}
              </h3>
              <p className="text-sm font-sans font-light text-atelier-charcoal/80 dark:text-atelier-sand/80 leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn for portfolio reviews, garment flat drafting, or design discussions.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {/* Email Card */}
              <a
                href={`mailto:${designerInfo.contact.email}`}
                className="group flex items-center space-x-3 sm:space-x-4 p-3.5 sm:p-4 rounded-xl border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive bg-white/50 dark:bg-atelier-charcoal/30 transition-all min-h-[56px]"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-atelier-sand/50 dark:bg-atelier-obsidian text-atelier-olive dark:text-atelier-sand flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-atelier-muted block font-mono">Direct Email</span>
                  <span className="font-mono text-xs sm:text-sm text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors truncate block">
                    {designerInfo.contact.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-atelier-muted group-hover:text-atelier-charcoal dark:group-hover:text-white transition-colors flex-shrink-0" />
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${designerInfo.contact.phone.replace(/\s+/g, '')}`}
                className="group flex items-center space-x-3 sm:space-x-4 p-3.5 sm:p-4 rounded-xl border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive bg-white/50 dark:bg-atelier-charcoal/30 transition-all min-h-[56px]"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-atelier-sand/50 dark:bg-atelier-obsidian text-atelier-olive dark:text-atelier-sand flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-atelier-muted block font-mono">Direct Phone</span>
                  <span className="font-mono text-xs sm:text-sm text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors truncate block">
                    {designerInfo.contact.phone}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-atelier-muted group-hover:text-atelier-charcoal dark:group-hover:text-white transition-colors flex-shrink-0" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={designerInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 sm:space-x-4 p-3.5 sm:p-4 rounded-xl border border-atelier-stone/30 dark:border-atelier-charcoal hover:border-atelier-olive bg-white/50 dark:bg-atelier-charcoal/30 transition-all min-h-[56px]"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-atelier-sand/50 dark:bg-atelier-obsidian text-atelier-olive dark:text-atelier-sand flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-atelier-muted block font-mono">LinkedIn Network</span>
                  <span className="font-mono text-[11px] sm:text-xs text-atelier-charcoal dark:text-atelier-sand group-hover:text-atelier-olive transition-colors truncate block">
                    linkedin.com/in/nitheesh-s-p-0b81bb2a4
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-atelier-muted group-hover:text-atelier-charcoal dark:group-hover:text-white transition-colors flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7 bg-white/70 dark:bg-atelier-charcoal/40 p-5 sm:p-8 rounded-2xl border border-atelier-stone/30 dark:border-atelier-charcoal/80 shadow-md">
            {submitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center space-y-3 animate-fadeIn">
                <div className="w-10 h-10 rounded-full bg-atelier-olive/20 text-atelier-olive dark:text-atelier-sand flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-atelier-charcoal dark:text-atelier-sand">
                  Message Prepared
                </h4>
                <p className="text-xs text-atelier-muted max-w-sm">
                  Your mail client has been opened. Thank you for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h4 className="font-serif text-xl text-atelier-charcoal dark:text-atelier-sand">
                    Send a Message
                  </h4>
                  <p className="text-xs text-atelier-muted mt-0.5">
                    Please provide your contact details and message overview.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-atelier-muted font-medium font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Design Recruiter / Studio"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-base sm:text-xs focus:outline-none focus:border-atelier-olive transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider text-atelier-muted font-medium font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-base sm:text-xs focus:outline-none focus:border-atelier-olive transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-atelier-muted font-medium font-mono">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-base sm:text-xs focus:outline-none focus:border-atelier-olive transition-colors"
                  >
                    <option value="Fashion Design & Placement Inquiry">Fashion Placement / Full-Time Hiring (2027)</option>
                    <option value="Design Internship Opportunity">Design Internship</option>
                    <option value="Creative Studio Collaboration">Creative Studio Collaboration</option>
                    <option value="General Monograph Inquiry">General Portfolio Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase tracking-wider text-atelier-muted font-medium font-mono">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-base sm:text-xs focus:outline-none focus:border-atelier-olive transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-luxury font-medium hover:bg-atelier-olive dark:hover:bg-white transition-all shadow-md flex items-center justify-center space-x-2 active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
