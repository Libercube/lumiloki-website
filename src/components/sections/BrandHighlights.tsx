import ScrollReveal from '../ui/ScrollReveal'
import GlowButton from '../ui/GlowButton'
import { cn } from '../../utils/cn'
import styles from './BrandHighlights.module.css'

const highlights = [
  {
    tag: '智能科技',
    title: '不只是魔方，更是智能伙伴',
    description:
      '内置六轴传感器与蓝牙模块，Lumiloki 能实时追踪你的每一步操作。配合专属APP，复盘回放、成绩记录、在线对战，让魔方不再只是一个人的游戏。',
    emoji: '🤖',
    ctaText: '了解科技',
    ctaLink: '/brand',
  },
  {
    tag: '潮玩设计',
    title: '让魔方成为你的随身潮品',
    description:
      '1600万色全面LED灯效，多种预设灯光模式，还支持自定义编程灯效。无论是日常把玩还是社交分享，Lumiloki 都是最亮眼的存在。',
    emoji: '✨',
    ctaText: '探索产品',
    ctaLink: '/products',
    reverse: true,
  },
]

export default function BrandHighlights() {
  return (
    <section className={styles.section}>
      <div className="container">
        {highlights.map((item) => (
          <div
            key={item.tag}
            className={cn(styles.block, item.reverse && styles.blockReverse)}
          >
            <ScrollReveal direction={item.reverse ? 'right' : 'left'}>
              <div className={styles.imageWrapper}>{item.emoji}</div>
            </ScrollReveal>

            <ScrollReveal direction={item.reverse ? 'left' : 'right'} delay={0.2}>
              <div className={styles.textContent}>
                <span className={styles.tag}>{item.tag}</span>
                <h3 className={styles.blockTitle}>{item.title}</h3>
                <p className={styles.blockDesc}>{item.description}</p>
                <GlowButton to={item.ctaLink} variant="secondary">
                  {item.ctaText}
                </GlowButton>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  )
}
