import { motion } from 'framer-motion'

const EcosystemCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group bg-gradient-to-br from-white to-green-50/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-300 border border-green-100 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300" />
      
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-green-300/50 transition-all duration-300 group-hover:scale-110">
          <span className="text-4xl">{icon}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default EcosystemCard
