'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: '💬',
      title: 'Live Chat',
      titleCn: '在线聊天',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
    },
    {
      icon: '📧',
      title: 'Email',
      titleCn: '邮件',
      description: 'support@zhiyongai.com',
      availability: 'Response within 24 hours',
    },
    {
      icon: '📚',
      title: 'Help Center',
      titleCn: '帮助中心',
      description: 'Browse FAQs and guides',
      availability: 'Self-service anytime',
    },
    {
      icon: '🐦',
      title: 'Twitter',
      titleCn: '推特',
      description: '@ZhiYongAI',
      availability: 'Follow us for updates',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ZhiYong AI
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/tools" className="text-gray-600 hover:text-blue-600 transition">Tools</Link>
              <Link href="/tutorials" className="text-gray-600 hover:text-blue-600 transition">Tutorials</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">Blog</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                Log In
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-blue-600 text-sm mb-2">{method.titleCn}</p>
                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                <p className="text-gray-400 text-xs">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name / 你的名字
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address / 邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject / 主题
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry / 一般咨询</option>
                  <option value="support">Technical Support / 技术支持</option>
                  <option value="billing">Billing & Subscription / 账单和订阅</option>
                  <option value="partnership">Partnership / 商务合作</option>
                  <option value="feedback">Feedback & Suggestions / 反馈建议</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message / 消息内容
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I get started with ZhiYong AI?',
                a: 'Simply sign up for a free account, browse our tool library, and start using AI tools right away. No credit card required.',
              },
              {
                q: 'Can I request a specific AI tool?',
                a: 'Absolutely! We\'re always adding new tools. Use the contact form to submit your request, and our team will evaluate it.',
              },
              {
                q: 'Do you offer custom enterprise solutions?',
                a: 'Yes! Contact our sales team for custom pricing, dedicated support, and tailored AI solutions for your organization.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2026 ZhiYong AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}