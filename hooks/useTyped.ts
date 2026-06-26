'use client';

import { useEffect, useRef, useState } from 'react';

export function useTyped(titles: string[]) {
  const [displayed, setDisplayed] = useState('');
  const tiRef = useRef(0);
  const ciRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const current = titles[tiRef.current];
      if (!deletingRef.current) {
        ciRef.current++;
        setDisplayed(current.slice(0, ciRef.current));
        if (ciRef.current === current.length) {
          deletingRef.current = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        ciRef.current--;
        setDisplayed(current.slice(0, ciRef.current));
        if (ciRef.current === 0) {
          deletingRef.current = false;
          tiRef.current = (tiRef.current + 1) % titles.length;
        }
      }
      timer = setTimeout(type, deletingRef.current ? 50 : 90);
    }

    timer = setTimeout(type, 400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayed;
}
