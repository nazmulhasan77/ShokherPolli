import SectionTitle from '../components/SectionTitle'
import EcosystemCard from '../components/EcosystemCard'
import CTASection from '../components/CTASection'
import { ecosystemData } from '../data/ecosystemData'

const Projects = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
              Our Ecosystem
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-700">
              Explore all our initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Cards */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="All Services"
            title="Complete Ecosystem"
            subtitle="A comprehensive platform for rural development and entrepreneurship"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ecosystemData.map((item, index) => (
              <EcosystemCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Process"
            title="How It Works"
            subtitle="Our integrated approach to rural empowerment"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Meet with our financial advisor to discuss your needs' },
              { step: '02', title: 'Documentation', desc: 'Submit required documents and business plan' },
              { step: '03', title: 'Review', desc: 'Quick review and approval process' },
              { step: '04', title: 'Disbursement', desc: 'Get funds and start your journey' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-5 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Get in touch with us to explore opportunities"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Projects
