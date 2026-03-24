export default function Hero() {
  return (
    <section className="full-height flex items-center bg-near-black text-white">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none font-bold">
                We deploy AI systems that cut operational costs by{' '}
                <span className="metric">20–40%</span>.
              </h1>
              <p className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none font-bold">
                In <span className="metric">90 days</span>. Guaranteed.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              AI deployment for Fortune 500 companies: strategy, architecture, and live deployment in months, not years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#qualification"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-near-black font-semibold text-lg rounded-none hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule 30-min AI Impact Assessment
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold text-lg rounded-none hover:bg-white hover:text-near-black transition-colors duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Right: Visual metrics */}
          <div className="hidden lg:grid grid-cols-2 gap-8">
            <div className="space-y-4 pt-12">
              <div className="p-8 border border-white/20 bg-white/5">
                <div className="metric text-6xl font-bold mb-2">34.2%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Cost Reduction</div>
              </div>
              <div className="p-8 border border-white/20 bg-white/5">
                <div className="metric text-6xl font-bold mb-2">67 days</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Avg. Deployment</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-8 border border-white/20 bg-white/5">
                <div className="metric text-6xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">On-Time Delivery</div>
              </div>
              <div className="p-8 border border-white/20 bg-white/5">
                <div className="metric text-6xl font-bold mb-2">$1B+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Client Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
