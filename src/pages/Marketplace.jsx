import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import { productData } from '../data/productData'

const Marketplace = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
              Marketplace
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-700">
              Fresh from our farms to your table
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Fresh Products"
            title="Our Products"
            subtitle="Fresh, organic, and locally produced goods"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {productData.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-green-100">
            <div className="text-6xl sm:text-7xl mb-6 sm:mb-8">🛒</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6">
              More Products Coming Soon!
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              We are continuously expanding our product range. Stay tuned for more fresh, organic products directly from our farms.
            </p>
            <div className="inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-green-100 to-emerald-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-green-200">
              <span className="text-green-700 font-bold text-sm sm:text-base">💡 Tip:</span>
              <span className="text-gray-700 text-sm sm:text-base">Contact us for bulk orders and special requests</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Marketplace
