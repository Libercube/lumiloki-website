import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import OptimizedImage from './OptimizedImage'
import styles from './ImageGallery.module.css'

interface ImageGalleryProps {
  images: { src: string; alt: string }[]
  fallbackEmoji?: string
}

export default function ImageGallery({ images, fallbackEmoji }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) return null

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={styles.mainImageInner}
          >
            <OptimizedImage
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              objectFit="contain"
              aspectRatio="1/1"
              fallbackEmoji={fallbackEmoji}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${index === activeIndex ? styles.thumbnailActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${img.alt}`}
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                objectFit="cover"
                width={64}
                height={64}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
