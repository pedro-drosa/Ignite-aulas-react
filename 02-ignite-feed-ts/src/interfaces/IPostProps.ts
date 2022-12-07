import { IAuthor } from './IAuthor';
import { IContent } from './IContent';

export interface IPostProps {
  author: IAuthor;
  publishedAt: Date;
  content: IContent[];
}
