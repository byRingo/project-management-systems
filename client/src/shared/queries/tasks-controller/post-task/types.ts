export interface ITaskBody {
  assigneeId: number;
  boardId: number;
  description: string;
  priority: string;
  title: string;
  status?: string;
}
