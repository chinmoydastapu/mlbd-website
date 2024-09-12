import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const ParallaxBannerComponent = ({ backgroundImage, title, description }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: backgroundImage,
          speed: -30,
        },
      ]}
      className="relative h-screen lg:h-[90vh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-end justify-center">
          <motion.div
            className="text-center text-white p-10 w-4/5 lg:w-[80vw] rounded-lg shadow-2xl bg-black bg-opacity-60"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Title Animation */}
            <motion.h1
              className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-wide uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {title}
            </motion.h1>

            {/* Description Animation */}
            <motion.p
              className="text-base lg:text-lg font-light tracking-wide lg:tracking-widest leading-relaxed italic"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {description}
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="mt-8 w-48 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-400 rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </motion.div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default ParallaxBannerComponent;
