import { Button, Form, Input, Modal, Select } from "antd";
import { useGetFormData } from "../../shared/hooks/use-get-form-data/use-get-form-data.ts";
import { useFetchTask } from "../../shared/queries/tasks-controller/get-task/use-fetch-task.ts";
import { ITaskBody } from "../../shared/queries/tasks-controller/post-task/types.ts";
import { SelectUserItem } from "../select-user-item/SelectUserItem.tsx";
import { updateTask } from "../../shared/queries/tasks-controller/update-task/update-task.ts";
import { ChangeEvent, useEffect } from "react";
import { updateTaskStatus } from "../../shared/queries/tasks-controller/update-task-status/update-task-status.ts";

interface ITaskFormProps {
  taskId: number | null;
  isModalOpen: boolean;
  handleModalClose: () => void;
  tasksRefetch: () => void;
}

export const UpdateForm = ({
  taskId,
  isModalOpen,
  handleModalClose,
  tasksRefetch,
}: ITaskFormProps) => {
  const [form] = Form.useForm();
  const { data: taskData, isFetching: isTaskFetching } = useFetchTask(taskId);

  useEffect(() => {
    if (taskId) {
      form.setFieldsValue({
        title: taskData?.title,
        description: taskData?.description,
        boardId: taskData?.boardName,
        priority: taskData?.priority,
        status: taskData?.status,
        assigneeId: taskData?.assignee.id,
      });
    }
  }, [form, taskData, taskId]);

  const { users, projects, priorities, statuses } = useGetFormData();

  const handleStatusChange = (e: ChangeEvent) => {
    updateTaskStatus(taskId as number, { status: e as unknown as string });
  };

  const onFinish = (values: ITaskBody) => {
    updateTask(taskId as number, values)
      .then(() => form.resetFields())
      .then(() => handleModalClose())
      .then(() => tasksRefetch());
  };

  if (isTaskFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Modal
        title="Редактирование задачи"
        open={isModalOpen}
        footer={null}
        onCancel={handleModalClose}
      >
        <Form
          form={form}
          variant={"outlined"}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            title: taskData?.title,
            description: taskData?.description,
            boardId: taskData?.boardName,
            priority: taskData?.priority,
            status: taskData?.status,
            assigneeId: taskData?.assignee.id,
          }}
        >
          <Form.Item
            label="Название задачи"
            name="title"
            rules={[{ required: true, message: "Введите название задачи" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Описание задачи"
            name="description"
            rules={[{ required: true, message: "Введите описание задачи" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Проект"
            name="boardId"
            rules={[{ required: true, message: "Введите название проекта" }]}
          >
            <Select options={taskData ? [] : projects} />
          </Form.Item>
          <Form.Item
            label="Приоритет"
            name="priority"
            rules={[{ required: true, message: "Введите приоритет" }]}
          >
            <Select options={priorities} />
          </Form.Item>
          <Form.Item
            label="Статус"
            name="status"
            rules={[{ message: "Введите статус" }]}
          >
            <Select onChange={handleStatusChange} options={statuses} />
          </Form.Item>
          <Form.Item
            label="Исполнитель"
            name="assigneeId"
            rules={[{ required: true, message: "Введите исполнителя" }]}
          >
            <Select
              options={users?.map((item) => {
                return {
                  label: (
                    <SelectUserItem
                      userName={item.label}
                      userImgUrl={item.imgUrl}
                    />
                  ),
                  value: item.value,
                };
              })}
            />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary" htmlType="submit">
              Обновить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
