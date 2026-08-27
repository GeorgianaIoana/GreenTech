import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

export function useMultipleScrollAnimation(
  count: number,
  options: UseScrollAnimationOptions = {}
): [React.RefObject<HTMLDivElement>[], boolean[]] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const refs = useRef<(HTMLDivElement | null)[]>(Array(count).fill(null));
  const [visibleStates, setVisibleStates] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStates(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setVisibleStates(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs.current[index]) {
          observer.unobserve(refs.current[index]!);
        }
      });
    };
  }, [count, threshold, rootMargin, triggerOnce]);

  const refCallbacks = Array(count).fill(null).map((_, i) => ({
    current: refs.current[i]
  })) as React.RefObject<HTMLDivElement>[];

  return [refCallbacks, visibleStates];
}
