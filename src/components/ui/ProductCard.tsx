import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: string
  emoji: string
  featured?: boolean
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  emoji,
  featured = false,
}: ProductCardProps) {
  return (
    <Link
      to={`/products/${id}`}
      className={cn(styles.card, featured && styles.featured)}
    >
      <div className={styles.imageWrapper}>
        {featured && <span className={styles.featuredBadge}>HOT</span>}
        <span className={styles.imagePlaceholder}>{emoji}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>{price}</span>
      </div>
    </Link>
  )
}
