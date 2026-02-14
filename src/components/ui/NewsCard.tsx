import { Link } from 'react-router-dom'
import styles from './NewsCard.module.css'

interface NewsCardProps {
  id: string
  title: string
  summary: string
  category: string
  date: string
  emoji: string
}

export default function NewsCard({
  id,
  title,
  summary,
  category,
  date,
  emoji,
}: NewsCardProps) {
  return (
    <Link to={`/news/${id}`} className={styles.card}>
      <div className={styles.image}>{emoji}</div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
      </div>
    </Link>
  )
}
