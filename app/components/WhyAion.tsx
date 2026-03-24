const differentiators = [
  {
    title: 'Execution-First',
    description: 'We build and deploy, not hand off decks',
    details: 'No strategy presentations gathering dust. We own the implementation from architecture to production deployment. You get working systems, not recommendations.',
  },
  {
    title: 'Speed & Certainty',
    description: 'Predictable timelines, measurable KPIs from day one',
    details: 'Fixed-scope engagements with milestone-based delivery. You know exactly what you\'re getting, when you\'re getting it, and what it will cost. No scope creep, no surprise fees.',
  },
  {
    title: 'Vertical Expertise',
    description: 'Deep domain knowledge in ops, supply chain, customer experience',
    details: 'We\'ve deployed similar systems in your industry. We speak your language, understand your constraints, and know which approaches actually work at enterprise scale.',
  },
  {
    title: 'Risk Reduction',
    description: 'We own implementation, guarantee results or iterate',
    details: 'If the system doesn\'t hit target KPIs within 90 days, we continue at no additional cost until it does. Your success is our success—literally contractual.',
  },
]

export default function WhyAion() {
  return (
    <section className="section-padding bg-near-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left: Headline */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold mb-8">
              Why Aion
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              McKinsey meets startup that actually ships. We combine strategic rigor with execution velocity.
            </p>
          </div>

          {/* Right: Differentiators */}
          <div className="lg:col-span-3 space-y-16">
            {differentiators.map((item, index) => (
              <div key={index} className="space-y-4 border-l-2 border-white pl-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {item.description}
                  </p>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-16 border-t border-white/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to cut operational costs by 20–40%?
              </h3>
              <p className="text-lg text-gray-400">
                Schedule a 30-minute impact assessment. We'll analyze one workflow and show you exactly where AI can drive efficiency.
              </p>
            </div>
            <a
              href="#qualification"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-near-black font-semibold text-lg rounded-none hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              Schedule Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
