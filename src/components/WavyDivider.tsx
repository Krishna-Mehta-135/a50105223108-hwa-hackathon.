interface WavyDividerProps {
  color?: 'butter' | 'golden' | 'sky' | 'lavender' | 'mint';
  flipped?: boolean;
}

export function WavyDivider({ color = 'butter', flipped = false }: WavyDividerProps) {
  const colorMap: Record<string, string> = {
    butter: '#FFD66B',
    golden: '#F2A93B',
    sky: '#BFE3F2',
    lavender: '#D9CCF5',
    mint: '#C8EBD9',
  };

  return (
    <svg
      className="w-full h-12 block"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ transform: flipped ? 'scaleY(-1)' : 'scaleY(1)' }}
    >
      <path
        d="M0,0 C300,120 500,0 800,60 C1100,120 1200,0 1200,0 L1200,120 L0,120 Z"
        fill={colorMap[color]}
      />
    </svg>
  );
}
