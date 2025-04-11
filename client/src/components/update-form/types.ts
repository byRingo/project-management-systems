export interface ITaskFormProps {
  taskId: number | null;
  isModalOpen: boolean;
  handleModalClose: () => void;
  tasksRefetch: () => void;
}
