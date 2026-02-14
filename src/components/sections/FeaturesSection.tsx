import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import GlowCard from '../ui/GlowCard'
import { features } from '../../data/features'
import styles from './FeaturesSection.module.css'

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          label="核心科技"
          title="重新定义魔方体验"
          subtitle="将前沿科技与极致手感融为一体，每一面都闪耀智慧之光"
        />

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className={styles.featureCard}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconRing} />
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
