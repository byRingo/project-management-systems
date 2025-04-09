interface IUser {
  id: number;
  fullName: string;
  email: string;
  description: string;
  avatarUrl: string;
  teamId: number;
  teamName: string;
  tasksCount: number;
}

export interface IUsers {
  data: IUser[];
}
