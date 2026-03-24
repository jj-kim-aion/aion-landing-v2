const testimonials = [
  {
    quote: 'We\'ve worked with three AI consultants before Aion. The difference? Aion actually delivered. On time, on budget, with measurable results. No more PowerPoint strategy—just working systems.',
    author: 'Marcus Wei',
    role: 'COO',
    company: 'Global Manufacturing Corp',
    metric: '23.7% cost reduction',
  },
  {
    quote: 'The contract guarantee was what sold us. If they don\'t hit KPIs, they keep working at no extra cost. That\'s unheard of in consulting. And they hit every milestone.',
    author: 'Jennifer Patel',
    role: 'VP Operations',
    company: 'Regional Financial Services',
    metric: '41.2% faster processing',
  },
  {
    quote: 'Most vendors promise the moon and deliver a pilot that never scales. Aion deployed our route optimization system in 89 days. It\'s in production, it\'s saving money, and our planners love it.',
    author: 'David Kowalski',
    role: 'Chief Digital Officer',
    company: 'International Logistics Provider',
    metric: '28.4% logistics savings',
  },
  {
    quote: 'The discovery phase alone was worth the engagement. They identified inefficiencies we had been living with for years and quantified exactly what AI could fix. No fluff, just data.',
    author: 'Alicia Moreno',
    role: 'Head of Process Excellence',
    company: 'Fortune 500 Industrial',
    metric: '180 hrs/week recovered',
  },
  {
    quote: 'We needed certainty, not another science experiment. Aion gave us fixed scope, fixed timeline, fixed price—and they delivered. I can finally show the board ROI, not aspirations.',
    author: 'Robert Chen',
    role: 'SVP Supply Chain',
    company: 'Global Retail Corp',
    metric: '$2.1M annual savings',
  },
]

export default function SocialProof() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold mb-6">
            What clients say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Testimonials focused on what matters: delivery certainty, measurable outcomes, and risk reduction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 md:p-10 hover:border-near-black transition-colors duration-200"
            >
              <blockquote className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  "{testimonial.quote}"
                </p>

                <footer className="space-y-4 pt-6 border-t border-gray-200">
                  <div>
                    <div className="font-semibold text-lg text-near-black">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>

                  <div className="metric text-2xl font-bold text-near-black/60">
                    {testimonial.metric}
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="metric text-5xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">On-Time Delivery</div>
            </div>
            <div>
              <div className="metric text-5xl font-bold mb-2">$1B+</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Client Revenue</div>
            </div>
            <div>
              <div className="metric text-5xl font-bold mb-2">67 days</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Avg. Deployment</div>
            </div>
            <div>
              <div className="metric text-5xl font-bold mb-2">32.1%</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Avg. Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
