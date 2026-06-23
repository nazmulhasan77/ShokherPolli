import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-700 to-teal-700 py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-green-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-white to-green-50 text-green-700 rounded-2xl font-bold text-lg hover:from-green-50 hover:to-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
