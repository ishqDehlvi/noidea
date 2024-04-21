'use client'
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

interface CarouselCardProps {
  image: string;
  title: string;
  description: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  image,
  title,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="relative cursor-pointer mx-4"
      onMouseEnter={toggleExpand}
      onMouseLeave={toggleExpand}
      initial={{ width: 'auto' }}
      animate={{ width: isExpanded ? '48rem' : '16rem' }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-white p-4">
        <h3 className="text-2xl font-bold mb-2 border-b-2 border-white pb-1">
          {title}
        </h3>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mb-4">{description}</p>
              <button className="bg-white text-black py-2 px-4 rounded-md">
                See More
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Carousel: React.FC = () => {
  const carouselCards = [
    {
      image: '/card1.jpg',
      title: 'Card 1',
      description: 'This is the description for Card 1.',
    },
    {
      image: '/card2.jpg',
      title: 'Card 2',
      description: 'This is the description for Card 2.',
    },
    {
      image: '/card2.jpg',
      title: 'Card 2',
      description: 'This is the description for Card 2.',
    },
    {
      image: '/card2.jpg',
      title: 'Card 2',
      description: 'This is the description for Card 2.',
    },
    {
      image: '/card2.jpg',
      title: 'Card 2',
      description: 'This is the description for Card 2.',
    },
    {
      image: '/card2.jpg',
      title: 'Card 2',
      description: 'This is the description for Card 2.',
    },
    {
      image: '/card2.jpg',
      title: 'Card 2',
      description: 'This is the description for Card 2.',
    },
  ];

  const carouselControls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselWidth = carouselRef.current?.offsetWidth || 0;
    const cardWidth = 16; // Adjust this value based on your card width
    const numCards = carouselCards.length;
    const totalWidth = carouselWidth + numCards * cardWidth;

    carouselControls.start({
      x: `-${totalWidth}px`,
      transition: {
        duration: (totalWidth / cardWidth) * 5,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [carouselControls, carouselCards]);

  return (
    <div className="container mx-auto py-8 overflow-hidden">
      <motion.div
        className="inline-flex whitespace-nowrap"
        ref={carouselRef}
        animate={carouselControls}
      >
        {carouselCards.map((card, i) => (
          <div key={i} className="min-w-[16rem]">
            <CarouselCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
