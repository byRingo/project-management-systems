import { Button, Form, Input, Modal, Select } from "antd";
import { useGetFormData } from "../../shared/hooks/use-get-form-data/use-get-form-data.ts";
import { postTask } from "../../shared/queries/tasks-controller/post-task/post-task.ts";
import { ITaskBody } from "../../shared/queries/tasks-controller/post-task/types.ts";
import { SelectUserItem } from "../select-user-item/SelectUserItem.tsx";
import { useFetchTasks } from "../../shared/queries/tasks-controller/get-tasks/use-fetch-tasks.ts";

interface ITaskFormProps {
  isModalOpen: boolean;
  onCancel: () => void;
}

export const CreateForm = ({ isModalOpen, onCancel }: ITaskFormProps) => {
  const [form] = Form.useForm();
  const { refetch } = useFetchTasks();
  const { users, projects, priorities } = useGetFormData();

  const onFinish = (values: ITaskBody) => {
    postTask(values)
      .then(() => form.resetFields())
      .then(() => onCancel())
      .then(() => refetch());
  };

  return (
    <>
      <Modal
        title="Создание задачи"
        open={isModalOpen}
        footer={null}
        onCancel={onCancel}
      >
        <Form
          form={form}
          variant={"outlined"}
          layout="vertical"
          onFinish={onFinish}
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
            <Select options={projects} />
          </Form.Item>
          <Form.Item
            label="Приоритет"
            name="priority"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select options={priorities} />
          </Form.Item>
          <Form.Item
            label="Исполнитель"
            name="assigneeId"
            rules={[{ required: true, message: "Please input!" }]}
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
              Создать
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
