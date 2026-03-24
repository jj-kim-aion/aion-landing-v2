export default function ClosingCTA() {
  return (
    <section className="section-padding bg-near-black text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold">
              Cut operational costs by 20–40%. In 90 days. Guaranteed.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Schedule a 30-minute AI impact assessment. We'll analyze one workflow and show you exactly where AI can drive efficiency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#qualification"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-near-black font-semibold text-lg rounded-none hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Your Impact Assessment
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold text-lg rounded-none hover:bg-white hover:text-near-black transition-colors duration-200"
            >
              Read Case Studies
            </a>
          </div>

          {/* Key points */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-3">
              <div className="text-4xl font-bold metric text-white">10-14 weeks</div>
              <div className="text-gray-400">Discovery to production deployment</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold metric text-white">Fixed scope</div>
              <div className="text-gray-400">No surprise fees or scope creep</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold metric text-white">KPI guarantee</div>
              <div className="text-gray-400">We iterate until targets are met</div>
            </div>
          </div>

          {/* Small print */}
          <div className="pt-16 text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed border-t border-white/20">
            <p>
              Qualified clients only: $1B+ revenue companies with complex operational workflows.
              We focus on high-impact deployments where AI can deliver measurable ROI within 90 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
