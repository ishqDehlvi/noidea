'use client'
import React, { useEffect, useRef } from 'react';
import styles from '@/app/page.module.scss'
import { projects } from '../data';
import Card from './Card/page';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';




const StackCards: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className={styles.main}>
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return <Card url={undefined} key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />;
      })}
    </main>
  );
};

export default StackCards;
