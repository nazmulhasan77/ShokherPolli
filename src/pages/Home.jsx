import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import EcosystemCard from '../components/EcosystemCard'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { ecosystemData } from '../data/ecosystemData'
import { productData } from '../data/productData'
import { FaCheckCircle, FaLeaf, FaHeart, FaHandshake, FaEye, FaBullseye } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Home = () => {
  const features = [
    { icon: FaLeaf, title: '100% Organic', desc: 'All products are grown naturally without chemicals', color: 'from-green-500 to-emerald-600' },
    { icon: FaHeart, title: 'Farmer First', desc: 'Supporting local farmers and ensuring fair prices', color: 'from-red-500 to-pink-600' },
    { icon: FaHandshake, title: 'Community Focused', desc: 'Building sustainable rural communities together', color: 'from-blue-500 to-indigo-600' },
    { icon: FaCheckCircle, title: 'Quality Assured', desc: 'Premium quality products you can trust', color: 'from-amber-500 to-orange-600' },
  ]

  const whyChooseUs = [
    {
      icon: '🌱',
      title: 'Sustainable Farming',
      desc: 'We practice eco-friendly farming methods that preserve our environment for future generations.',
    },
    {
      icon: '🤝',
      title: 'Direct from Farm',
      desc: 'Get fresh products directly from our farms to your table with zero middlemen.',
    },
    {
      icon: '📚',
      title: 'Training & Support',
      desc: 'Comprehensive training programs for farmers to adopt modern techniques.',
    },
    {
      icon: '💪',
      title: 'Empowerment',
      desc: 'Empowering women and youth through entrepreneurship and skill development.',
    },
  ]

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why Choose Us"
            title="Our Features"
            subtitle="Why choose Shokher Polli for your agricultural and entrepreneurial journey"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Services"
            title="Our Ecosystem"
            subtitle="Explore the diverse range of initiatives under Shokher Polli"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemData.slice(0, 6).map((item, index) => (
              <EcosystemCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Fresh Products"
            title="From Our Marketplace"
            subtitle="Fresh, organic products directly from our farms"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="What Makes Us Different"
            title="Why Choose Us"
            subtitle="What makes Shokher Polli different from others"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group flex gap-6 bg-gradient-to-br from-white to-green-50/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-green-100"
              >
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaEye className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-green-100 text-lg leading-relaxed">
                  To create a self-sufficient rural Bangladesh where every farmer and entrepreneur can thrive with dignity, prosperity, and sustainable practices.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <FaBullseye className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-green-100 text-lg leading-relaxed">
                  To provide integrated support through farming, training, finance, and market access, empowering rural communities to achieve economic independence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Journey?"
        subtitle="Join Shokher Polli today and be part of our growing community"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Home
