import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import {
  publishedDateFormatted,
  publishedDateRelativeToNow,
  dateTime,
} from '../lib/date-fns/formatPublishedDate';
import { IPostProps } from '../interfaces/IPostProps';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }: IPostProps) {
  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState([
    'Muito bom Pedro, parabéns!! 👏👏',
  ]);

  function handleCreateComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted(publishedAt)}
          dateTime={dateTime(publishedAt)}
        >
          {publishedDateRelativeToNow(publishedAt)}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
