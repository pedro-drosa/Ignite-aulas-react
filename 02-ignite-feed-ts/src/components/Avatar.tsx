import { IAvatarProps } from '../interfaces/IAvatarProps';
import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, ...props }: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
