export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-soft-white border-t border-gray-200">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Company */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">Aion AI</div>
            <p className="text-gray-600 leading-relaxed">
              Enterprise AI deployment that guarantees results. Strategy, architecture, and live systems in 90 days.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#case-studies" className="text-gray-600 hover:text-near-black transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-near-black transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#qualification" className="text-gray-600 hover:text-near-black transition-colors">
                  Schedule Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-near-black transition-colors">
                  AI Implementation Playbook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-near-black transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-near-black transition-colors">
                  Technical Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <a href="mailto:hello@aion-ai.com" className="hover:text-near-black transition-colors">
                  hello@aion-ai.com
                </a>
              </li>
              <li className="text-gray-600">
                San Francisco, CA
              </li>
              <li className="text-gray-600">
                New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} Aion Research. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-near-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-near-black transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-near-black transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
