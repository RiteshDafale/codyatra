

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import '../Component/ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const  ScrollFloatText = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1.5,
  ease = 'power4.out',
  scrollStart = 'top 90%',
  scrollEnd = 'top 40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

 

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

   const scroller = scrollContainerRef?.current || window;
    const paragraphs = el.querySelectorAll('p');


    paragraphs.forEach((p) => {
      gsap.fromTo(
        p,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: animationDuration,
          ease: ease,
          scrollTrigger: {
            trigger: p,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
            // markers: true, // uncomment for debugging
          },
        }
      );
    });
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd]);
   return (
    <div ref={containerRef} className={containerClassName}>
      {children}
    </div>
  );
};


  export default ScrollFloatText;