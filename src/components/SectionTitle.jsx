import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, align = 'center', badge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <div className={`inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-1.5 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
        <div className="h-1.5 w-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
      </div>
    </motion.div>
  )
}

export default SectionTitle
