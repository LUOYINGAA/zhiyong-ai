import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - ZhiYong AI',
  description: 'Learn about ZhiYong AI - our mission, team, and vision for making AI accessible to everyone.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Former AI researcher at Stanford, passionate about democratizing AI tools.',
      emoji: '👨‍💼',
    },
    {
      name: 'Sarah Liu',
      role: 'CTO',
      bio: 'Full-stack architect with 10+ years experience in scalable web systems.',
      emoji: '👩‍💻',
    },
    {
      name: 'Mike Zhang',
      role: 'Head of Product',
      bio: 'Product veteran who has shipped tools used by millions worldwide.',
      emoji: '👨‍🎨',
    },
    {
      name: 'Emma Wang',
      role: 'AI Lead',
      bio: 'Machine learning expert specializing in NLP and generative models.',
      emoji: '👩‍🔬',
    },
  ];

  const milestones = [
    { year: '2025', event: 'ZhiYong AI founded with a vision to democratize AI' },
    { year: '2026 Q1', event: 'Launched beta with 10 AI tools and 1,000 early users' },
    { year: '2026 Q2', event: 'Reached 10,000 users and launched Pro subscription' },
    { year: '2026 Q3', event: '100+ AI tools and 50,000+ active users' },
    { year: '2026 Q4', event: 'Global expansion and enterprise platform launch' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'User-First',
      titleCn: '用户至上',
      description: 'Every feature we build starts with understanding our users\' real needs.',
    },
    {
      icon: '🔒',
      title: 'Privacy & Security',
      titleCn: '隐私安全',
      description: 'Your data is encrypted and never shared. We believe in complete transparency.',
    },
    {
      icon: '⚡',
      title: 'Always Innovating',
      titleCn: '持续创新',
      description: 'We ship new AI capabilities weekly, always staying ahead of the curve.',
    },
    {
      icon: '🌍',
      title: 'Global & Inclusive',
      titleCn: '全球包容',
      description: 'AI should be accessible to everyone, everywhere, regardless of background.',
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
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Making AI Accessible<br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              to Everyone
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ZhiYong AI was founded with a simple mission: bring the power of artificial intelligence to everyday people — not just tech experts.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe AI should be a tool for everyone. Whether you&apos;re a student, a small business owner, a content creator, or just curious — you deserve access to powerful AI tools without needing a computer science degree.
            </p>
            <p className="text-lg text-gray-600">
              That&apos;s why we&apos;re building ZhiYong AI: a curated collection of the best AI tools, tutorials, and resources — all in one place, easy to use, and designed to help you actually get things done.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-12 text-white text-center">
            <div className="text-8xl mb-6">🚀</div>
            <p className="text-2xl font-bold mb-2">50,000+</p>
            <p className="text-blue-100">Users worldwide trust ZhiYong AI</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-blue-600 text-sm mb-2">{value.titleCn}</p>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 text-center">
                    <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                  </div>
                  <div className="w-px h-full bg-blue-200 relative">
                    <div className="w-3 h-3 bg-blue-600 rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
                  </div>
                </div>
                <div className="pb-8">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">AI Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Tasks Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the AI revolution. Start exploring our tools today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
              Explore Tools
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border border-gray-200 hover:border-blue-300 transition">
              Contact Us
            </Link>
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