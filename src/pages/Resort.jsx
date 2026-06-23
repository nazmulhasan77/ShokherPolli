import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'

const Resort = () => {
  const amenities = [
    { icon: '🏡', title: 'Comfortable Cottages' },
    { icon: '🍽️', title: 'Organic Restaurant' },
    { icon: '🏊', title: 'Swimming Pool' },
    { icon: '🌾', title: 'Farm Tours' },
    { icon: '🚴', title: 'Cycling' },
    { icon: '🎣', title: 'Fishing' },
    { icon: '🌅', title: 'Sunrise View' },
    { icon: '📸', title: 'Photography' },
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Agro Tourism Resort</h1>
            <p className="text-xl text-green-700">Experience nature, relax, and rejuvenate</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Experience Village Life" align="left" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Escape the hustle and bustle of city life and immerse yourself in the serene beauty of rural Bangladesh at Shokher Polli Resort. Our eco-friendly resort offers a unique opportunity to experience authentic village life while enjoying modern comforts.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wake up to the sound of birds, breathe fresh air, walk through our organic farms, taste fresh farm-to-table food, and create memories that will last a lifetime. Whether you're looking for a peaceful retreat, an educational farm experience, or a family vacation, our resort has something for everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Come and discover the charm of rural Bangladesh with us!
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-white">
              <div className="text-8xl mb-6">🏡</div>
              <h3 className="text-2xl font-bold mb-4">Your Perfect Getaway</h3>
              <ul className="space-y-3 text-green-100">
                <li>✓ Peaceful natural environment</li>
                <li>✓ Authentic rural experience</li>
                <li>✓ Organic farm-to-table meals</li>
                <li>✓ Friendly and welcoming staff</li>
                <li>✓ Activities for all ages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Amenities"
            subtitle="Everything you need for a comfortable stay"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg">
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="text-lg font-bold text-green-900">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Ready to Visit?</h2>
            <p className="text-gray-700 text-lg mb-8">
              Book your stay today and experience the magic of Shokher Polli Resort. Contact us for reservations and more information.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-green-900 mb-2">📞 Contact</h3>
                <p className="text-gray-600">+880 1234 567890</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-green-900 mb-2">📧 Email</h3>
                <p className="text-gray-600">resort@shokherpolli.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan Your Visit"
        subtitle="Book your stay at Shokher Polli Resort"
        buttonText="Contact for Booking"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Resort
