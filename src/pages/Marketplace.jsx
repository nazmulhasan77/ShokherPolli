import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import { productData } from '../data/productData'

const Marketplace = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Marketplace</h1>
            <p className="text-xl text-green-700">Fresh from our farms to your table</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Products"
            subtitle="Fresh, organic, and locally produced goods"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-green-900 mb-4">More Products Coming Soon!</h2>
            <p className="text-gray-600 text-lg mb-8">
              We are continuously expanding our product range. Stay tuned for more fresh, organic products directly from our farms.
            </p>
            <div className="inline-flex items-center gap-4 bg-green-100 px-8 py-4 rounded-full">
              <span className="text-green-700 font-semibold">💡 Tip:</span>
              <span className="text-gray-700">Contact us for bulk orders and special requests</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Marketplace
