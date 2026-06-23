import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'

const About = () => {
  const team = [
    { name: 'Founder & CEO', role: 'Visionary Leader', emoji: '👨‍💼' },
    { name: 'Head of Agriculture', role: 'Agriculture Expert', emoji: '👨‍🌾' },
    { name: 'Training Coordinator', role: 'Skill Development', emoji: '👩‍🏫' },
    { name: 'Finance Manager', role: 'Financial Support', emoji: '👨‍💼' },
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">About Shokher Polli</h1>
            <p className="text-xl text-green-700">From Passion to Prosperity</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" align="left" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                শখের পল্লী is more than just an organization—it's a movement dedicated to transforming rural Bangladesh through sustainable agriculture and entrepreneurship. Our journey began with a simple vision: to empower farmers and rural youth to turn their passions into prosperous businesses.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that the key to national development lies in the empowerment of our rural communities. By providing comprehensive support systems—from farming techniques to financial assistance, from training programs to market access—we are building a future where no one is left behind.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Shokher Polli stands as an umbrella ecosystem encompassing diverse initiatives, all working together to create a sustainable, prosperous, and empowered rural Bangladesh.
              </p>
            </div>
            <div className="bg-green-100 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">🌾</div>
                <p className="text-2xl font-bold text-green-800">Growing Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Sustainability', desc: 'We are committed to environmental stewardship and sustainable practices in all our initiatives.' },
              { title: 'Integrity', desc: 'Honesty, transparency, and ethical conduct are the foundation of our relationship with our community.' },
              { title: 'Empowerment', desc: 'We believe in empowering individuals to take control of their own destinies through knowledge and support.' },
              { title: 'Community', desc: 'We work together, grow together, and succeed together as one united community.' },
              { title: 'Innovation', desc: 'We embrace modern technology and innovative approaches to solve rural challenges.' },
              { title: 'Quality', desc: 'We never compromise on quality, from our farm products to our training programs.' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated individuals behind Shokher Polli"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-green-50 p-8 rounded-2xl">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-bold text-green-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Journey"
        subtitle="Be part of the Shokher Polli family today"
        buttonText="Get In Touch"
        buttonLink="/contact"
      />
    </div>
  )
}

export default About
