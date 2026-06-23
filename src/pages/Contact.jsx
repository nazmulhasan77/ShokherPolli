import SectionTitle from '../components/SectionTitle'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Contact Us</h1>
            <p className="text-xl text-green-700">Get in touch with us</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Send Us a Message" align="left" />
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Training Program</option>
                    <option>Financial Support</option>
                    <option>Marketplace</option>
                    <option>Resort Booking</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <SectionTitle title="Contact Information" align="left" />
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-1">Address</h3>
                    <p className="text-gray-600">Village - Shokher Polli<br />Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+880 1234 567890<br />+880 1234 567891</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@shokherpolli.com<br />contact@shokherpolli.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Saturday - Thursday: 9:00 AM - 6:00 PM<br />Friday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <p className="text-green-100 mb-6">Stay connected with us on social media for the latest updates and news.</p>
                <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'YouTube', 'Twitter'].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex-1 py-3 bg-white/20 rounded-lg text-center font-semibold hover:bg-white/30 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
