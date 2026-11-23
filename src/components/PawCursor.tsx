import { useEffect } from 'react';

export function PawCursor() {
  useEffect(() => {
    const paw = document.createElement('div');
    paw.className = 'paw-cursor';
    paw.innerHTML = '🐾';
    paw.style.fontSize = '24px';
    document.body.appendChild(paw);

    const move = (e: MouseEvent) => {
      paw.style.left = `${e.clientX}px`;
      paw.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(paw);
    };
  }, []);

  return null;
}
