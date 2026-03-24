export default function Hero() {
  return (
    <section className="full-height flex items-center bg-near-black text-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-tight font-bold">
                We deploy AI systems that cut operational costs by{' '}
                <span className="metric text-white bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">20–40%</span>.
              </h1>
              <p className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight font-bold text-gray-100">
                In <span className="metric text-white">90 days</span>. Guaranteed.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              AI deployment for Fortune 500 companies: strategy, architecture, and live deployment in months, not years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#qualification"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-near-black font-semibold text-lg rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule 30-min Assessment
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-semibold text-lg rounded-lg hover:bg-white/10 hover:border-white transition-all duration-200 backdrop-blur-sm"
              >
                View Case Studies →
              </a>
            </div>
          </div>

          {/* Right: Visual metrics */}
          <div className="hidden lg:grid grid-cols-2 gap-8">
            <div className="space-y-4 pt-12">
              <div className="card-elevated p-8 hover:bg-white/[0.04] transition-all duration-300">
                <div className="metric text-6xl font-bold mb-3 text-white">34.2%</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Cost Reduction</div>
              </div>
              <div className="card-elevated p-8 hover:bg-white/[0.04] transition-all duration-300">
                <div className="metric text-6xl font-bold mb-3 text-white">67 days</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Avg. Deployment</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card-elevated p-8 hover:bg-white/[0.04] transition-all duration-300">
                <div className="metric text-6xl font-bold mb-3 text-white">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">On-Time Delivery</div>
              </div>
              <div className="card-elevated p-8 hover:bg-white/[0.04] transition-all duration-300">
                <div className="metric text-6xl font-bold mb-3 text-white">$1B+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Client Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
