export interface IBoardItemProps {
  description: string;
  id: number;
  name: string;
  taskCount: number;
  onClick: (id: number) => void;
}
