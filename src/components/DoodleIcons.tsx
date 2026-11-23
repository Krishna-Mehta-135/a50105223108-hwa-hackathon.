import { useEffect } from 'react';

export function DoodleIcons() {
  useEffect(() => {
    const icons = ['🦴', '🐾', '👃', '💨', '🎀'];
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-1';
    document.body.appendChild(container);

    const createDoodle = () => {
      const el = document.createElement('div');
      el.textContent = icons[Math.floor(Math.random() * icons.length)];
      el.style.position = 'absolute';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = Math.random() * 100 + 'vh';
      el.style.fontSize = (10 + Math.random() * 20) + 'px';
      el.style.opacity = '0.15';
      el.style.transition = 'all 10s linear';
      el.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      container.appendChild(el);

      requestAnimationFrame(() => {
        el.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
        el.style.opacity = '0';
      });

      setTimeout(() => el.remove(), 10000);
    };

    const interval = setInterval(createDoodle, 1500);
    return () => clearInterval(interval);
  }, []);

  return null;
}
