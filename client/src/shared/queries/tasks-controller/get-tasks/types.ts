interface ITaskItem {
  assignee: {
    avatarUrl: string;
    email: string;
    fullName: string;
    id: number;
  };
  assigneeId: number;
  boardId: number;
  boardName: string;
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}

export interface ITask {
  data: ITaskItem;
}

export interface ITasks {
  data: ITaskItem[];
}
