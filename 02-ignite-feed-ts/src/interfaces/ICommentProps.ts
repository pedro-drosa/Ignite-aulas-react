export interface ICommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}
