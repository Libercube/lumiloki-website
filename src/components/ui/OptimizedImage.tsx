import { useState, useRef, useEffect } from 'react'
import Skeleton from './Skeleton'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackEmoji?: string
  priority?: boolean
  aspectRatio?: string
  objectFit?: 'cover' | 'contain'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackEmoji,
  priority = false,
  aspectRatio,
  objectFit = 'contain',
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  if (error && fallbackEmoji) {
    return (
      <span
        role="img"
        aria-label={alt}
        style={{ fontSize: Math.min(width || 64, height || 64) * 0.5 }}
      >
        {fallbackEmoji}
      </span>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        width: width ? `${width}px` : '100%',
        maxWidth: '100%',
        height: height ? `${height}px` : undefined,
        aspectRatio: aspectRatio,
        overflow: 'hidden',
      }}
    >
      {!loaded && !error && (
        <Skeleton
          variant="image"
          width="100%"
          height="100%"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        className={className}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          filter: loaded ? 'none' : 'blur(10px)',
          objectFit,
          position: aspectRatio ? 'absolute' : undefined,
          inset: aspectRatio ? 0 : undefined,
          width: aspectRatio ? '100%' : undefined,
          height: aspectRatio ? '100%' : undefined,
        }}
      />
    </div>
  )
}
