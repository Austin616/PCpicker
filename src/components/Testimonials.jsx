import React from 'react';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: 'Lebron James',
    title: 'Gaming Enthusiast',
    quote: 'The PC Picker helped me build my dream gaming rig within budget. Loved the part comparison feature!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ashton Hall',
    title: 'Content Creator',
    quote: 'I was overwhelmed before, but this app made choosing the right GPU and CPU super easy.',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Duke Dennis',
    title: 'First-Time Builder',
    quote: 'Honestly didn’t know anything about PC parts. The AI chat helped me out big time!',
    rating: 4,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }

  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
  }

  return <div className="flex gap-1 mb-3">{stars}</div>;
};

const Testimonials = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-2xl shadow-lg max-w-6xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">User Reviews</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 hover:border-blue-600 border-2 border-transparent transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {renderStars(testimonial.rating)}
            <FaQuoteLeft className="text-4xl text-blue-600 mb-4" />
            <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
            <h4 className="font-semibold text-lg mt-4">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
