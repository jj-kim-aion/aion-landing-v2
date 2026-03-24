const painPoints = [
  {
    title: 'Manual processes consuming 40+ hours per week',
    description: 'Your operations team is drowning in repetitive tasks that machines could handle. Every hour spent on manual data entry, reconciliation, and reporting is an hour not spent on strategic work.',
    impact: '40+ hrs/week',
  },
  {
    title: 'Failed AI pilots that didn\'t scale',
    description: 'You\'ve invested in proof-of-concepts that showed promise but never made it to production. The gap between demo and deployment keeps widening, and your board is asking why.',
    impact: '$500K+ wasted',
  },
  {
    title: 'Integration complexity with existing systems',
    description: 'Your legacy infrastructure wasn\'t built for AI. Every new tool creates more technical debt, and your IT team is stretched thin managing a patchwork of solutions.',
    impact: '12+ month delays',
  },
  {
    title: 'Lack of certainty in timeline and results',
    description: 'Consultants promise results but hand you PowerPoint decks. You need measurable outcomes and predictable timelines, not more recommendations.',
    impact: 'Zero ROI',
  },
  {
    title: 'Risk of implementation failure',
    description: 'The stakes are too high to experiment. A failed deployment doesn\'t just waste budget—it damages credibility and delays critical efficiency gains by years.',
    impact: 'Career risk',
  },
]

export default function PainPoints() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold mb-6">
            The problems keeping operations leaders up at night
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            You know AI can cut costs and accelerate operations. The question isn't whether—it's how, and with what certainty.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-near-black/10">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-soft-white p-8 md:p-12 hover:bg-white transition-all duration-200 border-l-4 border-near-black/0 hover:border-l-near-black"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-near-black">
                    {point.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                    {point.description}
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="metric text-3xl md:text-4xl font-bold text-near-black">
                    {point.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
