import { motion } from 'framer-motion'
import { FaCartPlus, FaHeart } from 'react-icons/fa'

const ProductCard = ({ image, name, price, unit, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-300 border border-green-100"
    >
      <div className="relative aspect-square bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 flex items-center justify-center overflow-hidden">
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-7xl md:text-8xl"
        >
          {image}
        </motion.span>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100">
          <FaHeart />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{name}</h3>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ৳{price}
            </span>
            <span className="text-gray-500 ml-2 font-medium">/ {unit}</span>
          </div>
          <button className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-300/50 hover:scale-110">
            <FaCartPlus className="text-lg" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
