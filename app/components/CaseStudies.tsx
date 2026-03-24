const caseStudies = [
  {
    company: 'Fortune 500 Manufacturing',
    industry: 'Industrial Manufacturing',
    problem: 'Quality control processes required manual inspection of 12,000+ parts daily across three facilities. Defect detection was inconsistent, with 8.3% false negatives leading to downstream production failures and warranty claims.',
    solution: 'Computer vision system for real-time defect detection, integrated with existing MES infrastructure. Custom models trained on 240,000 labeled images of acceptable and defective parts.',
    outcome: '23.7% reduction in quality control costs',
    details: [
      'Defect detection accuracy: 99.4% (vs. 91.7% manual)',
      'Inspection time reduced from 47 seconds to 3.2 seconds per part',
      'Eliminated 180 hours/week of manual inspection labor',
      'Reduced downstream failures by 89%',
    ],
    timeline: '82 days',
  },
  {
    company: 'Regional Financial Services',
    industry: 'Financial Services',
    problem: 'Loan application processing required 40+ hours per application due to manual document verification, credit assessment, and compliance checks. Processing delays were costing market share to faster competitors.',
    solution: 'AI-powered document processing and risk assessment system. Automated extraction of structured data from unstructured documents, intelligent risk scoring, and compliance verification against regulatory requirements.',
    outcome: '41.2% reduction in processing costs',
    details: [
      'Processing time reduced from 42 hours to 6.3 hours per application',
      'Document accuracy improved from 94.1% to 99.7%',
      'Compliance check automation rate: 94%',
      'Customer satisfaction (application experience): +34 NPS points',
    ],
    timeline: '71 days',
  },
  {
    company: 'International Logistics Provider',
    industry: 'Supply Chain & Logistics',
    problem: 'Route optimization relied on legacy heuristics and manual planner judgment. Fuel costs, delivery delays, and inefficient capacity utilization were eroding margins in a competitive market.',
    solution: 'AI route optimization engine integrated with fleet management, warehouse operations, and customer demand forecasting. Real-time rerouting based on traffic, weather, and demand patterns.',
    outcome: '28.4% reduction in logistics costs',
    details: [
      'Fuel consumption reduced by 19.2% through optimized routing',
      'On-time delivery improved from 87.3% to 96.8%',
      'Vehicle capacity utilization increased from 71% to 89%',
      'Planner productivity: +140% (same headcount, 2.4x more routes)',
    ],
    timeline: '89 days',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold mb-6">
            Case studies
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real deployments, real outcomes, real timelines. Every claim is backed by measurable results from production systems.
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="border-t-2 border-near-black pt-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Left: Metadata */}
                <div className="space-y-6">
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Company
                    </div>
                    <div className="text-xl font-semibold">
                      {study.company}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Industry
                    </div>
                    <div className="text-xl font-semibold">
                      {study.industry}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Timeline
                    </div>
                    <div className="metric text-3xl font-bold">
                      {study.timeline}
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Problem */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Problem
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                      Solution
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="bg-near-black text-white p-8">
                    <div className="metric text-4xl md:text-5xl font-bold mb-6">
                      {study.outcome}
                    </div>
                    <ul className="space-y-2">
                      {study.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-gray-400 mt-1">—</span>
                          <span className="text-base text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
