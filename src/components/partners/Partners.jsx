import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { name: "Red Bull", logo: "https://media.designrush.com/inspirations/296007/conversions/Red-Bull-logo-design1-preview.jpg" },
  { name: "Moonton", logo: "https://seeklogo.com/images/M/moonton-logo-4D3A4FC065-seeklogo.com.png" },
  { name: "Blue Bull", logo: "https://media.designrush.com/inspirations/296007/conversions/Red-Bull-logo-design1-preview.jpg" },
  { name: "Soonton", logo: "https://seeklogo.com/images/M/moonton-logo-4D3A4FC065-seeklogo.com.png" },
  { name: "Yellow Bull", logo: "https://media.designrush.com/inspirations/296007/conversions/Red-Bull-logo-design1-preview.jpg" },
  { name: "Green Bull", logo: "https://seeklogo.com/images/M/moonton-logo-4D3A4FC065-seeklogo.com.png" },
  { name: "Bull Bull", logo: "https://media.designrush.com/inspirations/296007/conversions/Red-Bull-logo-design1-preview.jpg" },
  { name: "Toontoon", logo: "https://seeklogo.com/images/M/moonton-logo-4D3A4FC065-seeklogo.com.png" },
  { name: "Plia Bull", logo: "https://media.designrush.com/inspirations/296007/conversions/Red-Bull-logo-design1-preview.jpg" },
  { name: "Moontoony", logo: "https://seeklogo.com/images/M/moonton-logo-4D3A4FC065-seeklogo.com.png" }
];

const Partners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-gray-50 py-5">
      {isInView && (
        <motion.div
          className="flex space-x-8 items-center"
          initial={{ x: '50%' }}
          animate={{ x: ['50%', '-110%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="relative flex-none group"
              initial={{ y: 100, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />
              <motion.div
                className="absolute inset-0 bg-white opacity-50 transition-opacity duration-300 group-hover:opacity-0"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Partners;