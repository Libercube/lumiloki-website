import { motion } from 'motion/react'
import GlowButton from '../ui/GlowButton'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.noiseOverlay} />

      <div className={styles.content}>
        <motion.div
          className={styles.productImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.cubeGlow} />
          <div className={styles.cubePlaceholder}>🟦</div>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          LUMILOKI
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          点亮你的每一次旋转
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <GlowButton to="/products" size="large">
            探索产品
          </GlowButton>
          <GlowButton to="/brand" variant="secondary" size="large">
            品牌故事
          </GlowButton>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>↓</div>
    </section>
  )
}
