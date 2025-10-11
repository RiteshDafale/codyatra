import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !text || !fontsLoaded) return;

    // revert old split if any
    if (el._rbsplitInstance) {
      try {
        el._rbsplitInstance.revert();
      } catch (_) { }
      el._rbsplitInstance = null;
    }

    const startPct = (1 - threshold) * 100;
    const start = `top ${startPct}%${rootMargin}`;

    let targets;
    const assignTargets = (self) => {
      if (splitType.includes('chars') && self.chars.length) targets = self.chars;
      else if (splitType.includes('words') && self.words.length) targets = self.words;
      else if (splitType.includes('lines') && self.lines.length) targets = self.lines;
      else targets = self.chars || self.words || self.lines;
    };

    const splitInstance = new GSAPSplitText(el, {
      type: splitType,
      smartWrap: true,
      autoSplit: splitType === 'lines',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      charsClass: 'split-char',
      reduceWhiteSpace: false,
      onSplit: (self) => {
        assignTargets(self);
        gsap.fromTo(
          targets,
          { ...from },
          {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            scrollTrigger: {
              trigger: el,
              start,
              once: true
            },
            onComplete: () => {
              onLetterAnimationComplete && onLetterAnimationComplete();
            }
          }
        );
      }
    });

    el._rbsplitInstance = splitInstance;

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
      try {
        splitInstance.revert();
      } catch (_) {}
      el._rbsplitInstance = null;
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, rootMargin, fontsLoaded, onLetterAnimationComplete]);

  const style = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    willChange: 'transform, opacity'
  };
  const classes = `split-parent ${className}`;

  const content = text;

  switch (tag) {
    case 'h1':
      return <h1 ref={ref} style={style} className={classes}>{content}</h1>;
    case 'h2':
      return <h2 ref={ref} style={style} className={classes}>{content}</h2>;
    // … other tags …
    default:
      return <p ref={ref} style={style} className={classes}>{content}</p>;
  }
};

export default SplitText;
