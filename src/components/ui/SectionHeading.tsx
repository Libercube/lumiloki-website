import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  showUnderline?: boolean
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  showUnderline = true,
}: SectionHeadingProps) {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {showUnderline && <div className={styles.underline} />}
    </div>
  )
}
