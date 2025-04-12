import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { label: 'Parts Tracked', value: '10,000+' },
  { label: 'Users', value: '2,500+' },
  { label: 'Builds Created', value: '1,200+' },
  { label: 'Vendors Integrated', value: '15' },
]

const StatCard = ({ label, value, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    transition={{ duration: 0.6, delay }}
    className="text-center p-6 rounded-xl shadow-lg bg-gray-900 hover:scale-105 transition-transform duration-300 hover:border-blue-600 border-2 border-transparent"
  >
    <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">{value}</div>
    <div className="mt-2 text-sm sm:text-base text-white">{label}</div>
  </motion.div>
)

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="bg-gray-100 mt-10 p-16 m-20 rounded-xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl font-bold mb-12"
        >
          Trusted Platform by the Numbers
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              delay={0.2 + index * 0.2}
              inView={inView}
              
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
