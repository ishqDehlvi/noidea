'use client';
import React from 'react';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import { StickyScroll } from '@/components/StickyScrollReveal';
import HeroSection from '@/components/Hero';
import styles from './page.module.scss'
import { projects } from '../data';
import Card from '@/components/Card/page';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import StackCards from '@/components/StackCards';

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

];


export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Carousel/>
    <StickyScroll content={contentData} />
    <StackCards/>
    </>
  )
}