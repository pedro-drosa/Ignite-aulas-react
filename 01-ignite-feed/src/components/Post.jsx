import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/pedro-drosa.png" />
          <div className={styles.authorInfo}>
            <strong>Pedro Mascarenhas</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="28 de Novembro ás 08:30h" dateTime="2022-11-28 08:30:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">pedro.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}