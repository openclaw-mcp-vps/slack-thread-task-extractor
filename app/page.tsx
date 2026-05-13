export default function Home() {
  const faqs = [
    {
      q: 'How does the AI extract tasks from Slack threads?',
      a: 'Our AI scans each message in a thread for action verbs, assignee mentions, and deadline language, then surfaces them as structured tasks with owner and due date fields.'
    },
    {
      q: 'Which Slack workspaces and plans are supported?',
      a: 'Any Slack workspace on the Free, Pro, or Business+ plan. You connect via OAuth — no bot tokens to manage manually.'
    },
    {
      q: 'Can I export tasks to Jira, Linear, or Notion?',
      a: 'Yes. The dashboard lets you push extracted tasks to Jira, Linear, or Notion with one click, or export as CSV.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] text-[#58a6ff] border border-[#30363d]">
          For Engineering Managers &amp; Project Coordinators
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Extract actionable tasks from{' '}
          <span className="text-[#58a6ff]">Slack threads</span>{' '}automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop re-reading long threads. Connect Slack, let AI pull out every action item, deadline, and assignment, and track them in one clean dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['AI task extraction', 'Due date tracking', 'Assignee detection', 'Slack OAuth', 'Jira / Linear / Notion export', 'Webhook processing'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full text-sm bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Slack workspaces',
              'AI extraction on all threads',
              'Due date &amp; assignee tracking',
              'Dashboard with filters &amp; search',
              'Export to Jira, Linear, Notion, CSV',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Slack Thread Task Extractor. All rights reserved.
      </footer>
    </main>
  )
}
