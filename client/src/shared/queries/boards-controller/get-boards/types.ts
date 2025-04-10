export interface IBoardItem {
  description: string;
  id: number;
  name: string;
  taskCount: number;
}

export interface IBoards {
  data: IBoardItem[];
}
