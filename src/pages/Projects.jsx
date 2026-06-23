import SectionTitle from '../components/SectionTitle'
import EcosystemCard from '../components/EcosystemCard'
import CTASection from '../components/CTASection'
import { ecosystemData } from '../data/ecosystemData'

const Projects = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Our Ecosystem</h1>
            <p className="text-xl text-green-700">Explore all our initiatives</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Complete Ecosystem"
            subtitle="A comprehensive platform for rural development and entrepreneurship"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemData.map((item, index) => (
              <EcosystemCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="How It Works"
            subtitle="Our integrated approach to rural empowerment"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Learn', desc: 'Join our training programs and learn modern techniques' },
              { step: '02', title: 'Start', desc: 'Begin your venture with our support and guidance' },
              { step: '03', title: 'Grow', desc: 'Access finance and resources to expand your business' },
              { step: '04', title: 'Sell', desc: 'Market your products through our e-commerce platform' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
