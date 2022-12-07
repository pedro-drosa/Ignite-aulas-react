import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import { ICommentProps } from '../interfaces/ICommentProps';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevState) => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pedro-drosa.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Mascarenhas</strong>
              <time
                title="28 de Novembro ás 08:30h"
                dateTime="2022-11-28 08:30:00"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
