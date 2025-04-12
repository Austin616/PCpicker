import React from 'react';
import { motion } from 'framer-motion';
import './LogoWall.css';

const logos = import.meta.glob('../assets/*.png', { eager: true });

const LogoWall = () => {
  const brands = [
    'NZXT',
    'Corsair',
    'MSI',
    'Gigabyte',
    'Asus',
    'EVGA',
    'Razer',
    'CoolerMaster',
  ];

  const getImage = (brand) => {
    const brandKey = brand.toLowerCase();
    const match = Object.entries(logos).find(([path]) =>
      path.toLowerCase().includes(brandKey)
    );
    return match?.[1]?.default; 
  };

  return (
    <div id='logo-wall'className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-2xl font-bold sm:text-3xl"
        >
          Trusted by some of <span className="sm:underline">the best</span> in the industry.
        </motion.div>
      </div>

      {/* Logos container */}
      <div className="logos-container flex h-[25vh] w-full flex-nowrap overflow-hidden px-[3.75rem]">
        {[0, 1].map((loop) => (
          <div
            key={loop}
            className="flex animate-infinite-scroll-x items-center justify-start space-x-8"
            aria-hidden={loop === 1}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={`${brand}-${index}-${loop}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1.6 }}
              >
                <img
                  alt={brand}
                  src={getImage(brand)}
                  className="mx-8 inline-block w-auto max-w-[10rem] sm:mx-12"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoWall;
