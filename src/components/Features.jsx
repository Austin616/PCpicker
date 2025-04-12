import React from 'react'
import { motion } from 'framer-motion'
import { FaMicrochip, FaRobot, FaChartLine, FaBalanceScale } from 'react-icons/fa'
import priceImg from '../assets/price.png'
import motherboardImg from '../assets/motherboard.png'
import compareImg from '../assets/compare.png'
import aiImg from '../assets/ai.png'

const features = [
  {
    icon: <FaMicrochip size={30} className="text-blue-600" />,
    title: 'Part Compatibility',
    desc: 'Never worry about mismatched components. Our checker ensures your build is flawless.',
    img: motherboardImg,
  },
  {
    icon: <FaRobot size={30} className="text-green-600" />,
    title: 'AI Build Assistant',
    desc: 'Answer a few quick questions, and our AI recommends a custom build for your needs and budget.',
    img: aiImg,
  },
  {
    icon: <FaChartLine size={30} className="text-purple-600" />,
    title: 'Price Tracking',
    desc: 'Get notified when prices drop and view part price history before you buy.',
    img: priceImg,
  },
  {
    icon: <FaBalanceScale size={30} className="text-yellow-500" />,
    title: 'Side-by-Side Comparison',
    desc: 'Easily compare specs and benchmarks between CPUs, GPUs, and more.',
    img: compareImg,
  },
]

const Features = () => {
  return (
    <div id='features'className="bg-gray-100 mt-10 p-16 m-20 rounded-xl">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">Why Builders Love Us</h2>
      <div className="space-y-20 max-w-6xl mx-auto px-4 ">
        {features.map((feature, index) => {
          const isImageLeft = index % 2 === 0
          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${!isImageLeft ? 'md:flex-row-reverse' : ''} gap-12 md:gap-16`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full md:w-1/2 h-64 object-contain rounded-xl shadow-lg bg-white"
              />
              <div className="md:w-1/2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  {feature.icon}
                  <span className="font-semibold text-xl text-blue-900">{feature.title}</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
