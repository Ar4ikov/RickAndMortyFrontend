import styles from '../styles/Home.module.css';

export default function EpisodeCard({ name, air_date, episode }) {
  return (
    <div className={styles.episodeCard}>
      <span>{name}</span>
      <span>
        {new Date(air_date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </span>
      <span>{episode}</span>
    </div>
  );
}
