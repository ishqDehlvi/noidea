"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const getColorFromVariable = (variable: string) => {
  const styles = getComputedStyle(document.documentElement);
  const color = styles.getPropertyValue(variable);
  return color.trim();
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    getColorFromVariable("--slate-900"),
    getColorFromVariable("--black"),
    getColorFromVariable("--neutral-900"),
  ];

  return (
    <div className="flex">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-1/4 p-4 bg-gray-800"
      >
        <ul>
          {content.map((item, index) => (
            <motion.li
              key={item.title + index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-4 text-lg font-semibold text-white ${
                activeCard === index ? "text-blue-500" : ""
              }`}
            >
              {item.title}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="ml-1/4 w-3/4"
      >
        <motion.div
          animate={{
            backgroundColor: backgroundColors[activeCard % backgroundColors.length],
          }}
          className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
          ref={ref}
        >
          <div className="div relative flex items-start px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-2xl"
            >
              {content.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="my-20"
                >
                  <p className="text-kg text-slate-300 max-w-sm mt-10">
                    {item.description}
                  </p>
                </motion.div>
              ))}
              <div className="h-40" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
