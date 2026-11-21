import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { designerInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    const mailtoUrl = `mailto:${designerInfo.contact.email}?subject=${encodeURIComponent("Portfolio Inquiry - " + formData.name)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 border-t border-atelier-stone/20 dark:border-atelier-charcoal/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-atelier-stone/30 dark:border-atelier-charcoal">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-atelier-olive dark:text-atelier-sand font-mono block mb-1">
              Connect
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-atelier-charcoal dark:text-atelier-ivory font-light">
              Get In Touch
            </h2>
          </div>
          <span className="text-xs font-mono text-atelier-muted">
            Tiruppur, India
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coordinates */}
          <div className="lg:col-span-5 space-y-3">
            <a
              href={`mailto:${designerInfo.contact.email}`}
              className="flex items-center space-x-3 p-3.5 rounded-xl border border-atelier-stone/20 dark:border-atelier-charcoal bg-white/50 dark:bg-atelier-charcoal/30 hover:border-atelier-olive transition-colors"
            >
              <div className="p-2 rounded-lg bg-atelier-sand/40 dark:bg-atelier-obsidian text-atelier-olive dark:text-atelier-sand">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-grow">
                <span className="text-[10px] uppercase text-atelier-muted font-mono block">Email</span>
                <span className="font-mono text-xs sm:text-sm text-atelier-charcoal dark:text-atelier-sand truncate block">
                  {designerInfo.contact.email}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-atelier-muted" />
            </a>

            <a
              href={`tel:${designerInfo.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-3 p-3.5 rounded-xl border border-atelier-stone/20 dark:border-atelier-charcoal bg-white/50 dark:bg-atelier-charcoal/30 hover:border-atelier-olive transition-colors"
            >
              <div className="p-2 rounded-lg bg-atelier-sand/40 dark:bg-atelier-obsidian text-atelier-olive dark:text-atelier-sand">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-grow">
                <span className="text-[10px] uppercase text-atelier-muted font-mono block">Phone</span>
                <span className="font-mono text-xs sm:text-sm text-atelier-charcoal dark:text-atelier-sand truncate block">
                  {designerInfo.contact.phone}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-atelier-muted" />
            </a>

            <a
              href={designerInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3.5 rounded-xl border border-atelier-stone/20 dark:border-atelier-charcoal bg-white/50 dark:bg-atelier-charcoal/30 hover:border-atelier-olive transition-colors"
            >
              <div className="p-2 rounded-lg bg-atelier-sand/40 dark:bg-atelier-obsidian text-atelier-olive dark:text-atelier-sand">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-grow">
                <span className="text-[10px] uppercase text-atelier-muted font-mono block">LinkedIn</span>
                <span className="font-mono text-xs text-atelier-charcoal dark:text-atelier-sand truncate block">
                  nitheesh-s-p
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-atelier-muted" />
            </a>
          </div>

          {/* Minimal Form */}
          <div className="lg:col-span-7 bg-white/70 dark:bg-atelier-charcoal/40 p-5 sm:p-6 rounded-2xl border border-atelier-stone/20 dark:border-atelier-charcoal">
            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 text-atelier-olive mx-auto" />
                <h4 className="font-serif text-lg text-atelier-charcoal dark:text-atelier-sand">
                  Message Prepared
                </h4>
                <p className="text-xs text-atelier-muted">
                  Opening your default mail client...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-atelier-muted font-mono block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-base sm:text-xs focus:outline-none focus:border-atelier-olive"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-atelier-muted font-mono block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email"
                      className="w-full px-3 py-2 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-base sm:text-xs focus:outline-none focus:border-atelier-olive"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-atelier-muted font-mono block mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full px-3 py-2 rounded-lg border border-atelier-stone/30 dark:border-atelier-charcoal bg-atelier-ivory dark:bg-atelier-obsidian text-atelier-charcoal dark:text-atelier-sand text-base sm:text-xs focus:outline-none focus:border-atelier-olive"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-atelier-charcoal text-white dark:bg-atelier-sand dark:text-atelier-charcoal text-xs uppercase tracking-wider font-medium hover:bg-atelier-olive transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
