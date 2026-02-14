import { useRef, useEffect, useCallback } from 'react'
import styles from './ParticleField.module.css'

interface ParticleFieldProps {
  particleCount?: number
  colors?: string[]
  speed?: number
}

interface Bubble {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  shape: 'circle' | 'roundedRect'
  rotation: number
  rotationSpeed: number
}

export default function ParticleField({
  particleCount = 50,
  colors = [
    'rgba(255, 107, 107, 0.15)',
    'rgba(78, 205, 196, 0.15)',
    'rgba(255, 230, 109, 0.15)',
    'rgba(167, 139, 250, 0.15)',
    'rgba(96, 165, 250, 0.15)',
  ],
  speed = 0.2,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const bubblesRef = useRef<Bubble[]>([])

  const prefersReducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  const isMobile = useRef(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )

  const initBubbles = useCallback((width: number, height: number) => {
    const count = isMobile.current ? Math.min(particleCount, 20) : particleCount
    const bubbles: Bubble[] = []
    for (let i = 0; i < count; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 20 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.5 ? 'circle' : 'roundedRect',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
      })
    }
    bubblesRef.current = bubbles
  }, [particleCount, colors, speed])

  useEffect(() => {
    if (prefersReducedMotion.current) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height
      if (bubblesRef.current.length === 0) {
        initBubbles(rect.width, rect.height)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const bubbles = bubblesRef.current

      for (const b of bubbles) {
        b.x += b.vx
        b.y += b.vy
        b.rotation += b.rotationSpeed

        if (b.x < -b.radius) b.x = width + b.radius
        if (b.x > width + b.radius) b.x = -b.radius
        if (b.y < -b.radius) b.y = height + b.radius
        if (b.y > height + b.radius) b.y = -b.radius

        ctx.save()
        ctx.translate(b.x, b.y)
        ctx.rotate(b.rotation)
        ctx.fillStyle = b.color

        if (b.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, b.radius, 0, Math.PI * 2)
          ctx.fill()
        } else {
          const r = b.radius * 0.3
          const size = b.radius * 1.5
          const half = size / 2
          ctx.beginPath()
          ctx.moveTo(-half + r, -half)
          ctx.lineTo(half - r, -half)
          ctx.quadraticCurveTo(half, -half, half, -half + r)
          ctx.lineTo(half, half - r)
          ctx.quadraticCurveTo(half, half, half - r, half)
          ctx.lineTo(-half + r, half)
          ctx.quadraticCurveTo(-half, half, -half, half - r)
          ctx.lineTo(-half, -half + r)
          ctx.quadraticCurveTo(-half, -half, -half + r, -half)
          ctx.fill()
        }

        ctx.restore()
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [initBubbles])

  if (prefersReducedMotion.current) return null

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
