import { motion } from 'motion/react'
import SectionHeading from '../components/ui/SectionHeading'
import GlowCard from '../components/ui/GlowCard'
import ScrollReveal from '../components/ui/ScrollReveal'
import GlowDivider from '../components/ui/GlowDivider'
import Timeline from '../components/sections/Timeline'
import styles from './BrandStoryPage.module.css'

const brandValues = [
  {
    icon: '💡',
    title: '创新',
    description: '不断突破技术边界，将前沿科技融入日常玩具，重新定义魔方的可能性。',
    color: 'var(--color-primary)',
  },
  {
    icon: '🤗',
    title: '包容',
    description: '魔方属于每一个人。无论年龄、水平，Lumiloki 都让你找到属于自己的乐趣。',
    color: 'var(--color-secondary)',
  },
  {
    icon: '🎉',
    title: '乐趣',
    description: '产品设计始终以乐趣为核心，让科技不再冰冷，让每一次旋转都充满惊喜。',
    color: 'var(--color-accent)',
  },
]

export default function BrandStoryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            LUMILOKI 的故事
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            从一个简单的想法到全球玩家的热爱
          </motion.p>
        </div>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className={styles.origin}>
            <div className={styles.originContent}>
              <SectionHeading
                label="品牌起源"
                title="因热爱而生"
              />
              <p className={styles.originText}>
                2021年，三位来自深圳的魔方爱好者聚在一起，他们有一个共同的梦想——
                让魔方不只是一个益智玩具，而是能融入潮流生活的智能伙伴。
                他们相信，当科技遇见创意，古老的魔方可以焕发出全新的生命力。
                于是，Lumiloki 诞生了。"Lumi"代表光，"Loki"代表灵动与创造力。
                每一款 Lumiloki 产品，都承载着对魔方的热爱和对创新的执着。
              </p>
            </div>
          </div>
        </ScrollReveal>

        <GlowDivider />

        <div className={styles.values}>
          <SectionHeading
            label="品牌价值"
            title="我们的信念"
            subtitle="创新、包容、乐趣——三个简单的词，驱动我们前行"
          />
          <div className={styles.valuesGrid}>
            {brandValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.15}>
                <GlowCard className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3 className={styles.valueTitle} style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <GlowDivider />

        <div className={styles.timelineSection}>
          <SectionHeading
            label="品牌历程"
            title="成长之路"
            subtitle="每一个里程碑都是前行的动力"
          />
          <Timeline />
        </div>
      </div>
    </div>
  )
}
