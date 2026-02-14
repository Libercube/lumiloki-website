import { type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import styles from './GlowCard.module.css'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.glow} />
      {children}
    </div>
  )
}
