import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'

const Training = () => {
  const courses = [
    {
      icon: '🌾',
      title: 'Agricultural Training',
      desc: 'Modern farming techniques, crop rotation, organic farming, and pest management.',
      duration: '3 Months'
    },
    {
      icon: '🐔',
      title: 'Poultry Farming',
      desc: 'Complete training on poultry management, disease control, and marketing.',
      duration: '2 Months'
    },
    {
      icon: '🐐',
      title: 'Livestock Management',
      desc: 'Goat, cattle, and dairy farming with modern animal husbandry practices.',
      duration: '2.5 Months'
    },
    {
      icon: '🐟',
      title: 'Fish Farming',
      desc: 'Aquaculture techniques, pond management, and fish health management.',
      duration: '2 Months'
    },
    {
      icon: '🌱',
      title: 'Nursery Management',
      desc: 'Plant propagation, nursery setup, and ornamental plant cultivation.',
      duration: '1.5 Months'
    },
    {
      icon: '💼',
      title: 'Entrepreneurship',
      desc: 'Business planning, marketing, financial management, and leadership skills.',
      duration: '3 Months'
    },
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Training Programs</h1>
            <p className="text-xl text-green-700">Build skills, transform lives</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Training Courses"
            subtitle="Comprehensive programs designed for your success"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white border-2 border-green-100 rounded-2xl p-8 hover:border-green-500 transition-colors shadow-lg">
                <div className="text-5xl mb-6">{course.icon}</div>
                <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {course.duration}
                </span>
                <h3 className="text-xl font-bold text-green-900 mb-3">{course.title}</h3>
                <p className="text-gray-600">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Our Training?"
            subtitle="What makes our programs stand out"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Hands-on Practical Training', desc: 'Learn by doing with real farm experience and practical workshops.' },
              { title: 'Expert Instructors', desc: 'Train from experienced professionals and industry experts.' },
              { title: 'Certification', desc: 'Receive recognized certificates upon course completion.' },
              { title: 'Post-Training Support', desc: 'Continued guidance and support even after the course ends.' },
              { title: 'Job Placement', desc: 'Assistance in finding employment or starting your own venture.' },
              { title: 'Flexible Schedule', desc: 'Choose from batch timings that suit your convenience.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Enroll Today!"
        subtitle="Start your journey to success with our training programs"
        buttonText="Contact for Admission"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Training
