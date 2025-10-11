import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RightAnimation = ({
  children,
  distance = 300,
  direction = 'vertical',
  reverse = false,
  duration =1.5,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      console.warn('RightAnimation: no element ref');
      return;
    }

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    // initial styling
    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1
    });

    // create the animation
    const tween = gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete: () => {
        onComplete && onComplete();
      },
      scrollTrigger: {
        trigger: el,
        start: `top ${startPct}%`,
        toggleActions: 'play none none none',
        once: true,
        onEnter: () => {
          // optional: console log
          // console.log('ScrollTrigger onEnter for', el);
        }
      }
    });

    // fallback: if ScrollTrigger fails or never triggers, ensure final state
    // after some time, force the final state
    const fallback = setTimeout(() => {
      gsap.set(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1
      });
    }, (duration + delay) * 1000 + 500); // a little extra buffer

    // refresh
    ScrollTrigger.refresh();

    return () => {
      clearTimeout(fallback);
      // kill this tween
      tween.kill();
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      gsap.killTweensOf(el);
      // Optionally do not kill all scrollTriggers
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete
  ]);

  return <div ref={ref}>{children}</div>;
};

export default RightAnimation;
