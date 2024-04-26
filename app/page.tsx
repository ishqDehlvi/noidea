import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import { StickyScroll } from '@/components/StickyScrollReveal';
import HeroSection from '@/components/Hero';





const contentData = [
  {
    title: 'Section 1',
    description: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1',
    content: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1'
  },
  {
    title: 'Section 2',
    description: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1',
    content: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1'
  },
  {
    title: 'Section 3',
    description: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1',
    content: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1'
  },
  {
    title: 'Section 4',
    description: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1',
    content: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1'
  },
  {
    title: 'Section 5',
    description: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1',
    content: 'Content for Section 1 Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1Content for Section 1'
  },

  // Add more sections as needed
];

const HomePage: React.FC = () => {

  // const stackContent = [
  //   { title: 'Card 1', description: 'This is the description for Card 1.' },
  //   { title: 'Card 2', description: 'This is the description for Card 2.' },

  //   { title: 'Card 2', description: 'This is the description for Card 2.' },
  //   // Add more content items as needed
  //   { title: 'Card 2', description: 'This is the description for Card 2.' },

  //   { title: 'Card 2', description: 'This is the description for Card 2.' },

  //   { title: 'Card 2', description: 'This is the description for Card 2.' },

  // ];

  return (
    <div>
      <Header />
      <HeroSection/>
      <Carousel/>
      <StickyScroll content={contentData} />
      {/* Rest of the landing page content */}
    </div>
  );
};

export default HomePage;