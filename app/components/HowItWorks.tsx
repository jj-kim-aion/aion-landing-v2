const steps = [
  {
    number: '01',
    title: 'Discovery',
    duration: '2 weeks',
    description: 'We analyze your current workflows, identify high-impact automation opportunities, and define measurable KPIs.',
    deliverables: [
      'Process audit and efficiency baseline',
      'ROI model with conservative estimates',
      'Technical architecture blueprint',
      'Fixed-price implementation proposal',
    ],
  },
  {
    number: '02',
    title: 'Build',
    duration: '6-8 weeks',
    description: 'We architect and develop your AI system, integrating seamlessly with existing infrastructure. You review progress at weekly milestones.',
    deliverables: [
      'Custom AI models trained on your data',
      'Integration with existing systems',
      'User interface and workflow automation',
      'Comprehensive testing and QA',
    ],
  },
  {
    number: '03',
    title: 'Deploy',
    duration: '2-4 weeks',
    description: 'We launch the system in production, train your team, and monitor performance until target KPIs are consistently met.',
    deliverables: [
      'Production deployment and monitoring',
      'Team training and documentation',
      'Performance optimization',
      'Success guarantee: we iterate until KPIs are hit',
    ],
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A predictable process, from discovery to deployment. No surprises, no scope creep, no endless consulting cycles.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
            >
              {/* Left: Number and duration */}
              <div className="md:col-span-3 space-y-4">
                <div className="metric text-7xl md:text-8xl lg:text-9xl font-bold text-near-black/10">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <div className="metric text-lg text-gray-500">
                    {step.duration}
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="md:col-span-9 space-y-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {step.description}
                </p>

                <div className="bg-white border border-gray-200 p-8">
                  <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider text-gray-500">
                    Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="metric text-sm text-gray-400 mt-1">—</span>
                        <span className="text-lg text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total timeline */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="metric text-7xl md:text-8xl font-bold mb-4">
                10-14 weeks
              </div>
              <p className="text-xl text-gray-600 max-w-2xl">
                Total time from kickoff to production deployment. Most clients see measurable results within 90 days.
              </p>
            </div>
            <a
              href="#qualification"
              className="inline-flex items-center justify-center px-8 py-4 bg-near-black text-white font-semibold text-lg rounded-none hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
