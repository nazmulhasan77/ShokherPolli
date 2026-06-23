import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'

const Finance = () => {
  const services = [
    {
      icon: '💰',
      title: 'Microcredit Loans',
      desc: 'Small loans for starting or expanding your agricultural or small business ventures with easy repayment terms.'
    },
    {
      icon: '🌱',
      title: 'Agricultural Loans',
      desc: 'Specialized loans for farming equipment, seeds, fertilizers, and crop cultivation.'
    },
    {
      icon: '🏠',
      title: 'Business Setup',
      desc: 'Financial support for setting up new businesses, farms, and rural enterprises.'
    },
    {
      icon: '📊',
      title: 'Financial Literacy',
      desc: 'Training on financial management, budgeting, and business planning for entrepreneurs.'
    },
    {
      icon: '🤝',
      title: 'Group Lending',
      desc: 'Joint liability group loans for community-based entrepreneurship and mutual support.'
    },
    {
      icon: '💳',
      title: 'Flexible Repayment',
      desc: 'Customized repayment plans tailored to your income cycles and business needs.'
    },
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Finance & Support</h1>
            <p className="text-xl text-green-700">Fueling your entrepreneurial dreams</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Financial Services"
            subtitle="Comprehensive financial solutions for rural entrepreneurs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How to Apply"
            subtitle="Simple steps to access financial support"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Meet with our financial advisor to discuss your needs' },
              { step: '2', title: 'Documentation', desc: 'Submit required documents and business plan' },
              { step: '3', title: 'Review', desc: 'Quick review and approval process' },
              { step: '4', title: 'Disbursement', desc: 'Get funds and start your journey' },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Financial Support?"
        subtitle="Let us help you achieve your business goals"
        buttonText="Apply Now"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Finance
