import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaUsers, FaShoppingBag, FaAward } from 'react-icons/fa'

const Hero = () => {
  const features = [
    { icon: FaUsers, number: '1000+', label: 'Farmers', color: 'from-blue-500 to-indigo-600' },
    { icon: FaShoppingBag, number: '50+', label: 'Products', color: 'from-green-500 to-emerald-600' },
    { icon: FaAward, number: '12', label: 'Services', color: 'from-amber-500 to-orange-600' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-6 border border-green-200"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-green-700 text-sm font-semibold">Empowering Rural Bangladesh</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
            >
              <span className="block bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
                শখের পল্লী
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-600 mb-6"
            >
              শখ থেকে স্বাবলম্বিতা
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl"
            >
              কৃষি, খামার, প্রশিক্ষণ, অর্থায়ন, ই-কমার্স ও গ্রামীণ উদ্যোক্তা উন্নয়নের একটি সমন্বিত ডিজিটাল ইকোসিস্টেম।
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-300/50 flex items-center justify-center gap-2"
              >
                Explore Ecosystem
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/marketplace"
                className="px-8 py-4 bg-white text-green-700 border-2 border-green-200 rounded-2xl font-bold text-lg hover:bg-green-50 hover:border-green-300 transition-all duration-300 shadow-lg"
              >
                Visit Marketplace
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-lg border border-green-100">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <feature.icon className="text-white text-lg" />
                  </div>
                  <div className="text-2xl font-extrabold text-gray-800">{feature.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{feature.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-2xl shadow-green-300/40 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative aspect-square bg-gradient-to-br from-green-500/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 border border-white/20">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-9xl mb-6"
                >
                  🌾
                </motion.div>
                <p className="text-2xl font-bold text-white mb-2">Growing Together</p>
                <p className="text-green-100 text-center">Building sustainable rural communities</p>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-green-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🐓</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Poultry</div>
                  <div className="text-sm text-gray-500">Farming</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-green-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🥬</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Organic</div>
                  <div className="text-sm text-gray-500">Vegetables</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
