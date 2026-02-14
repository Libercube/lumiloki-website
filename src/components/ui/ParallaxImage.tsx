import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import styles from './ParallaxImage.module.css'

interface ParallaxImageProps {
  src: string
  alt?: string
  speed?: number
  opacity?: number
  className?: string
}

export default function ParallaxImage({
  src,
  alt = '',
  speed = 0.15,
  opacity = 0.3,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`])

  return (
    <div ref={ref} className={`${styles.container} ${className || ''}`}>
      <motion.img
        src={src}
        alt={alt}
        className={styles.image}
        style={{ y, opacity }}
      />
    </div>
  )
}
