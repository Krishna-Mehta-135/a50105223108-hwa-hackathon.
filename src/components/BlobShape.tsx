interface BlobShapeProps {
  className?: string;
  style?: React.CSSProperties;
}

export function BlobShape({ className = '', style }: BlobShapeProps) {
  return (
    <div
      className={`blob-shape ${className}`}
      style={style}
    />
  );
}
