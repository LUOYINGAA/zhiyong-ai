'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { name: 'Getting Started', nameCn: '入门指南', icon: '🚀' },
    { name: 'Account & Billing', nameCn: '账户与账单', icon: '💳' },
    { name: 'Tools & Features', nameCn: '工具与功能', icon: '🛠️' },
    { name: 'Privacy & Security', nameCn: '隐私与安全', icon: '🔒' },
    { name: 'Business & Enterprise', nameCn: '商务合作', icon: '🏢' },
  ];

  const faqs = [
    {
      category: 'Getting Started',
      categoryCn: '入门指南',
      questions: [
        {
          q: 'How do I create a ZhiYong AI account?',
          qCn: '如何创建智涌AI账户？',
          a: 'Click the "Sign Up" button on our homepage, enter your email and password, and verify your email address. You can also sign up with Google or GitHub for faster access.',
        },
        {
          q: 'Is ZhiYong AI really free to use?',
          qCn: '智涌AI真的免费使用吗？',
          a: 'Yes! Our Free plan includes access to 5 AI tools with 50 tasks per month. No credit card required. Upgrade to Pro for unlimited access and advanced features.',
        },
        {
          q: 'What AI tools are available?',
          qCn: '有哪些AI工具可用？',
          a: 'We offer 100+ AI tools across categories including Writing, Design, Development, Business, and more. New tools are added weekly.',
        },
        {
          q: 'Do I need coding skills to use ZhiYong AI?',
          qCn: '使用智涌AI需要编程技能吗？',
          a: 'Not at all! Our tools are designed for everyone — from beginners to experts. No technical skills required. Just select a tool and start creating.',
        },
      ],
    },
    {
      category: 'Account & Billing',
      categoryCn: '账户与账单',
      questions: [
        {
          q: 'How do I upgrade to Pro?',
          qCn: '如何升级到Pro版本？',
          a: 'Go to Settings > Subscription, choose the Pro plan, enter your payment details, and you\'re all set. Your upgrade takes effect immediately.',
        },
        {
          q: 'Can I cancel my subscription anytime?',
          qCn: '我可以随时取消订阅吗？',
          a: 'Yes, cancel anytime with no fees. Your access continues until the end of your billing period. No questions asked.',
        },
        {
          q: 'What payment methods do you accept?',
          qCn: '你们接受哪些付款方式？',
          a: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Alipay for users in China.',
        },
        {
          q: 'Is there a refund policy?',
          qCn: '有退款政策吗？',
          a: 'We offer a 7-day money-back guarantee for new Pro subscribers. Contact support within 7 days of purchase for a full refund.',
        },
      ],
    },
    {
      category: 'Tools & Features',
      categoryCn: '工具与功能',
      questions: [
        {
          q: 'Can I use the tools for commercial projects?',
          qCn: '我可以将工具用于商业项目吗？',
          a: 'Yes! Pro and Team subscribers can use all generated content for commercial purposes. Free users have limited commercial usage. Check our Terms of Service for details.',
        },
        {
          q: 'Are the AI-generated outputs unique?',
          qCn: 'AI生成的内容是独特的吗？',
          a: 'Yes! Our AI models generate unique content each time. While we can\'t guarantee complete uniqueness, outputs are typically distinct and not copied from training data.',
        },
        {
          q: 'Can I save and export my work?',
          qCn: '我可以保存和导出我的作品吗？',
          a: 'Absolutely! All your projects are saved to your account dashboard. You can export in multiple formats including PDF, DOCX, PNG, and more depending on the tool.',
        },
        {
          q: 'Is there a limit on how many tasks I can run?',
          qCn: '任务运行次数有限制吗？',
          a: 'Free: 50 tasks/month. Pro: Unlimited tasks. Team: Unlimited + priority processing. Enterprise: Custom limits with SLA guarantee.',
        },
      ],
    },
    {
      category: 'Privacy & Security',
      categoryCn: '隐私与安全',
      questions: [
        {
          q: 'Is my data safe with ZhiYong AI?',
          qCn: '我的数据在智涌AI安全吗？',
          a: 'Absolutely. We use bank-level encryption (AES-256) for all data. Your content is stored securely and never shared with third parties. We\'re GDPR and CCPA compliant.',
        },
        {
          q: 'Who can see my content?',
          qCn: '谁可以看到我的内容？',
          a: 'Only you can see your private content. Team members can see shared projects within your workspace. We never access, use, or sell your content for training or any other purpose.',
        },
        {
          q: 'How do you use my data?',
          qCn: '你们如何使用我的数据？',
          a: 'Your data is used only to provide our services. We don\'t sell it, share it with advertisers, or use it to train our AI models without your explicit consent.',
        },
        {
          q: 'Can I delete my account and data?',
          qCn: '我可以删除我的账户和数据吗？',
          a: 'Yes! You can delete your account and all associated data at any time from Settings > Privacy. Deletion is permanent and irreversible.',
        },
      ],
    },
    {
      category: 'Business & Enterprise',
      categoryCn: '商务合作',
      questions: [
        {
          q: 'Do you offer custom AI solutions for businesses?',
          qCn: '你们为企业提供定制AI解决方案吗？',
          a: 'Yes! Our Enterprise plan includes custom AI models, dedicated support, SLA guarantees, and on-premise deployment options. Contact our sales team for a custom quote.',
        },
        {
          q: 'Can I add team members to my account?',
          qCn: '我可以添加团队成员到我的账户吗？',
          a: 'Pro supports up to 3 shared users. Team plan includes 5 members with admin dashboard and usage analytics. Enterprise offers unlimited members.',
        },
        {
          q: 'Do you offer API access?',
          qCn: '你们提供API访问吗？',
          a: 'Yes! Pro includes 1,000 API calls/month, Team includes 10,000, and Enterprise offers unlimited API access with dedicated endpoints.',
        },
        {
          q: 'What integrations do you support?',
          qCn: '你们支持哪些集成？',
          a: 'We support integrations with Slack, Notion, Google Workspace, Microsoft 365, Zapier, and more. Custom integrations available on Enterprise plans.',
        },
      ],
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about ZhiYong AI. Can&apos;t find the answer? Contact us.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="px-4 -mt-8">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition shadow-lg"
            />
            <svg className="w-6 h-6 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {categories.map((cat, index) => (
                  <a
                    key={index}
                    href={`#${cat.name.toLowerCase().replace(/ & /g, '-')}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-gray-700">{cat.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Questions */}
            <div className="lg:col-span-3 space-y-12">
              {faqs.map((category, catIndex) => (
                <div key={catIndex} id={category.category.toLowerCase().replace(/ & /g, '-')}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    {categories[catIndex]?.icon}
                    {category.category}
                    <span className="text-blue-600 text-lg font-normal">{category.categoryCn}</span>
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, qIndex) => {
                      const globalIndex = catIndex * 100 + qIndex;
                      return (
                        <div key={qIndex} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                          <button
                            onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                          >
                            <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                            <svg
                              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                                openIndex === globalIndex ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {openIndex === globalIndex && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 mb-2">{faq.qCn}</p>
                              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is ready to help you 24/7
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition">
            Contact Support
          </Link>
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