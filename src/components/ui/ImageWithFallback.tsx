// components/ImageWithFallback.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageWithFallback({
  src,
  fallbackSrc = '/placeholder-music.png',
  alt,
  width,
  height,
  className,
  ...props
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  [key: string]: any;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
      unoptimized
      {...props}
    />
  );
}