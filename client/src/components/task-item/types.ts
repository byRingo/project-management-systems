export interface ITasksProps {
  assignee: {
    avatarUrl: string;
    email: string;
    fullName: string;
    id: number;
  };
  assigneeId?: number;
  boardId?: number;
  boardName?: string;
  description: string;
  id?: number;
  priority: string;
  status: string;
  title: string;
  onClick?: () => void;
}
