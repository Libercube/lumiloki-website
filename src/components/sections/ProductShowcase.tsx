import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import ScrollReveal from '../ui/ScrollReveal'
import styles from './ProductShowcase.module.css'

const showcaseProducts = [
  {
    id: 'lumi-pro',
    name: 'Lumi Pro 旗舰版',
    description: '全新旗舰级智能发光魔方，六轴传感器 + 全面LED + BLE 5.0，竞速与炫彩兼得。',
    price: '¥599',
    emoji: '🟦',
    featured: true,
  },
  {
    id: 'lumi-lite',
    name: 'Lumi Lite 青春版',
    description: '轻量化设计，入门级智能发光魔方，体验全彩灯效与蓝牙连接。',
    price: '¥299',
    emoji: '🟩',
  },
  {
    id: 'lumi-speed',
    name: 'Lumi Speed 竞速版',
    description: '专为速拧选手打造，极致手感与精准计时完美结合。',
    price: '¥499',
    emoji: '🟧',
  },
]

export default function ProductShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          label="明星产品"
          title="为你精选"
          subtitle="从入门到专业，总有一款点亮你的指尖"
        />

        <div className={styles.grid}>
          {showcaseProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className={index === 0 ? styles.mainProduct : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <ScrollReveal>
          <Link to="/products" className={styles.viewAll}>
            查看全部产品
            <span className={styles.viewAllArrow}>→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
